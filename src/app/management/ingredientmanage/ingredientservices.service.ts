import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientservicesService {
  [x: string]: any;
  baseURL:string='https://localhost:7085/';

  constructor(private http: HttpClient, ) { }

  getingredients(){
return this.http.get(this.baseURL + 'api/ConfigurationsManagement/GetIngredientes')
}

}