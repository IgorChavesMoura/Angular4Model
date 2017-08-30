import { Component, OnInit, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { SimpleComponent } from '../simple/simple.component';

@Component({
  selector: 'app-dynamic-el',
  templateUrl: './dynamic-el.component.html',
  styleUrls: ['./dynamic-el.component.css'],
  entryComponents: [SimpleComponent] //Declaração dos componentes que serão carregados dinamicamente e não via seletor
})
export class DynamicElComponent implements OnInit {


  componentRef:ComponentRef<SimpleComponent>;
  @ViewChild('target',{read:ViewContainerRef}) 
  dynamicContainer:ViewContainerRef; //ViewContainerRef tem metodos pra criar componentes dentro dele

  

  constructor(private resolver: ComponentFactoryResolver) {


   }
  createComponent(value:number){
    const factory:ComponentFactory<SimpleComponent> = this.resolver.resolveComponentFactory(SimpleComponent);
    this.componentRef = this.dynamicContainer.createComponent(factory);
    this.componentRef.instance.value = value;

  }
  clearContainer(){
    
  }

  ngOnInit() {
  }

}
