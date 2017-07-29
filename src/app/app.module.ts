//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';


//Components
import { AppComponent } from './app.component';
import { BootstrapModelComponent } from './components/bootstrap-model/bootstrap-model.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { UserFormComponent } from './components/user-form/user-form.component';

//Services
import { UserService } from './services/user/user.service';
import { AppService } from './services/app/app.service';

const appRoutes : Routes = [
  { path:'model', component:BootstrapModelComponent },
  { path:'home', component:HomeComponent },
  { path:'user/form', component:UserFormComponent },
  { path: '**', redirectTo:'/home', pathMatch:'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    BootstrapModelComponent,
    HomeComponent,
    ModalComponent,
    UserFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  entryComponents:[
    ModalComponent
  ],
  providers: [
    UserService,
    AppService
  ],
  bootstrap: [AppComponent]
})  
export class AppModule { }
