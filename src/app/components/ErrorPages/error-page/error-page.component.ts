import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage: any;
  message: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route
      .params
      .subscribe(() => {
        const data = this.route.snapshot.data;
        this.errorMessage = data['errorMessage'];
        this.message = data['message'];
      });
  }
}
