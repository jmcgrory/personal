// Modules
import { NgModule, OnInit }         from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { AppRoutingModule }         from './routing.module';
import { HttpModule }               from '@angular/http';

// Components
import { AppComponent }             from './app.component';
import { HomeComponent }            from './home/home.component';
import { PortfolioComponent }       from './portfolio/portfolio.component';
import { SkillsComponent }          from './skills/skills.component';
import { BlogComponent }            from './blog/blog.component';
import { ContactComponent }         from './contact/contact.component';

// Services
import { PortService }              from './services/port.service';
import { SkillsService }              from './services/skills.service';

// Pipes
import { SkillLevel }               from './pipes/skill.pipe';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    SkillsComponent,
    BlogComponent,
    ContactComponent,
    SkillLevel
  ],
  providers: [
    PortService,
    SkillsService
  ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }
