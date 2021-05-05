import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

 carAddForm:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService
    ,private carService:CarService) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }
 createCarAddForm(){
 this.carAddForm=this.formBuilder.group({
  
   dailyPrice:["",Validators.required],
   brandId:["",Validators.required],
   colorId:["",Validators.required],
   description:["",Validators.required],
   modelYear:["",Validators.required],
 });
 }
 add(){
  let carModel = Object.assign({}, this.carAddForm.value);
   this.carService.add(carModel).subscribe((response)=>{
     console.log(response)
    this.toastrService.success(response.message,"ürün eklendi,başarılı")
  },responseError=>{
    if(responseError.error.Errors.length>0){
      for (let i = 0; i <responseError.error.Errors.length; i++) {
        this.toastrService.error(responseError.error.Errors[i].ErrorMessage
          ,"Doğrulama hatası")
      }       
    } 
  }) 

}
}


