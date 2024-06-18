import { AppState } from "../AppState.js";


class FoodStuffsService {

  constructor() {
    console.log('I Will Survive!!!');
  }


  purchaseFoodStuffs(foodName) {
    const foodStuffs = AppState.foodStuffs
    const snack = foodStuffs.find((snack) => snack.name == foodName)
    AppState.money -= snack.price
  }
}

export const foodStuffsService = new FoodStuffsService