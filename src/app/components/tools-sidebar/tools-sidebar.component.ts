import { Component, OnInit, Input } from '@angular/core';
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

  displayUP = false;
  displayST = false;
  displayAdd = false;
  displayEdit = false;
  displayAnalysis = false;
  displaySymbology = false;
  displayAbout = false;

  colorCat1: string;
  colorCat2: string;
  colorFont: string;

  rangeValues1: number[];
  rangeValues2: number[];
  rangeValues3: number[];

  filters: ['District: Denpasar Barat', 'District: Denpasar Selatan', 'District: Denpasar Timur', 'District: Denpasar Utaral',
            'Land Cover: Agricultural', 'Land Cover: Commercial', 'Land Cover: Open Space', 'Land Cover: Industrial',
            'Land Cover: Slums', 'Land Cover: Residential 0-10', 'Land Cover: Residential 10-30', 'Land Cover: Residential 30-50',
            'Land Cover: Residential 50-80', 'Land Cover: Residential 80-100', 'Land Cover: Residential no data',
            'Disaster: Flooding Risk'];
  /*scenarioId: number[];
  scenarioName: string[];
  scenarioInfo: object[];
  scenResObj: object[];*/

  @Input() upAct: boolean;
  @Input() stAct: boolean;

  showAbout() {
      this.displayAbout = true;
  }

  showSymbology() {
    this.displaySymbology = true;
}

showAnalysis() {
    this.displayAnalysis = true;
}

showEdit() {
    this.displayEdit = true;
}

showAdd() {
    this.displayAdd = true;
}

showUP() {
    this.displayUP = true;
}

showST() {
    this.displayST = true;
}


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
        this.colorCat1 = '#75B82C';
        this.colorCat2 = '#DECBD0';
        this.colorFont = '#000000';
        this.rangeValues1 = [0, 1000];
        this.rangeValues2 = [0, 1000];
        this.rangeValues3 = [0, 100];
  }

  ngOnInit() {
  }

}
