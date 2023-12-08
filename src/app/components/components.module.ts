import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { LoaderComponent } from './loader/loader.component';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    LoaderComponent,
    FormComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    LoaderComponent,
    FormComponent,
    UsersComponent
  ]
})
export class ComponentsModule { }
