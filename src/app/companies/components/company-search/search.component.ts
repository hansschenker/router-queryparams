import { FormControl } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hs-search',
  template: `
<div class="search-field">
  <label for="search-field">Search</label>
  <input
    #searchControl
    id="searchControl"
    name="searchControl"
    type="text"
    placeholder="Name"
    formControlName="searchControl"
  />
</div>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanySearchComponent implements OnInit {

  searchControl:FormControl = new FormControl("");

  constructor() { }

  ngOnInit(): void {
  }

}
