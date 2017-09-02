//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule }    from '@angular/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TextMaskModule } from 'angular2-text-mask';
import { ChartsModule } from 'ng2-charts';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

//ngx-bootstrap
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';



//Components
import { AppComponent } from './app.component';
import { BootstrapModelComponent } from './components/bootstrap-model/bootstrap-model.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TipoFormComponent } from './components/tipo-form/tipo-form.component';
import { TipoListComponent } from './components/tipo-list/tipo-list.component';
import { ChartListComponent } from './components/chart-list/chart-list.component';
import { ChartComponent } from './components/chart/chart.component';
import { AdminComponent } from './components/admin/admin.component';
import { EntityGenComponent } from './components/entity-gen/entity-gen.component';
import { SystemModelsComponent } from './components/system-models/system-models.component';
import { ListComponentComponent } from './components/list-component/list-component.component';

//Services
import { UserService } from './services/user/user.service';
import { AppService } from './services/app/app.service';
import { MaskService } from './services/mask/mask.service';
import { EscapeHtmlPipePipe } from './pipes/escape-html/escape-html-pipe.pipe';
import { ListDraggableComponent } from './components/list-draggable/list-draggable.component';
import { ApplicationService } from './services/application/application.service';
import { DynamicElComponent } from './components/dynamic-el/dynamic-el.component';
import { SimpleComponent } from './components/simple/simple.component';
import { AsideComponent } from './components/aside/aside.component';







//Helpers


const appRoutes : Routes = [
  { path:'model', component:BootstrapModelComponent },
  { path:'home', component:HomeComponent },
  { path:'charts', component:ChartListComponent },
  { path:'users', component:UserListComponent },
  { path:'users/create', component:UserFormComponent },
  { path:'users/edit/:id', component:UserFormComponent },
  { path:'users/types', component:TipoListComponent },
  { path:'users/types/create', component:TipoFormComponent },
  { path:'users/types/edit/:id', component:TipoFormComponent },
  { path:'gen/entity', component:EntityGenComponent },
  { path:'admin', component:AdminComponent },
  { path:'systemmodels', component:SystemModelsComponent },
  { path:'dynamicel', component:DynamicElComponent },

  { path: '**', redirectTo:'/home', pathMatch:'full' }
];



@NgModule({
  declarations: [
    AppComponent,
    BootstrapModelComponent,
    HomeComponent,
    ModalComponent,
    UserFormComponent,
    UserListComponent,
    TipoFormComponent,
    TipoListComponent,
    ChartListComponent,
    ChartComponent,
    AdminComponent,
    EscapeHtmlPipePipe,
    EntityGenComponent,
    SystemModelsComponent,
    ListComponentComponent,
    ListDraggableComponent,
    DynamicElComponent,
    SimpleComponent,
    AsideComponent
  ],
  imports: [
    PopoverModule.forRoot(),
    AccordionModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    Ng2SmartTableModule,
    TextMaskModule,
    ChartsModule,
    DragulaModule
  ],
  entryComponents:[
    ModalComponent
  ],
  providers: [
    UserService,
    AppService,
    MaskService,
    ApplicationService
  ],
  bootstrap: [AppComponent]
})  
export class AppModule { }
