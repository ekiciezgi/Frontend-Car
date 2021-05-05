import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  car:Car;
  carDetail:CarDetailService[];
  carImages: CarImage[] = [];
  apiUrl="https://localhost:44373/api/"
  constructor(private httpClient:HttpClient) {

   }
   getCarImages(): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carImages/getall';
   return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
 }

 // getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
   // let path=this.apiUrl+"cars/getcardetails?carId="+carId
   // return this.httpClient.get<ListResponseModel<CarImage>>(path);
   // }
    getCarDetails():Observable<ListResponseModel<CarImage>>{
      let newPath = this.apiUrl + "cars/getcardetails";
      return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
    }
    getCarDetailsById(carId:number): Observable<ListResponseModel<CarImage>>{
      let newPath = this.apiUrl + "cars/getcardetailsbyid?carId=" + carId;
      return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
    }
   
}
