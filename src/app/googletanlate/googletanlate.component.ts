import { Component, OnInit } from '@angular/core';
import { GoogletranlateService } from '../service/googletranlate.service';

@Component({
  selector: 'app-googletanlate',
  templateUrl: './googletanlate.component.html',
  styleUrls: ['./googletanlate.component.css']
})
export class GoogletanlateComponent implements OnInit {

  constructor(private _GoogletranlateService:GoogletranlateService) { }

  ngOnInit(): void {
this.getLanguageData()
  }
  getLanguageData(){
    this._GoogletranlateService.getGoogleTrans().subscribe(res=>{
      console.log("Google Translator call",res);
    })
  };
  postOnBrowser(){
    this._GoogletranlateService.detectPost(id).subscribe(res=>{
      console.log(`first detect then Post Data${res.id}`);
    })
  };
  translateLanguage(){
    this._GoogletranlateService.postGoogle(data1).subscribe(res=>{
      console.log(` translated Language ${res}`);

    })
  }
}
