import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Category } from '../../Interface/Category';
import { Store } from '@ngrx/store';
import { appState } from '../../State/AppState/App.state';
import {  GetCategories } from '../../State/Category/Selector/Category.selector';
import { GetAllCategories } from '../../State/Category/Action/Category.actions';
import { CommonModule } from '@angular/common';
import * as CategoryActions from '../../State/Category/Action/Category.actions'
import { CategoryService } from '../../Services/category.service';


@Component({
  selector: 'app-art-categories',
  standalone: true,
  imports: [CommonModule,RouterModule, FontAwesomeModule],
  templateUrl: './art-categories.component.html',
  styleUrl: './art-categories.component.css'
})
export class ArtCategoriesComponent implements OnInit {
  faSignOut=faSignOut;
  Category:Category[]=[]

  constructor(private store:Store<appState>, private router:Router, private categoryService:CategoryService){
    
  }

  ngOnInit() {
    this.getAllCategories();   
  }

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
    Category =>{
        this.Category=Category;
        console.log(this.Category);
        
      },
      error =>{
        console.log("An error occured",error);
        
      }
    )
  }


}
