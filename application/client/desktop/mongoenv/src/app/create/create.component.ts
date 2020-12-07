import { Component, OnInit } from '@angular/core';

import { CreateService } from './create.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

studentdetails = {
   Name: '',
   Email: ''
};

  constructor(
private createService: CreateService
  ) { }

  ngOnInit() {
    
  }

GpCreate() {
 this.createService.GpCreate(this.studentdetails)
  .subscribe(
    data => {
       console.log('data created successfully');
this.studentdetails.Name = '';

this.studentdetails.Email = '';

    },
    error => {
       console.log('cannot able to create the data');
    }
    );
}

}