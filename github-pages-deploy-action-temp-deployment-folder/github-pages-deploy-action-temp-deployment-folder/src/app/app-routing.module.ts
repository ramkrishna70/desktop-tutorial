import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule , PreloadAllModules} from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';


const routes: Routes = [ 
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class AppRoutingModule { }
