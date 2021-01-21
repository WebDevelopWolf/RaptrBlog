import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { ResourcesComponent } from './resources/resources.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogSearchComponent } from './blog/blog-search/blog-search.component';
import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewPostComponent } from './review/review-post/review-post.component';
import { ReviewSearchComponent } from './review/review-search/review-search.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from './_modules/shared.module';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ResourcesComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AboutComponent,
    BlogListComponent,
    BlogPostComponent,
    BlogSearchComponent,
    ReviewListComponent,
    ReviewPostComponent,
    ReviewSearchComponent,
    HomeComponent,
    FooterComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
