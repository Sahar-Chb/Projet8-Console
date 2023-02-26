import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  [x: string]: any;

  console: any;
  id: any;

  newConsole = {
    name: '',
    description: '',
    age: '',
    
  }

  
  constructor(private _act:ActivatedRoute, private shared:SharedService,private _router:Router) { 

  }


  ngOnInit(): void{

    this.id = this._act.snapshot.paramMap.get('id');

    this.shared.getById(this.id)
      .subscribe(
        {
          next: (res) => {
            this.console = res;
            
          
        },
          error: (err) => {
            console.log(err);
            
          }
      }
    )

    
  }

  save() {
    this.shared.update(this.id, this.console)
      .subscribe(
        {
          next: (_res) => {
            console.log(_res);
            

            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your console has been saved',
            showConfirmButton: false,
            timer: 1500
            })

            this._router.navigate(['/cards']);
            
          },
          
      }
    )
    
  }
}
