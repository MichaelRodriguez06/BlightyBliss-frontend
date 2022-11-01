import {Component, OnInit} from '@angular/core';

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
      subtitle: "Add user", icon: "", Direction:"http://localhost:4200/register-account"
    }, {
      subtitle: "User", icon: ""
    }], icon: ""
  }, {
    title: "Students", icon: "", subMenu: [{
        subtitle: "Add students", icon: "",Direction:"http://localhost:4200/regist-student"
      },{
      subtitle: "Shows students", icon: ""
    }, {
      subtitle: "Certificates", icon: ""
    }
    ]
  }, {
    title: "Folders", icon: "", subMenu: [{
      subtitle: "Show folders", icon: "", Direction: "http://localhost:4200/forder-view"
    },{
      subtitle: "Update document", icon: ""
    }, {
      subtitle: "Create folder", icon: ""
    }, {
      subtitle: "Pending files", icon: ""
    }]
  }, {
    title: "Options", icon: "", subMenu: [{
      subtitle: "Agreements", icon: ""
    }, {
      subtitle: "Programs", icon: ""
    }, {
      subtitle: "Files", icon: "",Direction:"http://localhost:4200/file-management"
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
