import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import * as data from './data.json';
import { FilesreadService } from '../services/filesread.service';
declare const PR: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewChecked {

  data: any = (data as any).default;
  subData: any;
  codePreview: Map<string, string>;
  prettyData: any
  code: any;
  title: any;
  description: any;
  exampleCodeLink: any;
  loadAPI: Promise<any>;
  url = 'http://iknow.com/this/does/not/work/either/file.js';
  constructor(private fileService: FilesreadService) { PR.prettyPrint(); }
  public ngAfterViewChecked(): any {
    // PR.prettyPrint();
  }


  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = this.url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit(): void {
    let data={
      "id": 1,
      "category": "strict:true- JS",
      "title": "strict:true",
      "description": "If you are starting a new project, it is worth setting strict:true in the tsconfig.json file to enable all strict type checking options.Inside tsconfig.json file add the following entry in compiler options:",
      "codeSnippet": "https://raw.githubusercontent.com/VinayakRao23/HTMLAssignments/master/HTML/sample2.txt",
      "isShow": false,
      "exampleCodeLink": "https://angular.io/guide/strict-mode"
    }
    this.loadNavData(data);
    // console.log(data);
  }
  loadNavData(data) {
    console.log('load data',data)
    this.subData = data
    var parent = document.createElement('div'),
      pre = document.createElement('pre'),
      code = document.createElement('code');

    this.title = data.title;
    this.description = data.description;
    this.exampleCodeLink = data.exampleCodeLink
    this.fileService.getFileDataAsync(data.codeSnippet).then((res) => {
      document.getElementById('codeHub').innerHTML = ''
      pre.innerHTML = ''
      code.innerHTML = ''
      parent.remove()
      pre.remove()
      code.remove()

      this.code = res
      var text = document.createTextNode(this.code);
      code.appendChild(text);
      pre.appendChild(code);
      document.getElementById('codeHub').appendChild(pre);
      document.getElementById('data-sec').appendChild(document.getElementById('codeHub'));
      pre.className = 'prettyprint linenums lang-ts'


      setTimeout(() => {
        PR.prettyPrint();
      }, 1000)

    })


  }

}
