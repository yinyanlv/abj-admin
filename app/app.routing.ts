import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
    path: '',
    redirectTo: 'login'
  }];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);