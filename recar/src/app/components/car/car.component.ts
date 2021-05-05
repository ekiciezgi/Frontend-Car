import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
 cars:Car[]=[];
 carImages: CarImage[];
 filterCarText = "";
 defaultImg = "/Images/{be39a83d-f214-4cc0-8775-6342a54d8a59}.jpg"

 apiUrl = "https://localhost:44373/";
 filterText="";

  constructor(private CarService:CarService,
    private carImageService: CarImageService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
        console.log(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
        console.log(params["colorId"])
      } 
      else{
        this.getCars();
      
      }
    })
  
  }



  getCars(){
    this.CarService.getCarDetailList().subscribe(response=>{
      this.cars=response.data
      console.log(response)
 
    })

}

addToCart(car:Car){
 
  this.toastrService.success("sepete eklendi");
  this.cartService.addToCart(car);
}
getCarsByBrand(brandId:number){
  this.CarService.getCarsByBrand(brandId).subscribe((response) => {
    this.cars = response.data
    console.log(response.data)
  });
}
getCarsByColor(colorId:number){
  this.CarService.getCarsByColor(colorId).subscribe((response) => {
    this.cars = response.data
  });
}
getCarImages(carId:number){
  this.carImageService.getCarImages(carId).subscribe((response)=>{
    this.carImages = response.data;
    
  });
}

getCurrentImageClass(carImages:CarImage){
 
    return this.apiUrl;

}
}

