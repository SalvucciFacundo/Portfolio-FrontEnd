export class Educacion{
    id?:number;
    title?:string;
    institute?:string;
    start?:string;
    end?:string;
    logoUrl?:string;

    constructor( title:string, institute:string, start:string, end:string, logoUrl:string){
        this.title=title;
        this.institute=this.institute,
        this.start=start;
        this.end=end;
        this.logoUrl=logoUrl;
    }


}