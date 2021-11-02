import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nxp-companies',
  template: `

    <company-list></company-list>
    <router-outlet></router-outlet>

  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompaniesPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
