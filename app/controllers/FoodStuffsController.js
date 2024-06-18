import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";

export class FoodStuffsController {

  constructor() {
    console.log('Food Stuffs Controller is loaded');
    this.drawFoodStuffs()
  }

  drawFoodStuffs() {
    const foodStuffs = AppState.foodStuffs
    let innerHTMLString = ``
    foodStuffs.forEach((foodStuff) => innerHTMLString += foodStuff.venderHTMLTemplate)
    setHTML('vendingBody', innerHTMLString)
  }

}