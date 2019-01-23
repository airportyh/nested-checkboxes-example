import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nested-checkboxes';
  subregions = [
    { name: "South America" },
    { name: "North America" }
  ];
  getSubregionName = (subregion) => subregion.name;
}
