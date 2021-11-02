import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
// rxjs
import { Observable, Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
// companies
export const companySearchQueryParamKey = 'companyName';
export const companyRouteParamKey = 'companyId';
import { CompanyService } from '../../company.service';
import { RouterStateService } from '../../company-router-state.service';
import { Company } from '../../types/company';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit, OnDestroy {

  companies$: Observable<Company[] | null> ;
  companySearchControl = new FormControl('');
  destroy = new Subject();

  constructor(
    private routerState: RouterStateService,
    private router: Router,
    companyService: CompanyService
  ) {
    this.companies$ = companyService.companies;

    this.companySearchControl.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe((value) =>
        this.router.navigate([], { queryParams: { [companySearchQueryParamKey]: value || null },})
      );
  }

  async ngOnInit() {
    const queryParams = await this.routerState.queryParamsMap
      .pipe(first())
      .toPromise();

    this.companySearchControl.patchValue(
      queryParams.get(companySearchQueryParamKey)
    );
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

}
