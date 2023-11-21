import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { IngredientservicesService } from '../ingredientservices.service';
import { Router } from '@angular/router';
import { ViewingredientComponent } from '../viewingredient/viewingredient.component';

@Component({
  selector: 'app-addingredient',
  templateUrl: './addingredient.component.html',
  styleUrls: ['./addingredient.component.css']
})
export class AddingredientComponent {
  constructor(private spinner: NgxSpinnerService ,private toastr: ToastrService, private backend: IngredientservicesService, private route: Router ) {}

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    // Inside your component class
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.toastr.success('Add Ingredient', 'Welcome in Ingredients Management', {
        timeOut: 5000,
      });
    },5000);
    
  }

  ingname : string ="";
  ingnamear: string ="";
  ingdescription : string ="";
  ingdescriptionar: string ="";
  unit : string ="";
  isactive: string ="";

  Createingredient(){
    const requesting= {
    "ingname" : this.ingname,
    "ingnamear" : this.ingnamear,
    "ingdescription" : this.ingdescription,
    "ingdescriptionar" : this.ingdescriptionar,
    "unit" : this.unit,
    "isactive": this.isactive
    }
    
    this.backend.addingredients(requesting).subscribe((res => {
      let obj = JSON.parse(JSON.stringify(res))
     // window.location.reload();
		   
    }))
   /* if(this.obj.AddingredientComponent== 200){
      this.toastr.success("Welcom in Store")
      this.route.navigate(['viewingredients'])
    
    }
    else{
      this.toastr.error('Please Register','Major Error',{timeOut : 3000 });
    }*/
    this.route.navigate(['/management/viewingredients'])
  }
}
