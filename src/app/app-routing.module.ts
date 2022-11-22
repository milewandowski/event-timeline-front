import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TimelineComponent} from './component/timeline/timeline.component';
import {AuthenticationGuard} from './guard/authentication.guard';
import {AuthenticationEmployeeGuard} from './guard/authentication-employee.guard';
import { LoginComponent } from './component/login/login.component';
import { AllEventsComponent } from './component/all-events/all-events.component';
import { EventDetailsComponent } from './component/event-details/event-details.component';

const routes: Routes = [
  {path: 'all-events', component: AllEventsComponent},
  {path: 'event-details/:id', component: EventDetailsComponent},
  {path: 'timeline', component: TimelineComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/timeline', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
