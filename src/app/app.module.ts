import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LoginComponent } from './pages/login/login.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { AchievmentsComponent } from './pages/achievments/achievments.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LatestNewsComponent } from './pages/latest-news/latest-news.component';
import { EducationComponent } from './pages/education/education.component';
import { ErrorComponent } from './pages/error/error.component';
import { ResumeComponent } from './pages/resume/resume.component';


@NgModule({
  declarations: [
    AppComponent, 
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    CertificationsComponent,
    AchievmentsComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    EventsComponent,
    ContactComponent,
    LatestNewsComponent,
    EducationComponent,
    ErrorComponent,
    ResumeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    PdfViewerModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent},
      { path: 'certifications', component: CertificationsComponent},
      { path: 'achievments', component: AchievmentsComponent},
      { path: 'experience', component: ExperienceComponent},
      { path: 'skills', component: SkillsComponent},
      { path: 'projects', component: ProjectsComponent},
      { path: 'events', component: EventsComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'latest-news', component: LatestNewsComponent},
      { path: 'education', component: EducationComponent},
      { path: 'resume', component: ResumeComponent},
      { path: '**', component: ErrorComponent }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {} 
