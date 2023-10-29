import { animate, state, style, transition, trigger } from '@angular/animations';
import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



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
 
  data = [
    {
      id: 1,
      name: 'Abc',
      email: 'abc@mail.com',
      isExpand: false,
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
      address: [
        {
          add1: 'Kolkata',
          add2: 'Hyderabad',
          add3: 'check'

        }
      ]
    }
  ]
  @ViewChild(MatPaginator) paginator!: MatPaginator;

 currentPage:   number  = 0;
 dataSource = new MatTableDataSource(this.data);


 ngOnInit(){
  this.dataSource.paginator = this.paginator;

 }

 onPageChange(pageEvent:PageEvent) {
  // Update the data source when the paginator page changes
  //this.data.paginator.pageIndex = pageEvent.pageIndex;
  //this.data.paginator.pageSize = pageEvent.pageSize;
}
}

  

