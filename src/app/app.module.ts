import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InViewportModule } from 'ng-in-viewport';
import 'intersection-observer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TencoLogoComponent } from './controls/ready/tenco-logo/tenco-logo.component';
import { TencoNavbarComponent } from './controls/ready/tenco-navbar/tenco-navbar.component';
import { TencoNavbarItemComponent } from './controls/ready/tenco-navbar-item/tenco-navbar-item.component';
import { TencoSlidedTextComponent } from './controls/ready/tenco-slided-text/tenco-slided-text.component';
import { TencoHoverAnimatedTileComponent } from './controls/ready/tenco-hover-animated-tile/tenco-hover-animated-tile.component';
import { TencoHoverAnimatedTileContainerComponent } from './controls/ready/tenco-hover-animated-tile-container/tenco-hover-animated-tile-container.component';
import { TencoTileReferenceComponent } from './controls/ready/tenco-tile-reference/tenco-tile-reference.component';
import { TencoSliderComponent } from './controls/ready/tenco-slider/tenco-slider.component';
import { TencoFooterComponent } from './controls/ready/tenco-footer/tenco-footer.component';
import { TencoHeaderComponent } from './controls/ready/tenco-header/tenco-header.component';
import { TencoImagedTextComponent } from './controls/ready/tenco-imaged-text/tenco-imaged-text.component';
import { TencoNumeredListTextComponent } from './controls/ready/tenco-numered-list-text/tenco-numered-list-text.component';
import { TencoNumeredListTextItemComponent } from './controls/ready/tenco-numered-list-text-item/tenco-numered-list-text-item.component';
import { TencoContactFormComponent } from './controls/ready/tenco-contact-form/tenco-contact-form.component';
import { TencoDelimeterComponent } from './controls/ready/tenco-delimeter/tenco-delimeter.component';
import { TencoVideoContainerComponent } from './controls/ready/tenco-video-container/tenco-video-container.component';
import { TencoEventsListComponent } from './controls/ready/tenco-events-list/tenco-events-list.component';
import { TencoPageHomeComponent } from './pages/ready/tenco-page-home/tenco-page-home.component';
import { TencoPageAboutComponent } from './pages/ready/tenco-page-about/tenco-page-about.component';
import { TencoPageServicesComponent } from './pages/ready/tenco-page-services/tenco-page-services.component';
import { TencoPageMembershipComponent } from './pages/ready/tenco-page-membership/tenco-page-membership.component';
import { TencoPageEventsComponent } from './pages/ready/tenco-page-events/tenco-page-events.component';
import { TencoPagePartnersComponent } from './pages/ready/tenco-page-partners/tenco-page-partners.component';
import { TencoPageContactComponent } from './pages/ready/tenco-page-contact/tenco-page-contact.component';
import { TencoFullwidthscreenSectionComponent } from './controls/ready/tenco-fullwidthscreen-section/tenco-fullwidthscreen-section.component';
import { TencoEventItemComponent } from './controls/ready/tenco-event-item/tenco-event-item.component';
import { TencoTileReferenceContainerComponent } from './controls/ready/tenco-tile-reference-container/tenco-tile-reference-container.component';
import { TencoMapComponent } from './controls/ready/tenco-map/tenco-map.component';
import { TencoPageErrorComponent } from './pages/ready/tenco-page-error/tenco-page-error.component';



@NgModule({
  declarations: [
    AppComponent,
    TencoLogoComponent,
    TencoNavbarComponent,
    TencoNavbarItemComponent,
    TencoSlidedTextComponent,
    TencoHoverAnimatedTileComponent,
    TencoHoverAnimatedTileContainerComponent,
    TencoTileReferenceComponent,
    TencoSliderComponent,
    TencoFooterComponent,
    TencoHeaderComponent,
    TencoImagedTextComponent,
    TencoNumeredListTextComponent,
    TencoNumeredListTextItemComponent,
    TencoContactFormComponent,
    TencoDelimeterComponent,
    TencoVideoContainerComponent,
    TencoEventsListComponent,
    TencoPageHomeComponent,
    TencoPageAboutComponent,
    TencoPageServicesComponent,
    TencoPageMembershipComponent,
    TencoPageEventsComponent,
    TencoPagePartnersComponent,
    TencoPageContactComponent,
    TencoFullwidthscreenSectionComponent,
    TencoEventItemComponent,
    TencoTileReferenceContainerComponent,
    TencoMapComponent,
    TencoPageErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
