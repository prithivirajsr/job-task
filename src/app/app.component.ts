import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, } from '@angular/core';
import { JobListComponent } from './job-list/job-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'job';
  job: string = "";
  jobToSend: string = "";
  jobDisplay: Array<any> = [];

  /* ngOnChanges(){
   console.log("The ngonchanges is called"); 
  }

  ngOnInit(){
    console.log("The ngOnInit is called");
  }

  ngDoCheck(){
    console.log("The ngDoCheck is called");
  }

  ngAfterContentInit(){
    console.log("The ngAfterContentInit is called");
  }

  ngAfterContentChecked(){
    console.log("The ngAfterContentChecked is called");
  }

  ngAfterViewInit(){
    console.log("The ngAfterviewInit is called");
  }

  ngAfterViewChecked(){
    console.log("The ngAfterViewChecked is called");
  }

  ngOnDestroy(){
    console.log("The ngOnDestroy is called");
  } */

  getValue() {
    console.log(this.job);
    this.jobToSend = this.job;
    this.job = "";
  }

  displayElement(jobReceive: Array<any>) {
    this.jobDisplay = jobReceive;
  }
}
