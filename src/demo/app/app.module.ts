import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgWizardModule } from 'projects/ng-wizard/src/public-api';
import { NgWizardConfig } from 'projects/ng-wizard/src/lib/utils/interfaces';
import { THEME } from 'projects/ng-wizard/src/lib/utils/enums';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgWizardModule.forRoot(ngWizardConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }