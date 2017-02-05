import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Side2Component} from './side2/side2.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
	{
		path: '',
		component: WelcomeComponent
	},
	{
		path: 'side2',
		component: Side2Component
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
