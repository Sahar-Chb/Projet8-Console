import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CardsComponent } from './cards/cards.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [


  { path: '', redirectTo: 'cards', pathMatch: 'full' },
  
  { path: 'add', component: AddComponent },

  { path: 'cards', component: CardsComponent },

  {path:'update/:id',component:UpdateComponent},
  
  {path:'**',component:NotfoundComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
