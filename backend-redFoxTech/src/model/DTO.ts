export interface QueryInputDTO{
    name: string,
    sort: string,
    order:string, 
    variables:  string | undefined,
    type: string,
    generation: number | string,
    size:number,
    page:number
  }

  export interface FiltersInputDTO{
    name: string,
    sort: string,
    order:string, 
    variables:  string | undefined,
    type: string,
    generation: number | string,
    size:number,
    offset:number
  }