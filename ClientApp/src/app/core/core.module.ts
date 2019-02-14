import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AuthGuard } from './AuthGuard';
import { AuthService } from './auth.service';
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    HttpService
  ]
})
export class CoreModule { 

  constructor(@Optional() @SkipSelf() coreModule: CoreModule)
  {    
    if(coreModule) {
      throw new Error('You shall not run!');
    }
  }
}
