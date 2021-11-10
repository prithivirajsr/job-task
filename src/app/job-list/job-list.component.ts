import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    selector: 'app-job-list',
    templateUrl: './job-list.component.html',
    styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnChanges {

    jobList: Array<any> = [];
    lastElement: string = "";

    @Input("job") newJob: string = "";

    @Output("showJob") displayJob = new EventEmitter<any>();
    /*constructor(public cd: ChangeDetectorRef) {

    }*/
    ngOnChanges() {
        if (this.newJob)
            this.jobList.push(this.newJob);
        console.log(this.jobList);
        if (this.jobList.length !== 0) {
            this.lastElement = this.jobList[this.jobList.length - 1];
            alert("The last element of array is: " + this.lastElement);

        }
        //this.cd.detectChanges();
    }
    ngAfterViewInit() {
        this.displayJob.emit(this.jobList);
    }




}
