import { AppState } from "../AppState.js";

class MoneysService {

  constructor() {
    console.log("We've gone deeper...");
  }

  addMoneys(moneyAmount) {
    AppState.money += moneyAmount
  }
}

export const moneysService = new MoneysService