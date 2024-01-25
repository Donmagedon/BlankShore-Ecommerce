import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './homepage/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrandInfoComponent } from './homepage/brand-info/brand-info.component';
import { FeaturedComponent } from './homepage/featured/featured.component';
import { PopularComponent } from './homepage/popular/popular.component';
import { ProductsDemonstrateComponent } from './components/others/products-demonstrate/products-demonstrate.component';
import { TestimonialsComponent } from './homepage/testimonials/testimonials.component';
import { InstagramComponent } from './homepage/instagram/instagram.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClothingComponent } from './routes/clothing/clothing.component';
import { ShopItemsComponent } from './components/shop-items/shop-items.component';
import { ItemComponent } from './components/item/item.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { GetItemsService } from './Services/get-items.service';
import {ReactiveFormsModule,FormsModule,FormBuilder} from "@angular/forms";
import { BlogComponent } from './routes/blog/blog.component';
import { ContactUsComponent } from './routes/contact-us/contact-us.component';
import { ItemPreviewComponent } from './routes/item-preview/item-preview.component';
import { OrderPreviewComponent } from './routes/order-preview/order-preview.component'
import {MiscellaneousDataService} from "./Services/miscellaneaous/miscellaneous-data.service"
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { ItemsSummaryComponent } from './components/items-summary/items-summary.component';
import { ShoppingCartComponent } from './routes/shopping-cart/shopping-cart.component'
import { RunningSessionService } from './Services/running-session.service';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { LoadUserInfoService } from './Services/load-user-info.service';
import { AuthenticationService } from './Services/authentication.service';
import { UserDetailsComponent } from './routes/user-details/user-details.component';
import { SavedAddressCardComponent } from './components/saved-address-card/saved-address-card.component';
import { AddAddressFormComponent } from './components/add-address-form/add-address-form.component';
import { AddPersonalDetailsFormComponent } from './components/add-personal-details-form/add-personal-details-form.component';
import { SavedDetailsCardComponent } from './components/saved-details-card/saved-details-card.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BrandInfoComponent,
    FeaturedComponent,
    PopularComponent,
    ProductsDemonstrateComponent,
    TestimonialsComponent,
    InstagramComponent,
    FooterComponent,
    HomepageComponent,
    ClothingComponent,
    ShopItemsComponent,
    ItemComponent,
    FilterPanelComponent,
    BlogComponent,
    ContactUsComponent,
    ItemPreviewComponent,
    OrderPreviewComponent,
    ItemsSummaryComponent,
    ShoppingCartComponent,
    LoginPageComponent,
    UserDetailsComponent,
    SavedAddressCardComponent,
    AddAddressFormComponent,
    AddPersonalDetailsFormComponent,
    SavedDetailsCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GetItemsService,
    MiscellaneousDataService,
    LoadUserInfoService,
    AuthenticationService
    ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:RunningSessionService,
      multi: true,
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
