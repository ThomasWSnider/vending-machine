

export class FoodStuff {

  constructor(foodName, foodEmoji, foodPrice) {
    this.name = foodName
    this.emoji = foodEmoji
    this.price = foodPrice
  }

  get venderHTMLTemplate() {
    return `
            <div class="col-3 d-flex justify-content-center">
          <div class="card my-2" style="width: 18rem;">
            <div class="card-body">
              <h4 id="${this.name}" class="display-1 text-center pr-2">${this.emoji}</h4>
              <hr>
              <h5 class="card-title">${this.name}</h5>
              <div class="d-flex justify-content-between align-items-center">
                <p class="card-text pt-3">$${this.price.toFixed(2)}</p>
                <a href="#" class="btn btn-primary">Buy</a>
              </div>
            </div>
          </div>
        </div>`
  }
}