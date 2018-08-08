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

@NgModule({
  declarations: [
    HeaderComponent,
    ImageSlidesComponent,
    NewsComponent,
    ApplyFormComponent,
    HomeComponent,
    PageNotFoundComponent,
    ClickOutsideDirective
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
  exports: [HeaderComponent],
  providers: []
})
export class ComponentsModule {}
