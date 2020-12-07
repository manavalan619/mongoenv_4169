import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})
export class UpdateanddeleteService {

  constructor(
private http: HttpClient,
private sharedService: SharedService
  ) { }

GpGetNounById(studentdetailsId: string): Observable<any> {
 return this.http.get(this.sharedService.DESKTOP_API + `/studentdetails/${studentdetailsId}`);
}
GpUpdate(studentdetails: any): Observable<any> {
 return this.http.put(this.sharedService.DESKTOP_API + '/studentdetails', studentdetails);
}
GpDelete(studentdetailsId: string): Observable<any> {
 return this.http.delete(this.sharedService.DESKTOP_API + `/studentdetails/${studentdetailsId}`);
}

}