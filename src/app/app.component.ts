import { Component } from '@angular/core';
import { TreeProvider } from './tree-provider/tree-provider.interface';

interface Region {
  name: string;
  subregions?: Region[];
}

class CheckboxTreeProvider implements TreeProvider<Region> {
  getRootItem(): Region {
    return {
      name: "Americas",
      subregions: [
        { name: "South America" },
        { name: "North America" }
      ]
    };
  }

  getChildItems(region: Region): Region[] {
    return region.subregions || [];
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
  getDisplayName = (thing) => thing.name;
}
