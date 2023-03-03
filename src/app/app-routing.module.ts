import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ApiComponent} from "./api/api.component";
import {RegionComponent} from "./region/region.component";
import {CountyComponent} from "./county/county.component";
import {CitiesComponent} from "./cities/cities.component";

const routes: Routes = [
  { 'path' : 'accueil' , component : AccueilComponent , data : { title : 'Accueil' }},
  { 'path' : 'api' , component : ApiComponent , data : { title : 'API' }},
  { 'path' : 'region' , component : RegionComponent , data : {title : 'Region'}},
  //{ 'path' : 'region/:code' , component : RegionComponent , data : {title : 'Region'}},
  { 'path' : 'region/:code/:county' , component : CountyComponent , data : {title : 'Region'}},
  { 'path' : 'region/:code/:county/:zip/:cities' , component : CitiesComponent , data : {title : 'Region'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
