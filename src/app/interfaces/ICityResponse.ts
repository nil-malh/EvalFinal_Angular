export interface ICityResponse{

// {"nom":"Landos","code":"43111","codeDepartement":"43","siren":"214301111","codeEpci":"244301123","codeRegion":"84","codesPostaux":["43340"],"population":878},

  nom: string,
  code:string,
  codeDepartement: string,
  codesPostaux: string[],
  population: string,

}
