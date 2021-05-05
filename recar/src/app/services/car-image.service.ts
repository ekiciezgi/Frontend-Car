import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
 apiURL=" https://localhost:44373/api/";
 apiImagesURL='https://localhost:44373';
 
 
  constructor(private httpClient: HttpClient) { }

  getCarDetailList():Observable<ListResponseModel<CarImage>> {
    let newpath=this.apiURL+"carImages/getlistimage"
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiURL);
}
getCarImages(carId:number):Observable<ListResponseModel<CarImage>> {
  let newPath = this.apiURL + "CarImages/getimagesbycarid?carId="+carId;
  return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
}

}
