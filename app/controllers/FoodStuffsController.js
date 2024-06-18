import { AppState } from "../AppState.js";
import { foodStuffsService } from "../services/FoodStuffsService.js";
import { setHTML } from "../utils/Writer.js";

export class FoodStuffsController {

  constructor() {
    console.log('Food Stuffs Controller is loaded');
    this.drawFoodStuffs()
    AppState.on('money', this.drawFoodStuffs)
  }

  drawFoodStuffs() {
    const foodStuffs = AppState.foodStuffs
    let innerHTMLString = ``
    foodStuffs.forEach((foodStuff) => innerHTMLString += foodStuff.venderHTMLTemplate)
    setHTML('vendingBody', innerHTMLString)
  }

  purchaseFoodStuffs(foodName) {
    foodStuffsService.purchaseFoodStuffs(foodName)
  }

}