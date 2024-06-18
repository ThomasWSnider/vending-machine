import { AppState } from "../AppState.js";

class MoneysService {

  constructor() {
    console.log("We've gone deeper...");
  }

  addMoneys() {
    AppState.money += 0.25
    console.log(AppState.money);
  }
}

export const moneysService = new MoneysService