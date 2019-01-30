import { Component } from '@angular/core';
import { TreeProvider } from './tree-provider/tree-provider.interface';

interface Place {
  name: string;
  subregions?: Place[];
  countries?: Place[];
}

class CheckboxTreeProvider implements TreeProvider<Place> {
  getRootItem(): Place {
    return {
      name: "Americas",
      subregions: [
        {
          name: "South America",
          countries: [
            { name: "Brazil" },
            { name: "Argentina" }
          ]
        },
        {
          name: "North America",
          countries: [
            { name: "United States" }
          ]
        }
      ]
    };
  }

  getChildItems(place: Place): Place[] {
    return place.subregions || place.countries || [];
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nested-checkboxes';
  checkboxTreeProvider = new CheckboxTreeProvider();
  getDisplayName = (thing) => {
    let display = thing.name;
    if (thing.subregions && thing.subregions.length) {
      display += " (" + thing.subregions.length + ")";
    }
    return display;
  }
}
