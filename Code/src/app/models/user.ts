export class User {
    constructor(
        public id: number,
        public username:string,
        public password:string,
        public level:number,
        public experience:number,
        public imageurl:string,
        public location:string,
        public rank:string       
    ) {}
}