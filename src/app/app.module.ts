import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppProvider } from './app.provider';
import {CommonModule, DatePipe} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardGraphComponent } from './dashboard-graph/dashboard-graph.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetSuccessComponent } from './reset-success/reset-success.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetTokenexpireComponent } from './reset-tokenexpire/reset-tokenexpire.component';
import { HomeComponent } from './home/home.component';
import { RegisterSetpasswordComponent } from './register-setpassword/register-setpassword.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { RegisterPersonalComponent } from './register-personal/register-personal.component';
import { RegisterProfileComponent } from './register-profile/register-profile.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RegisterPaymentComponent } from './register-payment/register-payment.component';
import { RegisterMedicationComponent } from './register-medication/register-medication.component';
import { RegisterClickonComponent } from './register-clickon/register-clickon.component';
import { RegisterDiagnosedComponent } from './register-diagnosed/register-diagnosed.component';
import { RegisterMembershipComponent } from './register-membership/register-membership.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageSubscriptionComponent } from './manage-subscription/manage-subscription.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { SwitchUserComponent } from './switch-user/switch-user.component';
import { ContactSupportComponent } from './contact-support/contact-support.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SettingComponent } from './setting/setting.component';
import { NotificationComponent } from './notification/notification.component';
import { TermOfServiceComponent } from './term-of-service/term-of-service.component';
import { RewardsComponent } from './rewards/rewards.component';
import { VaccinationComponent } from './vaccination/vaccination.component';
import { AppointmentUpcomingComponent } from './appointment-upcoming/appointment-upcoming.component';
import { AppointmentPastComponent } from './appointment-past/appointment-past.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentAvatarComponent } from './appointment-avatar/appointment-avatar.component';
import { HistoryLabComponent } from './history-lab/history-lab.component';
import { AppointmentBookComponent } from './appointment-book/appointment-book.component';
import { AppointmentBookMedicationComponent } from './appointment-book-medication/appointment-book-medication.component';
import { AppointmentBookReasonComponent } from './appointment-book-reason/appointment-book-reason.component';
import { AppointmentBookVitalsComponent } from './appointment-book-vitals/appointment-book-vitals.component';
import { AppointmentBookDoctorComponent } from './appointment-book-doctor/appointment-book-doctor.component';
import { AppointmentBookDoctorDetailsComponent } from './appointment-book-doctor-details/appointment-book-doctor-details.component';
import { AppointmentBookDateComponent } from './appointment-book-date/appointment-book-date.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckinBottheringComponent } from './checkin-botthering/checkin-botthering.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CheckinAvatarComponent } from './checkin-avatar/checkin-avatar.component';
import { CheckinDoctorComponent } from './checkin-doctor/checkin-doctor.component';
import { CheckinSymptomsComponent } from './checkin-symptoms/checkin-symptoms.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { SessionViewComponent } from './session-view/session-view.component';
import { HealthRecordDetailsComponent } from './health-record-details/health-record-details.component';
import { HealthRecordComponent } from './health-record/health-record.component';
import { RegisterFamilyMemberComponent } from './register-family-member/register-family-member.component';
import { RegisterFamilyMemberAddComponent } from './register-family-member-add/register-family-member-add.component';
import { RegisterFamilyMemberEditComponent } from './register-family-member-edit/register-family-member-edit.component';
import { HealthGiftComponent } from './health-gift/health-gift.component';
import { ManageSubscriptionGenrateComponent } from './manage-subscription-genrate/manage-subscription-genrate.component';
import { SupportComponent } from './support/support.component';
import { SwitchSessionDetailsComponent } from './switch-session-details/switch-session-details.component';
import { SwitchSessionViewComponent } from './switch-session-view/switch-session-view.component';
import { SwitchDashboardComponent } from './switch-dashboard/switch-dashboard.component';
import { MedicalChartComponent } from './medical-chart/medical-chart.component';
import { PaymentGatwayComponent } from './payment-gatway/payment-gatway.component';
import { PreviousInteractionComponent } from './previous-interaction/previous-interaction.component';
import { CoachPersonalDetailsComponent } from './coach-personal-details/coach-personal-details.component';
import { CoachPersonalHealthComponent } from './coach-personal-health/coach-personal-health.component';
import { CoachSettingComponent } from './coach-setting/coach-setting.component';
import { CoachDashboardComponent } from './coach-dashboard/coach-dashboard.component';
import { CoachLoginComponent } from './coach-login/coach-login.component';
import { CheckinNewComponent } from './checkin-new/checkin-new.component';
import { CoachHeaderComponent } from './coach-header/coach-header.component';
import { HistoryLabDetailsComponent } from './history-lab-details/history-lab-details.component';
import { CheckinBookDateComponent } from './checkin-book-date/checkin-book-date.component';
import { CheckinBookDoctorDetailsComponent } from './checkin-book-doctor-details/checkin-book-doctor-details.component';
import { CheckinBookDoctorComponent } from './checkin-book-doctor/checkin-book-doctor.component';
// import { FullCalendarModule } from '@fullcalendar/angular';
import { NgChartsModule } from 'ng2-charts';

// import { FullCalendarModule } from '@fullcalendar/angular';

// import { AgmCoreModule } from '@agm/core';
import { FullCalendarModule } from '@fullcalendar/angular';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin from '@fullcalendar/interaction'; // a plugin!




export function playerFactory() {
  return player;
}


// FullCalendarModule.registerPlugins([
//   dayGridPlugin,
//  interactionPlugin
// ])

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardGraphComponent,
    HomeComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ResetSuccessComponent,
    ResetTokenexpireComponent,
    RegisterSetpasswordComponent,
    RegisterPersonalComponent,
    RegisterProfileComponent,
    RegisterMedicationComponent,
    RegisterDiagnosedComponent,
    RegisterClickonComponent,
    RegisterMembershipComponent,
    RegisterPaymentComponent,
    DashboardComponent,
    ManageSubscriptionComponent,
    ManageAccountComponent,
    SwitchUserComponent,
    ContactSupportComponent,
    PrivacyComponent,
    TermOfServiceComponent,
    RewardsComponent,
    SettingComponent,
    NotificationComponent,
    VaccinationComponent,
    AppointmentUpcomingComponent,
    AppointmentPastComponent,
    AppointmentDetailsComponent,
    AppointmentAvatarComponent,
    HistoryLabComponent,
    AppointmentBookComponent,
    AppointmentBookMedicationComponent,
    AppointmentBookReasonComponent,
    AppointmentBookVitalsComponent,
    AppointmentBookDoctorComponent,
    AppointmentBookDoctorDetailsComponent,
    AppointmentBookDateComponent,
    CheckinComponent,
    CheckinBottheringComponent,
    CheckinAvatarComponent,
    CheckinDoctorComponent,
    CheckinSymptomsComponent,
    SessionDetailsComponent,
    SessionViewComponent,
    HealthRecordDetailsComponent,
    HealthRecordComponent,
    CheckinBookDateComponent,
    CheckinBookDoctorDetailsComponent,
    CheckinBookDoctorComponent,
    RegisterFamilyMemberComponent,
    RegisterFamilyMemberAddComponent,
    RegisterFamilyMemberEditComponent,
    HealthGiftComponent,
    ManageSubscriptionGenrateComponent,
    SupportComponent,
    SwitchSessionDetailsComponent,
    SwitchSessionViewComponent,
    SwitchDashboardComponent,
    MedicalChartComponent,
    PaymentGatwayComponent,
    PreviousInteractionComponent,
    CoachPersonalDetailsComponent,
    CoachPersonalHealthComponent,
    CoachSettingComponent,
    CoachDashboardComponent,
    CoachLoginComponent,
    CheckinNewComponent,
    HistoryLabDetailsComponent,
    CoachHeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    // LottieModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgxIntlTelInputModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDWVS_xZVoLUxoqR8_3Pgb-tmrQzDfiPAU'
    // }),
    BsDatepickerModule.forRoot(),
    // DatepickerModule.forRoot(),
    FullCalendarModule,

    NgMultiSelectDropDownModule.forRoot(),
    CommonModule,
    // NgChartsModule
    NgChartsModule
    // FullCalendarModule,


  ],
  providers: [AppProvider,DatePipe],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA],

})
export class AppModule { }
