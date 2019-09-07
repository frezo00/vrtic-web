import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { FormsModule, ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { RouterModule } from '../../../node_modules/@angular/router';
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { AgePipe } from '../pipes/age.pipe';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html.pipe';
import { AboutHomeComponent } from './about/about-home/about-home.component';
import { AboutComponent } from './about/about.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { ApplyFormComponent } from './apply-form/apply-form.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ImageSlidesComponent } from './image-slides/image-slides.component';
import { LoadingComponent } from './loading/loading.component';
import { ModalComponent } from './modal/modal.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsPostComponent } from './news/news-post/news-post.component';
import { NewsComponent } from './news/news.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { SuccessConfirmComponent } from './success-confirm/success-confirm.component';

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
    ApplicantsComponent,
    AgePipe,
    SanitizeHtmlPipe,
    AboutComponent,
    FooterComponent,
    SubheaderComponent,
    NewsPostComponent,
    NewsListComponent,
    AboutHomeComponent,
    EnrollmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgxMyDatePickerModule.forRoot(),
    FontAwesomeModule
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: []
})
export class ComponentsModule {}
