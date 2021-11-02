import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'company-item',
  template: `
    <p>
    company-item works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
