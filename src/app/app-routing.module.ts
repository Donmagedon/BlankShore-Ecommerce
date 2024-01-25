import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClothingComponent } from './routes/clothing/clothing.component';
import { BlogComponent } from './routes/blog/blog.component';
import { ItemPreviewComponent } from './routes/item-preview/item-preview.component';
import { OrderPreviewComponent } from './routes/order-preview/order-preview.component';
import { ContactUsComponent } from './routes/contact-us/contact-us.component';
import { LoginPageComponent } from './routes/login-page/login-page.component';
import { SavedAddressCardComponent } from './components/saved-address-card/saved-address-card.component';
import { SavedDetailsCardComponent } from './components/saved-details-card/saved-details-card.component';

const routes: Routes = [
{  path:"",component:HomepageComponent
},{
  
  path:"clothing/Sweaters",component:ClothingComponent,data:{path:"Sweater"}
},{
  
  path:"clothing/Sweaters/:identifier",component:ItemPreviewComponent,data:{path:"Sweater"}
},
{path:"clothing/Jeans",component:ClothingComponent,data:{path:"Jeans"}},
{path:"clothing/Jeans/:identifier",component:ItemPreviewComponent, data:{path:"Jeans"}},
{path:"clothing/Hats",component:ClothingComponent,data:{path:"Hat"}},
{
  
  path:"clothing/Hats/:identifier",component:ItemPreviewComponent,data:{path:"Hat"}
},
{path:"shoes",component:ClothingComponent,data:{path:"Shoe"}},
{
  
  path:"shoes/:identifier",component:ItemPreviewComponent,data:{path:"Shoe"}
},
{
  
  path:"blog",component:BlogComponent
},
{
  path:"contact",component:ContactUsComponent
},
{
  path:"order/:path/:identifier",component:OrderPreviewComponent
},{
  path:"login",component:LoginPageComponent
},{
  path:"address",component:SavedAddressCardComponent,outlet:"display"
},{
  path:"personal",component:SavedDetailsCardComponent,outlet:"display"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
