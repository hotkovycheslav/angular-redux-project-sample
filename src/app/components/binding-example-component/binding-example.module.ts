import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingExampleComponent } from './binding-example.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [BindingExampleComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [BindingExampleComponent]
})
export class BindingExampleModule { }
