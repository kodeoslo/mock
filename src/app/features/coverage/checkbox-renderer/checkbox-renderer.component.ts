import { Component } from '@angular/core';

import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-checkbox-renderer',
  templateUrl: './checkbox-renderer.component.html',
  styleUrls: ['./checkbox-renderer.component.scss']
})
export class CheckboxRendererComponent implements AgRendererComponent {
  checkedValue: boolean;

  constructor() {
    this.checkedValue = false;
  }

  agInit(params: ICellRendererParams): void {
    this.checkedValue = params.value;
  }

  // gets called whenever the user gets the cell to refresh
  refresh(params: ICellRendererParams): boolean {
    this.checkedValue = params.value;
    return params.value;
  }

  buttonClicked(): void {
    alert(`${this.checkedValue} medals won!`);
  }
}
