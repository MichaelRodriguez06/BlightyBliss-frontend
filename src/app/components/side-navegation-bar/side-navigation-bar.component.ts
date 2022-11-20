import {Component, OnInit} from '@angular/core';
import {AppRoutes} from "../../core/services/app-routes";

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.scss']
})
export class SideNavigationBarComponent implements OnInit {

  items = [{
    title: "Profile", subMenu: [{
      subtitle: "Show users", icon: 'assets/account.svg'
    }, {
      subtitle: "Add user", icon: "", Direction:AppRoutes.REGISTER_ACCOUNT
    }, {
      subtitle: "User", icon: ""
    }], icon: ""
  }, {
    title: "Students", icon: "", subMenu: [{
        subtitle: "Add students", icon: "",Direction:AppRoutes.REGISTER_STUDENT
      },{
      subtitle: "Shows students", icon: "", Direction:AppRoutes.VIEW_STUDENTS
    }, {
      subtitle: "Certificates", icon: ""
    }
    ]
  }, {
    title: "Folders", icon: "", subMenu: [{
      subtitle: "Show folders", icon: "", Direction: AppRoutes.FOLDER_VIEW
    },{
      subtitle: "Update document", icon: ""
    }, {
      subtitle: "Create folder", icon: ""
    }, {
      subtitle: "Pending files", icon: "",Direction:AppRoutes.PENDING_FILES
    }]
  }, {
    title: "Options", icon: "", subMenu: [{
      subtitle: "CRUD", icon: "",Direction:AppRoutes.FILE_MANAGEMENT
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
  }

  ngOnInit(): void {
  }
}
