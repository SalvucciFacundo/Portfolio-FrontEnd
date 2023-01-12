export class Experiencias {
    id?:number;
    description?:string;
    companyName?:string;
    imgUrl?:string;
    start?:string;
    end?:string;

    constructor(description:string,companyName:string,imgUrl:string,start:string,end:string){
        this.description=description;
        this.companyName=companyName;
        this.imgUrl=imgUrl;
        this.start=start;
        this.end=end;
    }

}
