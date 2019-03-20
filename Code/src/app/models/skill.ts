export class Skill {
    constructor(
        public number: number,
        public name:string,
        public description:string,
        public effect:number,
        public singletarget:boolean,
        public twotargets:boolean,
        public threetargets:boolean,
        public skillurl:string
    ) {}
}