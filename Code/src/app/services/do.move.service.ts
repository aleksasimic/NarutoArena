import { Skill } from '../models/skill'
import { Character } from '../models/character';
import {Injectable} from '@angular/core'
@Injectable()
export class DoMoveService {
    private skills: Skill[];
    private chars:Character[];
    constructor() {
        this.skills =[];
        this.chars=[];
        
    }
    public addSkill(skill:Skill){
        this.skills.push(skill);
        console.log("Trenutni skillovi",this.skills);
    }
    public addChar(char:Character){
        this.chars.push(char);
        console.log("Trenutni characteri",this.chars);
    }
    public getSkills():Skill[]{
        return this.skills;
    }
    public getChars():Character[]{
        return this.chars;
    }
    public removeAll(){
        this.skills=[];
        this.chars=[];
    }
} 