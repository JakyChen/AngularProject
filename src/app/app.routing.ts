import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';

//Listing all the routes and binding them to respective components
const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
    //Add additional routes below
];

//Sets all the routes used based on the appRoutes list above
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); 