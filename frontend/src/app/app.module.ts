import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RefListComponent} from './ref-list/ref-list.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {SchoolListComponent} from './school-list/school-list.component';
import {SchoolDetailComponent} from './school-detail/school-detail.component';
import {EducationRegisterComponent} from './education-register/education-register.component';
import {SchoolDataService} from './service/school-data/school-data.service';
import {StudentDataService} from './service/student-data/student-data.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {
  MatButtonModule,
  MatTableModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatSelectModule,
  MatListModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';
import {AdmissionComponent} from './admission/admission.component';
import {MainPageComponent} from './main-page/main-page.component';
import {RouterModule} from "@angular/router";
import { RegisterSchoolListComponent } from './register-school-list/register-school-list.component';
import { RegisterSchoolDetailComponent } from './register-school-detail/register-school-detail.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './service/auth/auth.service';
import { EkoolDemoComponent } from './ekool-demo/ekool-demo.component';
import { SubregisterTeachersComponent } from './subregister-teachers/subregister-teachers.component';
import { SubregisterStudentsComponent } from './subregister-students/subregister-students.component';
import { SubregisterCurriculaComponent } from './subregister-curricula/subregister-curricula.component';
import { SubregisterCertificatesComponent } from './subregister-certificates/subregister-certificates.component';
import { SubregisterLiteratureComponent } from './subregister-literature/subregister-literature.component';
import { DemoVideoComponent } from './demo-video/demo-video.component';
import { DemoPresentationComponent } from './demo-presentation/demo-presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    RefListComponent,
    StudentDetailComponent,
    SchoolListComponent,
    SchoolDetailComponent,
    AdmissionComponent,
    MainPageComponent,
    EducationRegisterComponent,
    RegisterSchoolListComponent,
    RegisterSchoolDetailComponent,
    LoginComponent,
    EkoolDemoComponent,
    SubregisterTeachersComponent,
    SubregisterStudentsComponent,
    SubregisterCurriculaComponent,
    SubregisterCertificatesComponent,
    SubregisterLiteratureComponent,
    DemoVideoComponent,
    DemoPresentationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule,
    RouterModule,
  ],
  providers: [
    SchoolDataService,
    StudentDataService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
