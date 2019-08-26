import { Component, OnInit } from '@angular/core';
import * as json_data from '../../json-samples/scenario_results_all.json';

@Component({
  selector: 'app-tools-sidebar',
  templateUrl: './tools-sidebar.component.html',
  styleUrls: ['./tools-sidebar.component.scss']
})

// const localData: object[] = json_data;
// const localData: object[] = json_data;

export class ToolsSidebarComponent implements OnInit {

  /*categoryColor1: any = '#ffffff';
  categoryColor2: any = '#000000';
  fontColor: string;*/
  i = 0;
  data: any;
  options: any;
  displayTools: boolean;
  /*scenarioId: number[];
  scenarioName: string[];
  scenarioInfo: object[];
  scenResObj: object[];*/


    constructor() {
        this.data = {
            labels: ['Indicator 1', 'Indicator 2', 'Indicator 3', 'Indicator 4', 'Indicator 5', 'Indicator 6',
             'Indicator 7', 'Indicator 8', 'Indicator 9', 'Indicator 10'
            ],
            datasets: [
                {
                    label: 'Base',
                    borderColor: '#509990',
                    pointBackgroundColor: '#509990',
                    data: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100),
                      Math.round(Math.random() * 100), Math.round(Math.random() * 100),
                      Math.round(Math.random() * 100), Math.round(Math.random() * 100),
                      Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)
                    ]
                },
                {
                    label: 'Plan',
                    borderColor: '#FF7D7B',
                    pointBackgroundColor: '#FF7D7B',
                    data: [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100),
                       Math.round(Math.random() * 100), Math.round(Math.random() * 100),
                      Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100),
                       Math.round(Math.random() * 100), Math.round(Math.random() * 100)
                    ]
                }
            ]
        };
        this.options =  {
          legend: {
              position: 'top',
              labels: {
                  fontColor: '#ffffff'
              }
          },
          title: {
              display: false,
              text: 'Chart.js Radar Chart'
          },
          scale: {
              gridLines: {
                  color: '#ffffff',
                  lineWidth: 0.2
              },
              angleLines: {
                  display: false
              },
              ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 100,
                  stepSize: 100,
                  display: false
              },
              pointLabels: {
                  fontSize: 11,
                  fontColor: '#ffffff'
              }
          }
      };
        this.displayTools = false;
  }

  ngOnInit() {
  }

}
