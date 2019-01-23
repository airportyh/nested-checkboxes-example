import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nested-checkboxes',
  templateUrl: './nested-checkboxes.component.html',
  styleUrls: ['./nested-checkboxes.component.css']
})
export class NestedCheckboxesComponent implements OnInit {

  @Input() items: any[];
  @Input() getChildItems: (item) => any[];
  @Input() getItemDisplayName: (item) => string;

  ngOnInit() {
  }

}
