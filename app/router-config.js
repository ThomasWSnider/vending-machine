
import { FoodStuffsController } from "./controllers/FoodStuffsController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [FoodStuffsController],
    view: ``
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])