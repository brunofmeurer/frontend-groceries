import { Component, OnInit } from '@angular/core';
import { ItemBreadcrumb } from '../../models/ItemBreadcrumb'
import { GroceriesService } from 'src/app/services/groceries.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Grocerie } from 'src/app/models/Grocerie';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UnityOfMeasurement } from 'src/app/models/UnityOfMeasurement';
import { SelectItem } from 'primeng/api';

/**
 * @author Bruno Meurer
 * @description component page to maintenance groceries
 */
@Component({
  selector: 'app-groceries-maintenance',
  templateUrl: './groceries-maintenance.component.html',
  styleUrls: ['./groceries-maintenance.component.css'],
  providers: [GroceriesService, FormBuilder]
})
export class GroceriesMaintenanceComponent implements OnInit {
  /**
   * @description itens of custom breadcrumb
   */
  itemsBreadcrumb: Array<ItemBreadcrumb>

  /**
   * @description form group
   */
  userform: FormGroup

  /**
   * @description itens of dropdown of unit's field
   */

  units: SelectItem[]
  /**
   * @description unity of measurement addon used in quantity's field
   */
  um: string

  /**
   * @description quantity's mask
   */
  quantityMask: any

  /**
   * @description set warning item expired
   */
  expired: boolean

  /**
   * @description set max date factory when item expired
   */
  maxDateFactory: Date

  /**
   * @description is user form valid to enable button save
   */
  isUserFormValid: boolean

  /**
   * @description when edit, set grocerie
   */
  grocerie: Grocerie

  /**
   * @description flag loading
   */
  loading: boolean
  constructor(
    private groceriesService: GroceriesService,
    private router:Router,
    private fb: FormBuilder,
    private route: ActivatedRoute) {
      this.itemsBreadcrumb  = new Array()
      this.units = [
        {label: "QUILIGRAMA", value: UnityOfMeasurement.KG},
        {label: "LITRO", value: UnityOfMeasurement.LT},
        {label: "UNIDADE", value: UnityOfMeasurement.UN}
      ]
      this.um = "kg"
      this.grocerie = new Grocerie()
      this.loading = false
  }

  /**
   * @description init page
   */
  ngOnInit() {
    this.itemsBreadcrumb.push(new ItemBreadcrumb("Inicio", "/inicio"))
    this.itemsBreadcrumb.push(new ItemBreadcrumb("Listar Mantimentos", "/mantimentos"))
    if (this.route.snapshot.params.id == null) {
      this.itemsBreadcrumb.push(new ItemBreadcrumb("Novo", "/mantimentos/novo")) 
    } else {
      this.itemsBreadcrumb.push(new ItemBreadcrumb("Editar", "/mantimentos/editar/" + this.route.snapshot.params.id))
    }
    
    this.setFormControl()
    this.onUnityChange({value: 'kg'})

    if (this.route.snapshot.params.id != null) {
      this.loading = true
      this.groceriesService.find(this.route.snapshot.params.id).then(response => {
        if (response != null) {
          this.grocerie = response

          console.log(this.grocerie)
          this.setFormControl()
          this.loading = false
        }
      })
    }
  }

  /**
   * @description intialize form controls
   */
  setFormControl() {
    this.userform = this.fb.group({
      'name': new FormControl(this.grocerie.name, Validators.compose(
        [
          Validators.required,
          Validators.maxLength(50)
        ])),
      'unitOfMeasurement': new FormControl(this.grocerie.unitOfMeasurement, Validators.required),
      'quantity': new FormControl(this.grocerie.quantity),
      'price': new FormControl(this.grocerie.price, Validators.compose(
        [
          Validators.pattern(""),
          Validators.required
        ])),
      'spoils': new FormControl(this.grocerie.spoils, Validators.required),
      'expirationDate': new FormControl(this.grocerie.expirationDate),
      'dateFactory': new FormControl(this.grocerie.dateFactory, Validators.required)
    })
    this.userform.valueChanges.forEach(() => {
      this.isUserFormValid = this.userform.valid
    })
    this.isUserFormValid = this.userform.valid
  }

  /**
   * @description return to prev page
   */
  cancel() {
    this.router.navigate(['/mantimentos']);
  }

  /**
   * 
   * @param grocerie 
   * @description save or update grocerie and redirect page
   */
  onSubmit(grocerie: Grocerie) {
    if (this.userform.valid) {
      if (this.route.snapshot.params.id == null) {
        this.groceriesService.add(grocerie)
      } else {
        this.groceriesService.edit(grocerie, this.route.snapshot.params.id)
      }
      this.router.navigate(['/mantimentos']);
    }
  }

  /**
   * 
   * @param $event 
   * @description set mask of quantity and addon of quantity when um's field change
   */
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

  /**
   * 
   * @param grocerie
   * @description when spoil's field or date change, make expiration date field required and set max data factory field
   */
  onSpoilsDateChange(grocerie: Grocerie) {
    if (grocerie.spoils) {
      this.userform.get("expirationDate").setValidators(Validators.required)
    } else {
      this.userform.get("expirationDate").clearValidators()
    }
    this.userform.get("expirationDate").updateValueAndValidity()
    
    if (grocerie.spoils != null
    &&  grocerie.expirationDate != null) {
      this.expired = grocerie.spoils && grocerie.expirationDate.getTime() < new Date().getTime()
    }

    if (grocerie.expirationDate != null) {
      this.maxDateFactory = grocerie.expirationDate
    }
  }
}
