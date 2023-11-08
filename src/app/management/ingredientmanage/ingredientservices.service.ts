import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  
  getingredients(object? :any){
return this.http.post(this.baseURL+"api/ConfigurationsManagement/AddIngredient" , object, this.httpOptions).pipe(retry(1), catchError(this['handleError']));
}

}