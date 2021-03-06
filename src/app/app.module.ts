import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbInputModule,
  NbFormFieldModule,
  NbIconModule,
  NbButtonModule,
  NbSidebarModule,
  NbActionsModule,
  NbMenuModule,
  NbContextMenuModule,
  NbUserModule,
  NbTabsetModule,
  NbListModule,
  NbDialogModule,
  NbToggleModule,
  NbSelectModule,
  NbToastrModule,
  NbSpinnerModule,
  NbCheckboxModule,
  NbRadioModule,
  NbTooltipModule,
  NbCardModule,
  NbBadgeModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NavbarComponent } from './static/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './static/footer/footer.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { WelcomePageComponent } from './pages/admin/welcome-page/welcome-page.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { WelcomeUserComponent } from './pages/user/welcome-user/welcome-user.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { config } from 'rxjs';
import { SpinnerComponent } from './static/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { UpdateQuestionComponent } from './pages/admin/question/update-question/update-question.component';
import { DisplayQuizComponent } from './pages/user/welcome-user/display-quiz/display-quiz.component';
import { CategoriesComponent } from './pages/user/categories/categories.component';
import { QuizzesComponent } from './pages/user/categories/quizzes/quizzes.component';
import { PreStartQuizComponent } from './pages/user/categories/quizzes/pre-start-quiz/pre-start-quiz.component';
import { StartQuizComponent } from './pages/user/categories/quizzes/pre-start-quiz/start-quiz/start-quiz.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { DifficultyComponent } from './pages/user/categories/quizzes/pre-start-quiz/start-quiz/difficulty/difficulty.component';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UploadCsvComponent } from './pages/admin/upload-csv/upload-csv.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    FooterComponent,
    DashboardComponent,
    UserDashboardComponent,
    HomeComponent,
    ProfileComponent,
    WelcomePageComponent,
    UserProfileComponent,
    WelcomeUserComponent,
    ViewCategoriesComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    ViewQuizzesComponent,
    SpinnerComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionsComponent,
    UpdateQuestionComponent,
    DisplayQuizComponent,
    CategoriesComponent,
    QuizzesComponent,
    PreStartQuizComponent,
    StartQuizComponent,
    DifficultyComponent,
    UpdateUserComponent,
    UploadCsvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    FormsModule,
    HttpClientModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbActionsModule,
    NbMenuModule.forRoot(),
    NgbModule,
    NbContextMenuModule,
    NbUserModule,
    MatIconModule,
    NbTabsetModule,
    NbListModule,
    NbDialogModule.forRoot(),
    NbToggleModule,
    NbSelectModule,
    NgxSpinnerModule,
    NbSpinnerModule,
    NbCheckboxModule,
    NbRadioModule,
    MatProgressSpinnerModule,
    NbTooltipModule,
    MatRadioModule,
    NbDialogModule.forRoot(),
    NbBadgeModule,
    MatSnackBarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
