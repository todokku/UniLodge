import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injectable  } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './user/register/register.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { ListingComponent } from './listings/listing/listing.component';
import { BrowseListingsComponent } from './listings/browse-listings/browse-listings.component';
import { MatAutocompleteModule } from '@angular/material';
import { NgxGalleryModule } from 'ngx-gallery';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { Ng5SliderModule } from 'ng5-slider';
import * as Hammer from 'hammerjs';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { EditListingsComponent } from './listings/edit-listings/edit-listings.component';

@Injectable()
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'pan': {
      direction: Hammer.DIRECTION_ALL,
    },
    pinch: { enable: false },
    rotate: { enable: false }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent, 
    UserListComponent, 
    UserEditComponent, 
    HomeComponent, 
    ProfileComponent, 
    EditListingsComponent,
    PageNotFoundComponent, 
    UserLoginComponent, 
    AccommodationComponent, 
    ListingComponent, 
    BrowseListingsComponent, EditListingsComponent],
  imports: [
    MatSnackBarModule,
    BrowserAnimationsModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    BrowserModule, 
    Ng5SliderModule,
    ReactiveFormsModule, 
    HttpModule, 
    NgxGalleryModule, 
    FormsModule, 
    AppRoutingModule, 
    HttpClientModule, 
    NgbModule, 
    ReactiveFormsModule, 
    MatAutocompleteModule],
  providers: [
    {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
