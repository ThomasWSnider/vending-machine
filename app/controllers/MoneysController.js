import { AppState } from "../AppState.js";
import { moneysService } from "../services/MoneysService.js";
import { setText } from "../utils/Writer.js";


export class MoneysController {

  constructor() {
    console.log('live from moneycontroller.js!');
  }

  addMoneys() {
    moneysService.addMoneys()
    this.drawMoney()
  }

  drawMoney() {
    setText('moneyTotal', `$${AppState.money.toFixed(2)}`)
  }

}