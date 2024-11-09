import { AsyncModel } from "./async-model";

export class SelectModel extends AsyncModel {
  items: Array<SelectItem> = new Array<SelectItem>();

  setItems(items: Array<SelectItem>) {
    this.setOk();
    this.items = items;
  }
}

export class SelectItem {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
