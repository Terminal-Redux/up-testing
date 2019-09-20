import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-layers-sidebar',
  templateUrl: './layers-sidebar.component.html',
  styleUrls: ['./layers-sidebar.component.scss']
})
export class LayersSidebarComponent implements OnInit {

  show: boolean;
  show2: boolean;
  displayLayers: boolean;

  @Input() upAct: boolean;
  @Input() stAct: boolean;

  constructor() {
    this.show = false;
    this.show2 = false;
    this.displayLayers = true;
   }
  ngOnInit() {
  }

}
