import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../../Interface/Category';
import { Store } from '@ngrx/store';
import { appState } from '../../State/AppState/App.state';
import { CategoryService } from '../../Services/category.service';
import { CommonModule } from '@angular/common';
import { AbstractControl, CheckboxRequiredValidator, Form, FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, ValidationErrors, Validators } from '@angular/forms';
import { Art } from '../../Interface/Art';
import { ArtService } from '../../Services/art.service';
import { TokenService } from '../../Authentication/token.service';

@Component({
  selector: 'app-add-art',
  standalone: true,
  imports: [CommonModule,RouterModule, FontAwesomeModule,ReactiveFormsModule],
  templateUrl: './add-art.component.html',
  styleUrl: './add-art.component.css'
})
export class AddArtComponent implements OnInit {
  faSignOut=faSignOut;
  AddArtForm!:FormGroup;
  Category!:Category[];
  OneCategory!:Category;
  Arts:Art[]=[];
  Art!:Art;

  constructor(private tokenS:TokenService,private store:Store<appState>,private artService:ArtService, private router:Router, private categoryService:CategoryService){
   
    
  }

  ngOnInit():void {
    // categoryControl?.setValidators([checkCategory,required])
    this.AddArtForm=new FormGroup({
      image:new FormControl('', Validators.required),
      artname:new FormControl('',Validators.required),
     
      description:new FormControl('',Validators.required),
      price:new FormControl('',Validators.required),
      bidstartdate:new FormControl('',Validators.required),
      bidenddate:new FormControl('',Validators.required),
      startingprice:new FormControl('',Validators.required),
      category:new FormControl('', Validators.required) 
     

    });

    this.getAllCategories();   
  }

  categoryMatch(control:AbstractControl){
    const categoryName:string=control.value as string;
    const categoryId=control.parent?.get('categoryId')?.value as string;
    console.log(categoryId);
    console.log(categoryName);

    if (categoryId && !categoryName) {
      return { categoryNameRequired: true };
  }
   return null;


  }

  // const findCategory=this.Category.find(cat =>cat.categoryName ===categoryId);
  // return findCategory ? null : {NotMatch:true};

  getAllCategories(){
    this.categoryService.getAllCategories().subscribe(
    Category =>{
        this.Category=Category;
        
        // console.log(this.Category);
        
      },
      error =>{
        console.log("An error occured",error);
        
      }
    )
  }

  getCategoryByName(CategoryName:string){
    this.categoryService.getCategoryByName(CategoryName).subscribe(
      OneCategory=>{
        this.OneCategory=OneCategory;
        console.log(OneCategory);
      },
      
      error =>{
        console.log("An error occured",error);
        
      }
    )

  }

  OnSubmit(){
    this.AddArtForm.markAllAsTouched();
    console.log(this.AddArtForm.value);
    console.log(this.AddArtForm.errors);
    console.log(this.AddArtForm.invalid)
    if(this.AddArtForm.valid){
      try{
        
        this.artService.AddArt(this.AddArtForm.value).subscribe(
          
          (response)=>{
            console.log("Art added successfully", response)
            this.router.navigate(['sellerproducts']);
          }
        )

      }
      catch(error)
      {
        console.error("Error adding an art", error);
      }

    }

  }



}
