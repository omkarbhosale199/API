import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../service/rapidapi.service';

@Component({
  selector: 'app-rapid',
  templateUrl: './rapid.component.html',
  styleUrls: ['./rapid.component.css']
})
export class RapidComponent implements OnInit {

  constructor(private _rapidApi:RapidapiService) { }

  ngOnInit(): void {
    this._rapidApi.getYahooFinance().subscribe(res=>{
      console.log("Rapid get called",res);

    })
  }

}
