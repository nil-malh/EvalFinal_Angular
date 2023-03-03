import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IRegionResponse} from "../interfaces/IRegionResponse"
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {


  constructor(private httpClient : HttpClient, private activatedRoute: ActivatedRoute) {

  }
   regions: IRegionResponse[] = [];

  ngOnInit()
  {
     let apiURLRegion = "https://geo.api.gouv.fr/regions";


    this.httpClient.get<IRegionResponse[]>(apiURLRegion)
      .subscribe(
        (response) => {
          this.regions = response;
        }
      )
    console.log(this.activatedRoute.snapshot.params);
  }




}
