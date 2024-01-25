export interface Routes{
    link:string,
    title:string,
    reference?: boolean,
    deepLinks?: Array<Routes>
  }