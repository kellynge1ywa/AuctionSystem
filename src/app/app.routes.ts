import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { Navbar } from './Components/navbar/navbar.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { LoginComponent } from './Components/login/login.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { SellerComponent } from './Components/seller/seller.component';
import { BidderComponent } from './Components/bidder/bidder.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { MyBidsComponent } from './Components/my-bids/my-bids.component';
import { AddArtComponent } from './Components/add-art/add-art.component';
import { SellerProductsComponent } from './Components/seller-products/seller-products.component';
import { ArtCategoriesComponent } from './Components/art-categories/art-categories.component';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { BidsComponent } from './Components/bids/bids.component';
import { ViewArtComponent } from './Components/view-art/view-art.component';
import { authGuard } from './Guards/auth.guard';
import { roleGuardsGuard } from './Guards/role.guard';
import { PaymentsComponent } from './Components/payments/payments.component';







export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path:'home', component:HomeComponent, },
    {path:'login',component:LoginComponent},
    {path:'register', component:RegistrationComponent},
    {path:'forgot', component:ResetPasswordComponent},
    {path:'mybids',component:MyBidsComponent,canActivate:[roleGuardsGuard('Bidder')]},
    {path:'about', component:AboutComponent},
    {path:'contact',component:ContactsComponent},
    {path:'seller', component:SellerComponent, canActivate:[roleGuardsGuard('Seller')]},
    {path:'bidder', component:BidderComponent,canActivate:[roleGuardsGuard('Bidder')]},
    {path:'admin', component:AdminDashboardComponent},
    {path:'addart', component:AddArtComponent},
    {path:'sellerproducts', component:SellerProductsComponent},
    {path:'categories', component:ArtCategoriesComponent},
    {path:'users', component:AllUsersComponent},
    {path:'bids', component:BidsComponent},
    {path:'art-details/:id',component:ViewArtComponent},
    {path:'payments', component:PaymentsComponent,canActivate:[roleGuardsGuard]}

    // {path:'navbar', component:NavbarComponent}
];
