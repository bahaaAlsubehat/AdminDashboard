import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent   implements OnInit {
  constructor(private spinner: NgxSpinnerService ,private toastr: ToastrService) {}

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    // Inside your component class
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.toastr.success('Dashboard', 'Welcome in Admin Dashboard', {
        timeOut: 3000,
      });
    },3000);
    
  }
}
