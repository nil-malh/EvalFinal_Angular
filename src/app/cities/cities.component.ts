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

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) {
  }
  public setDepartementName(code: string): void {
    let apiURLCounty = "https://geo.api.gouv.fr/departements/%";
    let name: string;
    this.httpClient.get<ICountyResponse>(apiURLCounty.replace("%", code));
    this.httpClient.get<ICountyResponse>(apiURLCounty.replace("%", code)).subscribe(value => {
       this.countyName = value.nom;
      }
    );
  }
  cities: ICityResponse[] = [];
  countyName: string = ";"
  ngOnInit() {
    let apiURLCities = "https://geo.api.gouv.fr/departements/%/communes";


    console.log(this.activatedRoute.snapshot.params)
    if (this.activatedRoute.snapshot.params['code']) {

      this.activatedRoute.params.subscribe((params) => {
      this.setDepartementName(params['zip']);
        console.log(apiURLCities.replace("%", params['zip']))
        this.httpClient.get<ICityResponse[]>(apiURLCities.replace("%", params['zip']))
          .subscribe(
            (response) => {
              this.cities = response;
            }
          )
        console.log(this.activatedRoute.snapshot.params);
      });
    }
    ;
  }


}
