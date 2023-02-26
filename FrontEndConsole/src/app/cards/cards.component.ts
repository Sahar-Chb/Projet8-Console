import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  constructor(public shared:SharedService) {
    
  }
  
  consoles: any;

  ngOnInit(): void {
    this.shared.all()
      .subscribe(
      {
        next: (res) => {
          this.consoles = res;
            
        },
        error: (err) => {
          console.log(err);
            
        }
      }
    )
  }
  
  deleteConsole(e: any) {
    this.shared.delete(e)
      .subscribe(
        {
          next: (res) => {
            this.ngOnInit();
            
        }, error: (err) => {
            console.log(err);
          }
      }
    )
    
  }




  
}
     
