import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CoverageModule } from './features/coverage/coverage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, CoreModule, CoverageModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
