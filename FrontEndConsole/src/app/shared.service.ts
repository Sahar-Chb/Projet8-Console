import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  


  url = 'http://127.0.0.1:3002/console/';

  constructor(private http:HttpClient) { }

  create(console:any) {
    let response = this.http.post(this.url + 'add', console);
    return response;
  }

  all() {
    let response = this.http.get(this.url + 'all');
    return response;
  }

  delete(id:any) {
    let response = this.http.delete(this.url + 'delete/' + id);
    return response;
  }

   getById(id: any) {
    let response = this.http.get(this.url + 'getbyid/' + id);
    return response;
   }
  
  update(id: any,console:any) {
    let response = this.http.put(this.url + 'update/' + id, console);
    return response;
  }

 
}
