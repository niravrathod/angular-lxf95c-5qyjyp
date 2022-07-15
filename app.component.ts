import { Component, OnInit } from '@angular/core';
import { sampleData } from './jsontreegriddata';
import {
  EditService,
  ToolbarService,
  PageService,
} from '@syncfusion/ej2-angular-treegrid';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [ToolbarService, EditService, PageService],
})
export class AppComponent {
  public data: Object[] = [];
  public editSettings: Object;
  public toolbar: string[];
  public pageSettings: Object;
  public numericParams: Object;
  public dpParams: Object;
  public taskidrules: Object;
  public tasknamerules: Object;
  public startdaterules: Object;
  public priorityrules: Object;
  public durationrules: Object;
  public progressrules: Object;
  public format: Object;

  ngOnInit(): void {
    this.data = sampleData;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Row',
      newRowPosition: 'Below',
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.pageSettings = { pageCount: 5 };
    this.numericParams = { params: { format: 'n' } };
    (this.format = { format: 'M/d/y hh:mm a', type: 'dateTime' }),
      (this.dpParams = { params: { format: 'M/d/y hh:mm a' } });
    this.taskidrules = { required: true, number: true };
    this.tasknamerules = { required: true };
    this.startdaterules = { date: true };
    this.priorityrules = { required: true };
    this.progressrules = { number: true, min: 0 };
  }
  actionComplete(args) {
    if (args.requestType == 'beginEdit' || args.requestType == 'add') {
      debugger;
      var item = args.form.elements.namedItem('approved');
      var htmlItem = item as HTMLElement;
      // setTimeout(function () {
      htmlItem.focus();
      // }, 0);
    }
  }

  onClicked(): void {
    var treegrid =
      document.getElementsByClassName('e-treegrid')[0].ej2_instances[0]; // tree grid instance
    treegrid.addRecord();
  }
}
