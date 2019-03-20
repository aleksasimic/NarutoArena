import { Skill } from './skill';

export class Character {
    constructor(
        public id: number,
        public imagecharacter:string,
        public name:string,
        public about:string,
        public skills:Skill[],
        public health:number
    ) {}
}