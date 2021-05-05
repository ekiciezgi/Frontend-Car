import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44373/api/"
  constructor(private httpClient:HttpClient) {
   
   }
  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetailsByCarId(carId:number):Observable<ListResponseModel<Car>>{
  let newpath=this.apiUrl+"cars/getcardetails?carId="+carId
  return this.httpClient.get<ListResponseModel<Car>>(newpath);
  }
  getCarsByBrand(brandId:number): Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbybrand?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number): Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbycolor?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
    
  }
  
    getCarDetailList():Observable<ListResponseModel<Car>>{
      let newpath=this.apiUrl+"cars/getcarlistwithdetails"
      return this.httpClient.get<ListResponseModel<Car>>(newpath);
      }

        
    getCarDetailsById(carId:number):Observable<ListResponseModel<Car>>{
      let newpath=this.apiUrl+"carImages/getcardetailbyid?Id="+carId
      return this.httpClient.get<ListResponseModel<Car>>(newpath);
      }
    add(car:Car):Observable<ResponseModel>{
      return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car);
    }
}
