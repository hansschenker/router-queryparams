import { CompanyEditComponent } from './components/company-edit/company-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// companies
import { CompaniesPage } from './companies.page';
export const companySearchQueryParamKey = 'companyName';
export const companyRouteParamKey = 'companyId';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { CompanyListComponent } from './components/company-list/company-list.component';

const routes: Routes = [
  { path: '', component: CompaniesPage, children: [
    {
      path: 'new',
      component: CompanyFormComponent
      // loadChildren: () =>
      //   import('./company-form/company-form.module').then(
      //     (m) => m.CompanyFormModule
      //   ),
    },
    {
      path: ':id',
      component: CompanyEditComponent,
      // path: `:${companyRouteParamKey}`,
      // loadChildren: () =>
      //   import('./company-selected/company-selected.module').then(
      //     (m) => m.CompanySelectedModule
      //   ),
    },
  ] },
];
  // {
  //   path: '',
  //   component: CompanyListComponent,
  // },
  // {
  //   path: 'new',
  //   component: CompanyFormComponent
  //   // loadChildren: () =>
  //   //   import('./company-form/company-form.module').then(
  //   //     (m) => m.CompanyFormModule
  //   //   ),
  // },
  // {
  //   path: ':companyId',
  //   component: CompanyEditComponent,
  //   // path: `:${companyRouteParamKey}`,
  //   // loadChildren: () =>
  //   //   import('./company-selected/company-selected.module').then(
  //   //     (m) => m.CompanySelectedModule
  //   //   ),
  // },

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
