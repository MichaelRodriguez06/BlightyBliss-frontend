import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-navigation-bar',
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.scss']
})
export class SideNavigationBarComponent implements OnInit {

  items = [{
    title: "Profile", subMenu: [{
      subtitle: "Show users", icon: ""
    }, {
      subtitle: "Add user", icon: ""
    }, {
      subtitle: "User", icon: ""
    }], icon: ""
  }, {
    title: "Students", icon: "", subMenu: [{
      subtitle: "Shows students", icon: ""
    }, {
      subtitle: "Certificates", icon: ""
    }
    ]
  }, {
    title: "Folders", icon: "", subMenu: [{
      subtitle: "Update document", icon: ""
    }, {
      subtitle: "Create folder", icon: ""
    }, {
      subtitle: "Pending files", icon: ""
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
