import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// feature Companies
import { CompaniesRoutingModule } from './companies-routing.module';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompaniesPage } from './companies.page';

// Companies
@NgModule({
  declarations: [
    CompaniesPage,
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompaniesRoutingModule
  ],
  exports: [
    CompaniesPage,
    CompanyListComponent
  ]
})
export class CompaniesModule { }
