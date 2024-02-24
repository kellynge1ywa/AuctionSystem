import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category } from '../Interface/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  token=localStorage.getItem('token') as string;

 
  constructor(private http:HttpClient) { }

  getAllCategories(){
    return this.http.get<{result:Category[]}>('https://localhost:7067/api/Categories').pipe(
      map(res => res.result)
    )
      
      
    }

  getOneCategory(Id:string):Observable<Category>{
    return this.http.get<Category>(`https://localhost:7067/api/Categories/${Id}`,{headers: new HttpHeaders().set('token',this.token)});
  }

  getCategoryByName(CategoryName:string):Observable<Category>{
    return this.http.get<{result:Category}>(`https://localhost:7067/api/Categories/Name/${CategoryName}`,{headers: new HttpHeaders().set('token',this.token)}).pipe(
      map(re=>re.result)
    )

  }
}
