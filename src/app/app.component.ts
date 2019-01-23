import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nested-checkboxes';
  regions = [
    {
      name: "Americas",
      subregions: [
        { name: "South America" },
        { name: "North America" }
      ]
    },
    {
      name: "Europe",
      subregions: [
        { name: "West Europe" },
        { name: "East Europe" }
      ]
    },
  ];
  getSubRegions = (region) => region.subregions;
  getDisplayName = (thing) => thing.name;
}
