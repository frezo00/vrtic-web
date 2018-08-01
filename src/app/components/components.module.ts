import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './header/header.component';
import { ImageSlidesComponent } from './image-slides/image-slides.component';

@NgModule({
  declarations: [HeaderComponent, ImageSlidesComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [HeaderComponent, ImageSlidesComponent],
  providers: []
})
export class ComponentsModule {}
