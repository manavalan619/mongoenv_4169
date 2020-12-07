import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { UpdateanddeleteService } from './updateanddelete.service';



@Component({
  selector: 'app-updateanddelete',
  templateUrl: './updateanddelete.component.html',
  styleUrls: ['./updateanddelete.component.scss'],
})
export class UpdateanddeleteComponent implements OnInit {

queryId: string;
studentdetails = {
   Name: '',
   Email: ''
};

  constructor(
private activatedRoute: ActivatedRoute,
private updateanddeleteService: UpdateanddeleteService
  ) { }

  ngOnInit() {
    this.activatedRoute
 .queryParams
 .subscribe(params => {
 this.queryId = params.id;
 this.GpUpdate();
});
this.GpGetNounById();
  }

GpGetNounById() {
 this.updateanddeleteService.GpGetNounById(this.queryId)
  .subscribe(
    data => {
       console.log('successfully get the data by id --- ', data);
       this.studentdetails = data;
    },
    error => {
       console.log('cannot able to get the data using its id--- ', error);
    }
    );
}
GpUpdate() {
 this.updateanddeleteService.GpUpdate(this.studentdetails)
  .subscribe(
    data => {
 this.studentdetails.Name = '';

 this.studentdetails.Email = '';

       console.log('data updated successfully --- ', data);
    },
    error => {
       console.log('cannot able to update the data --- ', error);
    }
    );
}
GpDelete() {
 this.updateanddeleteService.GpDelete(this.queryId)
  .subscribe(
    data => {
       console.log('data deleted successfully --- ', data);
    },
    error => {
       console.log('cannot able to delete the data --- ', error);
    }
    );
}

}