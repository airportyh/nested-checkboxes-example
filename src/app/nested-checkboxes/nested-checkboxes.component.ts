import { Component, OnInit, Input } from '@angular/core';
import { TreeProvider } from '../tree-provider/tree-provider.interface';

@Component({
  selector: 'app-nested-checkboxes',
  templateUrl: './nested-checkboxes.component.html',
  styleUrls: ['./nested-checkboxes.component.css']
})
export class NestedCheckboxesComponent implements OnInit {

  @Input() rootItem: any;
  @Input() treeProvider: TreeProvider<any>;
  @Input() getItemDisplayName: (item: any) => string;
  private childItems: any[];

  ngOnInit() {
    this.rootItem = this.treeProvider.getRootItem();
    this.childItems = this.treeProvider.getChildItems(this.rootItem);
  }

}
