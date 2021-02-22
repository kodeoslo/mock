import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './user-table/user-table.component';
import {AgGridModule} from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { CheckboxRendererComponent } from './checkbox-renderer/checkbox-renderer.component';

@NgModule({
  declarations: [UserTableComponent, CheckboxRendererComponent],
  imports: [CommonModule, AgGridModule.withComponents([CheckboxRendererComponent]), FormsModule],
  exports: [UserTableComponent]
})
export class CoverageModule {}
