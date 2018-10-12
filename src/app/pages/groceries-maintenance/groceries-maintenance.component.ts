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
  um: string = "lt"
  constructor(
    private groceriesService: GroceriesService,
    private router:Router,
    private fb: FormBuilder) {
      this.itemsBreadcrumb  = new Array()
      this.units = [
        {label: "KG", value: UnityOfMeasurement.KG},
        {label: "LITRO", value: UnityOfMeasurement.LT},
        {label: "UNIDADE", value: UnityOfMeasurement.UN}
      ]
  }

  ngOnInit() {
    this.itemsBreadcrumb.push(new ItemBreadcrumb("Inicio", "/inicio"))
    this.itemsBreadcrumb.push(new ItemBreadcrumb("Listar Mantimentos", "/mantimentos"))
    this.itemsBreadcrumb.push(new ItemBreadcrumb("New", "/mantimentos/novo"))
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
        'expirationDate': new FormControl(null, Validators.required),
        'dateFactory': new FormControl(null, Validators.required),
    })
  }

  cancel() {
    this.router.navigate(['/mantimentos']);
  }

  onSubmit(value: Grocerie) {
    if (this.userform.valid) {
      this.groceriesService.add(value)
    }
    console.log(this.groceriesService.list())
  }
}
