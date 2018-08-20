import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';
import {
  FormsModule,
  ReactiveFormsModule
} from '../../../node_modules/@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './header/header.component';
import { ImageSlidesComponent } from './image-slides/image-slides.component';
import { NewsComponent } from './news/news.component';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { LoadingComponent } from './loading/loading.component';
import { SuccessConfirmComponent } from './success-confirm/success-confirm.component';
import { ModalComponent } from './modal/modal.component';
import { ApplicantsListComponent } from './applicants-list/applicants-list.component';
import { AgePipe } from '../pipes/age.pipe';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { NewsPostComponent } from './news/news-post/news-post.component';
import { NewsListComponent } from './news/news-list/news-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ImageSlidesComponent,
    NewsComponent,
    ApplyFormComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoadingComponent,
    ClickOutsideDirective,
    SuccessConfirmComponent,
    ModalComponent,
    ApplicantsListComponent,
    AgePipe,
    AboutComponent,
    FooterComponent,
    SubheaderComponent,
    NewsPostComponent,
    NewsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    NgxMyDatePickerModule.forRoot(),
    FontAwesomeModule
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: []
})
export class ComponentsModule {}
