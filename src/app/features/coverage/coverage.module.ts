import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './user-table/user-table.component';
import {AgGridModule} from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserTableComponent],
  imports: [CommonModule, AgGridModule.withComponents([]), FormsModule],
  exports: [UserTableComponent]
})
export class CoverageModule {}
