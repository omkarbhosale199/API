import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {
//  params means parameter
// HttpParams : in angular it use to construct url parameter for http Request

  yahooApiUrl:string = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete'

  constructor(private _httpClient:HttpClient) { }
//   getYahooFinance():Observable<any>{
// HttpParams : in angular it use to construct url parameter for http Request

// create httpParams Obj
//  let getParams = new HttpParams()

// append parameter
//  getParams=getParams.append('q', 'tesla');
//  getParams=getParams.append( 'region', 'US');

// creating hederObj
// let headers= new HttpHeaders(
//   {
//     'X-RapidAPI-Key': '98af240b42mshd360b788abc45d4p167ff9jsne03bf0e3c8ad',
//     'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
//   }
// );

// we can not pass mor than  2 parameter so we get options Obj and inside we take headers and getParams

// const options ={
//   optionHeader:headers,
//   optionParams:getParams
// }
// return this._httpClient.get(this.yahooApiUrl,options)
//   }

getYahooFinance():Observable<any>{

let getParams = new HttpParams();

getParams=getParams.append('q','tesla');
getParams=getParams.append('region','US');

let header= new HttpHeaders(
  {
    'X-RapidAPI-Key': '98af240b42mshd360b788abc45d4p167ff9jsne03bf0e3c8ad',
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  }
)
// IMP
const options={
  headers:header,
  params:getParams
}
return this._httpClient.get(this.yahooApiUrl,options)

//OR
// return this._httpClient.get(this.yahooApiUrl,{headers:header,params:getParams})
}
}
