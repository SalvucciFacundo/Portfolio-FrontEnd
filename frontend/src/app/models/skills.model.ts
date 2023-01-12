export class Skills {
    id?:number;
    name?:string;
    value?:string;
    imgUrl?:string;
    type?:string;

    constructor(name:string, value:string,imgUrl:string,type:string){
        this.name=name;
        this.value=value;
        this.imgUrl=imgUrl;
        this.type=type;
    }
}
