import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ApplicantsComponent } from './components/applicants/applicants.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { HomeComponent } from './components/home/home.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { NewsPostComponent } from './components/news/news-post/news-post.component';
import { NewsComponent } from './components/news/news.component';
import { PendingChangesGuard } from './guards/pending-changes.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'upisi',
    component: EnrollmentComponent,
    canDeactivate: [PendingChangesGuard]
  },
  {
    path: 'novosti',
    component: NewsComponent,
    children: [
      { path: '', pathMatch: 'full', component: NewsListComponent },
      { path: ':id', component: NewsPostComponent }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'vrtic', component: ApplicantsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
