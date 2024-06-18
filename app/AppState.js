import { FoodStuff } from "./models/FoodStuff.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

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
    )
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())