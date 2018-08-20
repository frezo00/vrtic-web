import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';
import { NewsComponent } from './components/news/news.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { NewsPostComponent } from './components/news/news-post/news-post.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';

import { PendingChangesGuard } from './guards/pending-changes.guard';
import { ApplicantsListComponent } from './components/applicants-list/applicants-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  {
    path: 'upisi',
    component: ApplyFormComponent,
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
  { path: 'vrtic', component: ApplicantsListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
