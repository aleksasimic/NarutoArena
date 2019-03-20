import { Character } from './character';

export class InGame {
    constructor(
        public myteam:Character[],
        public aiteam:Character[]
    ) {}
}