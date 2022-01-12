export class Item {
  id: number;
  label: string;
  isPlandrome: boolean;

  constructor(id:number,label: string,isPlandrome :boolean){
    this.id= id;
    this.label=label;
    this.isPlandrome=isPlandrome;
  }
}
