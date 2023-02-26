import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-little-card',
  templateUrl: './little-card.component.html',
  styleUrls: ['./little-card.component.css']
})
export class LittleCardComponent {

  @Input() console: any;
  @Output() delete = new EventEmitter();
  



  deleteFromChild(id: any) {
    
    this.delete.emit(id);

  
  }
  }
   



  


