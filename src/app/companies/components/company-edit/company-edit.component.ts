import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'company-edit',
  template: `
    <p>
      company-edit works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
