import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {ICityResponse} from "../interfaces/ICityResponse";
import {ICountyResponse} from "../interfaces/ICountyResponse";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {

  constructor(private httpClient : HttpClient, private activatedRoute: ActivatedRoute) {
  }
  cities: ICityResponse[] = [];

  ngOnInit() {
    let apiURLCities = "https://geo.api.gouv.fr/departements/%/communes";
    console.log(this.activatedRoute.snapshot.params)
    if (this.activatedRoute.snapshot.params['code']) {
      this.activatedRoute.params.subscribe((params) => {
        console.log(apiURLCities.replace("%",params['zip']))
        this.httpClient.get<ICityResponse[]>(apiURLCities.replace("%",params['zip']))
          .subscribe(
            (response) => {
              this.cities = response;
            }

          )
        console.log(this.activatedRoute.snapshot.params);
      });
    };
  }

  public getDepartementName(code: string): string
  {
    let apiURLCounty = "https://geo.api.gouv.fr/departements/%";
    let county : any;
    this.httpClient.get<ICountyResponse>(apiURLCounty.replace("%",code))
          .subscribe(
            (response) => {
              county = response;
            }
          )

    return "name";
  }

}
