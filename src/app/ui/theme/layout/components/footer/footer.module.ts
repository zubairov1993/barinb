import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { IconsModule } from 'src/app/ui/icons/icons.module';


import { FooterComponent } from './footer.component';

@NgModule({
  imports: [RouterModule, MatButtonModule, IconsModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {}
