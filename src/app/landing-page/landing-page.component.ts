import { Component, OnInit } from '@angular/core';
import * as data from '../../app/dashboard/data.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  data: any = (data as any).default;
  subData: any;
   topic = "Best practices for a clean & Performance Angular application";
   descpt = "Performance and Code Quality Tools to Building A Clean and Robust Angular Application."
  constructor(private router: Router) { }
  navigatoinChange(data) {
    // this.navigatoinChangeEvent.emit(data);
    this.router.navigate([data]);
  }
  ngOnInit(): void {
  }
  loadNavData(data){
    this.subData = data
  }
}
