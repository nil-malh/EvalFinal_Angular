import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {IRegionResponse} from "../interfaces/IRegionResponse";
import {ICountyResponse} from "../interfaces/ICountyResponse";

@Component({
  selector: 'app-county',
  templateUrl: './county.component.html',
  styleUrls: ['./county.component.css']
})
export class CountyComponent {

  constructor(private httpClient : HttpClient, private activatedRoute: ActivatedRoute) {
  }
  counties: ICountyResponse[] = [];

  ngOnInit() {
    let apiURLCounty = "https://geo.api.gouv.fr/regions/%/departements";
    if (this.activatedRoute.snapshot.params['code']) {
      this.activatedRoute.params.subscribe((params) => {
        console.log(apiURLCounty.replace("%",params['code']))
        this.httpClient.get<ICountyResponse[]>(apiURLCounty.replace("%",params['code']))
        .subscribe(
          (response) => {
            this.counties = response;
          }
        )
      console.log(this.activatedRoute.snapshot.params);
    });
  };
  }
}
