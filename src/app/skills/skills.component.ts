import { Component, OnInit } from '@angular/core';

import { Skill } from '../model/skill';

@Component({
  templateUrl: './app/skills/skills.html',
})
export class SkillsComponent implements OnInit  {

  skills = SKILLS;
  selectedSkill: Skill;

  constructor(){}

  ngOnInit(){ console.log('[skills.component]'); }

  onSelect(skill: Skill): void {
    this.selectedSkill = skill;
  }
}

const SKILLS: Skill[] = [
  { name: 'Javascript', value: 70, type: 'Web Language', icon: '../img/skill-logos/logo-javascript.svg' },
  { name: 'jQuery', value: 72, type: 'Web Language', icon: '../img/skill-logos/logo-jquery.svg' },
  { name: 'HTML', value: 90, type: 'Web Language', icon: '../img/skill-logos/logo-html.svg' },
  { name: 'CSS/SCSS', value: 90, type: 'Web Language', icon: '../img/skill-logos/logo-css.svg' },
  { name: 'PHP', value: 70, type: 'Web Language', icon: '../img/skill-logos/logo-php.svg' },
  { name: 'C++', value: 26, type: 'Web Language', icon: '../img/skill-logos/logo-c.svg' },
  { name: 'mySQL', value: 34, type: 'Web Language', icon: '../img/skill-logos/logo-mysql.svg' },
  { name: 'Node.js', value: 20, type: 'Web Language', icon: '../img/skill-logos/logo-node.svg' },
  { name: 'AngularJS 1.X', value: 54, type: 'Web Language', icon: '../img/skill-logos/logo-angularjs.svg' },
  { name: 'Angular 2+', value: 56, type: 'Web Language', icon: '../img/skill-logos/logo-angular.svg' },
  { name: 'Typescript', value: 40, type: 'Web Language', icon: '../img/skill-logos/logo-typescript.svg' },
  { name: 'GoogleMaps API V.3', value: 69, type: 'API', icon: '../img/skill-logos/logo-googlemaps.svg' },
  { name: 'Mandrill API', value: 50, type: 'API', icon: '../img/skill-logos/logo-mandrill.svg' },
  { name: 'Quandl Rest API', value: 50, type: 'API', icon: '../img/skill-logos/logo-quandl.svg' },
  { name: 'Adobe Illustrator', value: 90, type: 'Design Software', icon: '../img/skill-logos/logo-illustrator.svg' },
  { name: 'Adobe Photoshop', value: 80, type: 'Design Software', icon: '../img/skill-logos/logo-photoshop.svg' },
  { name: 'Adobe InDesign', value: 50, type: 'Design Software', icon: '../img/skill-logos/logo-indesign.svg' },
  { name: 'Adobe Experience Design', value: 40, type: 'Design Software', icon: '../img/skill-logos/logo-xd.svg' },
  { name: 'Adobe After Effects', value: 30, type: 'Design Software', icon: '../img/skill-logos/logo-aftereffects.svg' },
  { name: 'Google Analytics', value: 50, type: 'Web Analytics', icon: '../img/skill-logos/logo-ga.svg' },
  { name: 'Google Tag Manager', value: 55, type: 'Web Analytics', icon: '../img/skill-logos/logo-tag.svg' },
  { name: 'SEO Screaming Frog', value: 60, type: 'Web Analytics', icon: '../img/skill-logos/logo-screamingfrog.svg' },
  { name: 'Sitebeam', value: 40, type: 'Web Analytics', icon: '../img/skill-logos/logo-sitebeam.svg' }
];