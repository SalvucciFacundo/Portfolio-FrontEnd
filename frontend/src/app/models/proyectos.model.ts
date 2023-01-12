export class Proyectos {
    id?:number;
    title?:string;
    description?:string;
    imgUrl?:string;
    url?:string;

    constructor(description:string,title:string,imgUrl:string){
        this.description = description;
        this.title = title;
        this.imgUrl = imgUrl;
        this.url = this.url;
    }
}
