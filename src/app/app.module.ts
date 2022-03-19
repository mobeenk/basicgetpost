
import { NgxPaginationModule } from 'ngx-pagination';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TestApiComponent } from './test-api/test-api.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicHighlightDirective } from './_directives/basic-highlight.directive';
import { BetterHighlightDirective } from './_directives/better-highlight.directive';
import { NgNotIfDirective } from './_directives/ng-not-if.directive';
import { AlertModalComponent } from './_modals/alert-modal/alert-modal.component';
import { CoolModalComponent } from './_modals/cool-modal/cool-modal.component';
import { ShortenPipe } from './_pipes/shorten.pipe';
import { FilterPipe } from './_pipes/filter.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { PostsViewerComponent } from './posts-viewer/posts-viewer.component';



@NgModule({
  declarations: [
    AppComponent,
    TestApiComponent,
    NavbarComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    NgNotIfDirective,
    AlertModalComponent,
    CoolModalComponent,
    ShortenPipe,
    FilterPipe,
    PostsViewerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxPaginationModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
