import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '../../core/services/app-routes';

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.scss']
})

export class SideNavigationBarComponent implements OnInit {

  items = [
    {
      title: 'Profile', icon: "", subMenu: [{
        subtitle: "User", Direction: AppRoutes.VIEW_INFO_USER
      }, {
        subtitle: "Show users", icon: 'assets/account.svg', Direction: AppRoutes.VIEW_ACCOUNT_LIST
      }, {
        subtitle: '', icon: ""
      }]
    },
    {
      title: "Students", icon: "", subMenu: [{
        subtitle: "Shows students", icon: "", Direction: AppRoutes.VIEW_STUDENTS
      }, {
        subtitle: "Certificates", icon: "", Direction: AppRoutes.GENERAL_CERTIFICATES
      }]
    }, {
      title: "Folders", icon: "", subMenu: [{
        subtitle: "Show folders", icon: "", Direction: AppRoutes.FOLDER_VIEW
      }, {
        subtitle: "Pending files", icon: "", Direction: AppRoutes.PENDING_FILES
      }]
    }, {
      title: "Options", icon: "", subMenu: [{
        subtitle: 'Options', icon: '', Direction: AppRoutes.FILE_MANAGEMENT
      }]
    }, {
      title: "Reports", icon: "", subMenu: [{
        subtitle: "Report 1", icon: ""
      }, {
        subtitle: "Report 2", icon: ""
      }, {
        subtitle: "Report 3", icon: ""
      }]
    }];


  constructor() {
    console.log(this.items)
  }

  ngOnInit(): void {
  }
}
