import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogletranlateService {
detectPostUrl= 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect';
languageGetUrl='https://google-translate1.p.rapidapi.com/language/translate/v2/languages';
translatePostUrl= 'https://google-translate1.p.rapidapi.com/language/translate/v2';

  constructor(private _httpClient:HttpClient) { }

  detectPost(id:any):Observable<any>{
    let header1= new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': '98af240b42mshd360b788abc45d4p167ff9jsne03bf0e3c8ad',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    })
    return this._httpClient.post(this.detectPostUrl,id,{headers:header1})
  }
  getGoogleTrans():Observable<any>{

    let header2= new HttpHeaders({
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': '98af240b42mshd360b788abc45d4p167ff9jsne03bf0e3c8ad',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    })
    return this._httpClient.get(this.languageGetUrl,{headers:header2});
  }
  postGoogle(data1:any):Observable<any>{
    let header3= new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': '98af240b42mshd360b788abc45d4p167ff9jsne03bf0e3c8ad',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  })
   return this._httpClient.post(this.translatePostUrl,data1,{headers:header3})
  }
}
