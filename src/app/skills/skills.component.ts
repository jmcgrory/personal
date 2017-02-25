import { Component, OnInit } from '@angular/core';
import { Skill } from '../model/skill';
import { SkillsService } from '../services/skills.service';

@Component({
  templateUrl: './app/skills/skills.html',
})
export class SkillsComponent implements OnInit  {

  skills: Skill[];
  selectedSkill: Skill;

  constructor(private skillsService: SkillsService){}

  ngOnInit(){ 
    console.log('[skills.component]');
    this.getSkills();
  }

  onSelect(skill: Skill): void {
    this.selectedSkill = skill;
  }

  getSkills(){

    this.skillsService.getSkills().subscribe(
      skills => this.skills = skills,
      err => {
        console.log(err);
    });
  }
}