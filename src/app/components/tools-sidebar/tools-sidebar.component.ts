import { Component, OnInit, Input } from '@angular/core';
import { NodeService } from 'src/app/services/node/NodeService';
import {TreeNode} from 'primeng/api';


@Component({
  selector: 'app-tools-sidebar',
  templateUrl: './tools-sidebar.component.html',
  styleUrls: ['./tools-sidebar.component.scss']
})

export class ToolsSidebarComponent implements OnInit {

  // Data and options used for chart in UP
  data: any;
  options: any;

  displayTools: boolean;

  // Properties to display Tools
  displayUP = false;
  displayST = false;
  displayAdd = false;
  displayEdit = false;
  displayAnalysis = false;
  displaySymbology = false;
  displayAbout = false;

  // Properties for PrimeNG ColorPickers
  colorCat1: string;
  colorCat2: string;
  colorFont: string;

  // Properties for range sliders
  rangeValues1: number[];
  rangeValues2: number[];
  rangeValues3: number[];

  // Data containing labels for filters in ST
  filters: any[];

  // Properties to change icons of collapsible UP steps
  showCreate: boolean;
  showManage: boolean;
  showResults: boolean;

  // Data provided to the donut chart
  donutChartData: any[];

  // Data provided by NodeService
  files: TreeNode;

  // Properties to determine which plugin is active
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

hideAbout() {
    this.displayAbout = false;
}

hideSymbology() {
  this.displaySymbology = false;
}

hideAnalysis() {
  this.displayAnalysis = false;
}

hideEdit() {
  this.displayEdit = false;
}

hideAdd() {
  this.displayAdd = false;
}

hideUP() {
  this.displayUP = false;
}

hideST() {
  this.displayST = false;
}


    constructor(private nodeService: NodeService) {
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
        this.donutChartData = [
            {
              label: 'Kindergarten',
              value: 30,
              color: 'white',
            },
            {
              label: 'University',
              value: 18,
              color: 'grey',
            },
            {
              label: 'Middle School',
              value: 5,
              color: 'green',
            },
            {
                label: 'Elementary School',
                value: 25,
                color: 'red',
              },
              {
                label: 'High School',
                value: 22,
                color: 'teal',
              },
          ];
        this.displayTools = true;
        this.colorCat1 = '#75B82C';
        this.colorCat2 = '#DECBD0';
        this.colorFont = '#000000';
        this.rangeValues1 = [0, 1000];
        this.rangeValues2 = [0, 1000];
        this.rangeValues3 = [0, 100];
        this.filters = ['District: Denpasar Barat', 'District: Denpasar Selatan', 'District: Denpasar Timur', 'District: Denpasar Utaral',
        'Land Cover: Agricultural', 'Land Cover: Commercial', 'Land Cover: Open Space', 'Land Cover: Industrial',
        'Land Cover: Slums', 'Land Cover: Residential 0-10', 'Land Cover: Residential 10-30', 'Land Cover: Residential 30-50',
        'Land Cover: Residential 50-80', 'Land Cover: Residential 80-100', 'Land Cover: Residential no data',
        'Disaster: Flooding Risk'];
        this.showCreate = false;
        this.showManage = false;
        this.showResults = false;
  }

  ngOnInit() {
    this.nodeService.getFiles().then(files => this.files = files);
  }

}
