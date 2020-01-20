import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';
import {AddingCardComponent} from 'src/app/modals/adding-card/adding-card.component';
import {ViewCardComponent} from 'src/app/modals/view-card/view-card.component';

@NgModule({
  exports: [  
  ],
  entryComponents: [
    AddingCardComponent,
    ViewCardComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: HomePage}])
  ],
  declarations: [
    HomePage,
    AddingCardComponent,
    ViewCardComponent]
})
export class HomePageModule {}
