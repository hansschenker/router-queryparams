import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'company-filter',
  template: `
    <p>
    company-filter works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
