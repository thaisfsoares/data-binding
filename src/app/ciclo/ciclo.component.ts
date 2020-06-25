import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() {
    this.log('constructor');
   }

   ngOnChanges(){
     this.log('ngOnChanges');
   }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){
    this.log('ngAfterContetInit');
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');    
  }

  private log(hook:string){
    console.log(hook); //Para não ficar repetindo console.log, em todos acima//
  }


}
