import { Component, OnInit } from '@angular/core';
import * as json_data from '../../../json-samples/scenario_results_all.json';

//const localData: object[] = json_data;

@Component({
  selector: 'app-up-settings',
  templateUrl: './up-settings.component.html',
  styleUrls: ['./up-settings.component.scss']
})

export class UpSettingsComponent implements OnInit {

  nombres: object[];
  first = true;
  scenarios: object[];
  i = 0;

  constructor() { 
    /*for (this.i ; this.i < ) {
      console.log(json_data)
    }*/
    //console.log(this.localData[0])
    //console.log(localData.values);
  }

  ngOnInit() {
  }

}
