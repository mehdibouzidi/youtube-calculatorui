import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Outpuddata } from 'src/model/request/outputdata.model';
import { UtilStatic } from './UtilStatic';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  add(outputdata: Outpuddata){
    const url = `${UtilStatic.API_SOURCE}${UtilStatic.CONTROLLER_PATH}/${UtilStatic.ENDPOINT_PATH}`;
    return this.http.post(url, outputdata);
  }
}
