import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IngredientservicesService } from '../ingredientservices.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-viewingredient',
  templateUrl: './viewingredient.component.html',
  styleUrls: ['./viewingredient.component.css'],
  animations: [
    trigger('detailExpand', [
        state('collapsed', style({height: '0px', minHeight: '0'})),
        state('expanded', style({height: '*'})),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
],
  })
  

export class ViewingredientComponent implements OnInit {
 ingredientId?: number=0;
 ingredientName?: string ="";
 ingredientNameAr?: string ="";
 ingredientDecreption?: string ="";
 ingredientDecreptionAr?: string ="";
 unit?: string;
 imageId?: number;
 isActive?: boolean;

constructor(private backend: IngredientservicesService, private alert : ToastrService, private loading: NgxSpinnerService){}

//ddataa : any=[]
//expand : any = []
ingdata = [{
  'ingredientId' : this.ingredientId!,
  'ingredientName' : this.ingredientName!,
  'ingredientNameAr': this.ingredientNameAr!,
  'ingredientDecreption' : this.ingredientDecreption!,
  'ingredientDecreptionAr': this.ingredientDecreptionAr!,
  isExpand: false,
  expand : [{
    'unit': this.unit!,
    'imageId': this.imageId!,
    'isActive': this.isActive!,

  }]
}]




  /*data = [
    {
      id: 1,
      name: 'Abc',
      email: 'abc@mail.com',
      isExpand: false,
      hhhhhh: 'fffff',
      juhj: 25354,
      address: [
        {
          add1: 'Delhi',
          add2: 'Bangalore',
          add3: 'check'
        }
      ]
    },
    {
      id: 2,
      name: 'Xyz',
      email: 'xyz@mail.com',
      isExpand: false,
      hhhhhh: 'fffff',
      juhj: 25354,
      address: [
        {
          add1: 'Mumbai',
          add2: 'Pune',
          add3: 'check'

        }
      ]
    },
    {
      id: 3,
      name: 'ijk',
      email: 'ijk@mail.com',
      isExpand: false,
      hhhhhh: 'fffff',
      juhj: 25354,
      address: [
        {
          add1: 'Chennai',
          add2: 'Bangalore',
          add3: 'check'

        }
      ]
    },
    {
      id: 4,
      name: 'def',
      email: 'def@mail.com',
      isExpand: false,
      hhhhhh: 'fffff',
      juhj: 25354,
      address: [
        {
          add1: 'Kolkata',
          add2: 'Hyderabad',
          add3: 'check'

        }
      ]
    }
  ]*/

  //@ViewChild(MatPaginator) paginator!: MatPaginator;

 //currentPage:   number  = 0;
// dataSource = new MatTableDataSource(this.ingdata);
 pagenumber =1;
 pagesize = 10;

 ngOnInit(){
  //this.dataSource.paginator = this.paginator;

  this.loading.show();
  // Inside your component class
  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.loading.hide();
    this.alert.success('All Ingredients', 'Welcome in Ingredients Management', {
      timeOut: 3000,
    });
  },3000);
  this.loadingredients(this.pagesize, this.pagenumber)

 }

 /*onPageChange(pageEvent:PageEvent) {
  // Update the data source when the paginator page changes
  //this.data.paginator.pageIndex = pageEvent.pageIndex;
  //this.data.paginator.pageSize = pageEvent.pageSize;
}*/
loadingredients(pagesize: number, pagenumber: number){
return this.backend.getingredients(9999,pagenumber).subscribe((data=>{
  debugger
 let obj = JSON.parse(JSON.stringify(data))
    
this.ingdata= obj
console.log(data)
console.log(obj);
}))
}

/*renderPage(event: number) {
  this.pagenumber = event;
  this.loadingredients(this.pagesize, this.pagenumber);
}*/

renderPage(event: any): void {
  this.pagenumber = event;
  console.log(event);
  console.log(this.pagenumber);

}
}

