import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:Car[]=[];
  carImages: CarImage[];
  filterCarText = "";
  defaultImg = "/Images/{be39a83d-f214-4cc0-8775-6342a54d8a59}.jpg"
 
  apiUrl = "https://localhost:44373/";


  constructor(private carDetailService:CarDetailService,
    private carService: CarService,
    private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this. getCarImages(params["carId"]);
        this.getCarDetailsByCarId(params["carId"]);
      }
      else{
       this.getCars();
      }
    })
  }
 

  getCars(){
    this.carImageService.getCarDetailList().subscribe(response=>{
      this.carImages=response.data;
    })
  }
 
  getCarDetailsByCarId(carId:number){
    this.carService.getCarDetailsById(carId).subscribe(response => {
      this.cars= response.data;
    })
  }
  getCarImages(carId:number){
    this.carImageService.getCarImages(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }
  getCurrentImageClass(image:CarImage ){
    if(image==this.carImages[0]){
      return "carousel-item active"
    } else {
      return "carousel-item"
    }
  }
  
}
