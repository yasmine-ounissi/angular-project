import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';
import { RiskComponent } from './risk/risk.component';
import { ManagementComponent } from './management/management.component';
import { StakeComponent } from './stake/stake.component';
import { EmergyComponent } from './emergy/emergy.component';
import { ReportingComponent } from './reporting/reporting.component';
import { GrievanceComponent } from './grievance/grievance.component';
import { MonotComponent } from './monot/monot.component';
import { MaturitylevelComponent } from './maturitylevel/maturitylevel.component';
import { NgModule } from '@angular/core';
import { ResultComponent } from './result/result.component';
import { ImplementlevelComponent } from './implementlevel/implementlevel.component';
import { PlanComponent } from './plan/plan.component';
import { OrgaComponent } from './orga/orga.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'policy', component: PolicyComponent },
    { path: 'risk', component: RiskComponent },
    { path: 'management', component: ManagementComponent },
    { path: 'orga', component: OrgaComponent },
    { path: 'emergy', component: EmergyComponent },
    { path: 'stake', component: StakeComponent },
    { path: 'grievance', component: GrievanceComponent },
    { path: 'reporting', component: ReportingComponent },
    { path: 'monot', component: MonotComponent },
    { path: 'result', component:ResultComponent },
    { path: 'maturitylevel', component:MaturitylevelComponent },
    { path: 'implementlevel', component:ImplementlevelComponent},
    { path: 'plan', component:PlanComponent }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule { }