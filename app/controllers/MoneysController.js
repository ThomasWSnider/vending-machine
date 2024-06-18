import { AppState } from "../AppState.js";
import { moneysService } from "../services/MoneysService.js";
import { setText } from "../utils/Writer.js";


export class MoneysController {

  constructor() {
    console.log('live from moneycontroller.js!');

    // money <----- 👀
    AppState.on('money', this.drawMoney)
  }

  addMoneys(moneyAmount) {
    moneysService.addMoneys(moneyAmount)
  }

  drawMoney() {
    setText('moneyTotal', `$${AppState.money.toFixed(2)}`)
  }

}