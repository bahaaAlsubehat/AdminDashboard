import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addingredient',
  templateUrl: './addingredient.component.html',
  styleUrls: ['./addingredient.component.css']
})
export class AddingredientComponent {
  constructor(private spinner: NgxSpinnerService ,private toastr: ToastrService) {}

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
    // Inside your component class
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
      this.toastr.success('Management', 'Welcome in Admin Dashboard', {
        timeOut: 3000,
      });
    },3000);
    
  }
}
