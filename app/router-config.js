
import { FoodStuffsController } from "./controllers/FoodStuffsController.js";
import { MoneysController } from "./controllers/MoneysController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [FoodStuffsController, MoneysController],
    view: ``
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])