import { FoodStuff } from "./models/FoodStuff.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  money = 0
  foodStuffs = [
    new FoodStuff(
      'Hot Za',
      '🍕',
      5.50
    ),
    new FoodStuff(
      'Syruppy Cakes',
      '🥞',
      3.75
    ),
    new FoodStuff(
      'Just Bacon',
      '🥓',
      2.25
    ),
    new FoodStuff(
      'Meat on a Stick',
      '🍖',
      6.00
    ),
    new FoodStuff(
      'Literally Raw Fish',
      '🍣',
      8.00
    ),
    new FoodStuff(
      'Bean and Cheese',
      '🌯',
      5.50
    ),
    new FoodStuff(
      'Cheese Wedge',
      '🧀',
      .75
    ),
    new FoodStuff(
      'Raw Uncooked Kidney Beans',
      '🫘',
      0.25
    )
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())