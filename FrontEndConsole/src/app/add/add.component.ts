import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  console = {
    name: '',
    description: '',
    age: 0
    
  }
  
  image:any;
 
  selectImage(e: any) {
    this.image = e.target.files[0];
  }


  create() {

    let fd = new FormData();
    fd.append('name', this.console.name);
    fd.append('description', this.console.description);
    fd.append('age', this.console.age.toString());
    fd.append('image', this.image);


    this.shared.create( fd )
       .subscribe(
         {
        
          next: (res) => {
             this._router.navigate(['/cards']);
           },

          error: (err: any) => {
            console.log(err);
            
           }
        }
      )

      Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your console has been created',
    showConfirmButton: false,
    timer: 1500
      }) 
    
     
   }

   constructor(private shared:SharedService, private _router:Router) {
    
  }
   
  

   ngOnInit(): void {
   }
  
  
 
  }


    
    

