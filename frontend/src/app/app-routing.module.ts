import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RefListComponent} from './ref-list/ref-list.component';
import {SchoolListComponent} from './school-list/school-list.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {SchoolDetailComponent} from "./school-detail/school-detail.component";
import {AdmissionComponent} from "./admission/admission.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {EducationRegisterComponent} from "./education-register/education-register.component";
import {RegisterSchoolListComponent} from "./register-school-list/register-school-list.component";
import {RegisterSchoolDetailComponent} from "./register-school-detail/register-school-detail.component";
import {LoginComponent} from './login/login.component';
import {EkoolDemoComponent} from './ekool-demo/ekool-demo.component';
import {DemoVideoComponent} from './demo-video/demo-video.component';
import {DemoPresentationComponent} from './demo-presentation/demo-presentation.component';
import {SubregisterTeachersComponent} from './subregister-teachers/subregister-teachers.component';
import {SubregisterStudentsComponent} from './subregister-students/subregister-students.component';
import {SubregisterCurriculaComponent} from './subregister-curricula/subregister-curricula.component';
import {SubregisterCertificatesComponent} from './subregister-certificates/subregister-certificates.component';
import {SubregisterLiteratureComponent} from './subregister-literature/subregister-literature.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admission', component: AdmissionComponent, children: [
      {path: 'ref-list', component: RefListComponent},
      {path: 'student-detail/:studentId', component: StudentDetailComponent},
      {path: 'school-list', component: SchoolListComponent},
      {path: 'school-detail/:id', component: SchoolDetailComponent},
    ]},
  {path: 'education-register', component: EducationRegisterComponent, children: [
      {path: 'register-school-list', component: RegisterSchoolListComponent},
      {path: 'register-school-detail/:id', component: RegisterSchoolDetailComponent},
      {path: 'subregister-teachers', component: SubregisterTeachersComponent},
      {path: 'subregister-students', component: SubregisterStudentsComponent},
      {path: 'subregister-curricula', component: SubregisterCurriculaComponent},
      {path: 'subregister-certificates', component: SubregisterCertificatesComponent},
      {path: 'subregister-literature', component: SubregisterLiteratureComponent}
    ]},
  {path: 'ekool-demo', component: EkoolDemoComponent, children: [
      {path: 'demo-video', component: DemoVideoComponent},
      {path: 'demo-presentation', component: DemoPresentationComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
