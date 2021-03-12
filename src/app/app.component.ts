import { Component, AfterViewChecked } from '@angular/core';
declare const PR: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  title = 'angularbestpractice';
  public ngAfterViewChecked(): any {
    // PR.prettyPrint();
  }
}
