import {NgModule} from '@angular/core';

import {routing} from './form.routing';
import {FormsComponent} from './form.component';

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    FormsComponent
  ]
})
export class FormsModule {

}