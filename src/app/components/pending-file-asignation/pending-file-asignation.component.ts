import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-file-asignation',
  templateUrl: './pending-file-asignation.component.html',
  styleUrls: ['./pending-file-asignation.component.css',
    '../../../../node_modules/primeflex/primeflex.css',
    '../../../../node_modules/primeng/resources/themes/lara-light-indigo/theme.css']
})
export class PendingFileAsignationComponent implements OnInit {

  /*
  ej:
  https://stackblitz.com/edit/primeng-autocomplete-demo?file=src%2Fapp%2Fapp.component.html,src%2Fapp%2Fapp.component.ts,src%2Fapp%2Fapp.module.ts,src%2Fapp%2Fcountryservice.ts,src%2Fapp%2Fapp.component.css,src%2Fapp%2Fapp.component.spec.ts,src%2Fassets%2Fcountries.json,src%2Fenvironments%2Fenvironment.ts
  selectedCountryAdvanced: any[];
  filteredCountries: any[];
  */
  constructor() {
  }

  ngOnInit(): void {
    /*
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
     */
  }

  updateFileAsignation() {

  }

  /*
  filterStudent(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
   */
}
