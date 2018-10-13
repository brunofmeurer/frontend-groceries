import { Component, OnInit } from '@angular/core';
import { ItemBreadcrumb } from '../../models/ItemBreadcrumb'
import { GroceriesService } from 'src/app/services/groceries.service';
import { Router } from '@angular/router';
import { Grocerie } from 'src/app/models/Grocerie';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UnityOfMeasurement } from 'src/app/models/UnityOfMeasurement';
@Component({
  selector: 'app-groceries-maintenance',
  templateUrl: './groceries-maintenance.component.html',
  styleUrls: ['./groceries-maintenance.component.css'],
  providers: [GroceriesService, FormBuilder]
})
export class GroceriesMaintenanceComponent implements OnInit {
  itemsBreadcrumb: Array<ItemBreadcrumb>
  userform: FormGroup
  units: any[]
  um: string
  quantityMask: any
  expired: boolean
  maxDateFactory: Date
  isUserFormValid: boolean
  constructor(
    private groceriesService: GroceriesService,
    private router:Router,
    private fb: FormBuilder) {
      this.itemsBreadcrumb  = new Array()
      this.units = [
        {label: "QUILIGRAMA", value: UnityOfMeasurement.KG},
        {label: "LITRO", value: UnityOfMeasurement.LT},
        {label: "UNIDADE", value: UnityOfMeasurement.UN}
      ]
      this.um = "kg"
  }

  ngOnInit() {
    this.itemsBreadcrumb.push(new ItemBreadcrumb("Inicio", "/inicio"))
    this.itemsBreadcrumb.push(new ItemBreadcrumb("Listar Mantimentos", "/mantimentos"))
    this.itemsBreadcrumb.push(new ItemBreadcrumb("Novo", "/mantimentos/novo"))
    this.userform = this.fb.group({
        'name': new FormControl('', Validators.compose(
          [
            Validators.required,
            Validators.maxLength(50)
          ])),
        'unitOfMeasurement': new FormControl(null, Validators.required),
        'quantity': new FormControl(0),
        'price': new FormControl(0, Validators.compose(
          [
            Validators.pattern(""),
            Validators.required
          ])),
        'spoils': new FormControl(false, Validators.required),
        'expirationDate': new FormControl(null),
        'dateFactory': new FormControl(null, Validators.required)
    })
    this.onUnityChange({value: 'kg'})
    this.userform.valueChanges.forEach(() => {
      this.isUserFormValid = this.userform.valid
      console.log(this.userform.valid)
    })
  }

  cancel() {
    this.router.navigate(['/mantimentos']);
  }

  onSubmit(value: Grocerie) {
    console.log(this.userform.valid)
    if (this.userform.valid) {
      this.groceriesService.add(value)
    }
    console.log(this.groceriesService.list())
  }

  onUnityChange($event) {
    if ($event.value != null) {
      this.um = $event.value.toLowerCase()
      switch(this.um) {
        case 'kg':
        case 'lt':
        this.quantityMask = { prefix: '', thousands: '.', decimal: ',', precision : 3 }
          break;
        default:
          this.quantityMask = { prefix: '', thousands: '.', precision: 0 }
      }
    }
  }

  onSpoilsDateChange(value) {
    if (value.spoils) {
      this.userform.get("expirationDate").setValidators(Validators.required)
    } else {
      this.userform.get("expirationDate").clearValidators()
    }
    this.userform.get("expirationDate").updateValueAndValidity()

    console.log(this.userform.get("expirationDate").validator)
    
    if (value.spoils != null && value.expirationDate != null) {
      this.expired = value.spoils && value.expirationDate.getTime() < new Date().getTime()
    }

    if (value.expirationDate != null) {
      this.maxDateFactory = value.expirationDate
    }
  }
}
