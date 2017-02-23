// Modules
import { NgModule }      from '@angular/core';
import { RouterModule, Routes, PreloadAllModules }   from '@angular/router';

// Components
import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';
import { PortfolioComponent }  from './portfolio/portfolio.component';
import { SkillsComponent }  from './skills/skills.component';
import { BlogComponent }  from './blog/blog.component';
import { ContactComponent }  from './contact/contact.component';

// Variables

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'portfolio',
    component: PortfolioComponent
  }, {
    path: 'skills',
    component: SkillsComponent
  }, {
    path: 'blog',
    component: BlogComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
]

@NgModule({
  imports:      [
    RouterModule.forRoot(appRoutes, { useHash: false, preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
