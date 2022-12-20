export class Experiencias {
    id?:number;
    description?:string;
    companyName?:string;
    imgUrl?:string;

    constructor(description:string,companyName:string,imgUrl:string){
        this.description=description;
        this.companyName=companyName;
        this.imgUrl=imgUrl;
    }

}
