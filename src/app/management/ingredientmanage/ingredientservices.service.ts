import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientservicesService {
  [x: string]: any;
  baseURL:string='https://localhost:7085/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }
  
  addingredients(object? :any){
return this.http.post(this.baseURL+"api/ConfigurationsManagement/AddIngredient" , object, this.httpOptions).pipe(retry(0), catchError(this['handleError']));
}

getingredients(pagesize: number, pagenumber: number):Observable<object>{
  const url = this.baseURL+"api/ConfigurationsManagement/GetIngredientes" + "?PageSize="+ pagesize+ "&PageNumber=" + pagenumber
  return this.http.get(url).pipe(retry(1), catchError(this['handleError']));
}

}