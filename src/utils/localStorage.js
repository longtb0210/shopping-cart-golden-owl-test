const cardLocal = {
  saveCard(data) {
    localStorage.setItem("cards", JSON.stringify(data));
  },

  getCard() {
    return JSON.parse(localStorage.getItem("cards"));
  },

  saveTotalPrice(data) {
    localStorage.setItem("totalPrice", JSON.stringify(data));
  },

  getTotalPrice() {
    return JSON.parse(localStorage.getItem("totalPrice"));
  },
  updateCard(newList, newPrice) {
    this.saveCard(newList);
    this.saveTotalPrice(newPrice);
  },
};

export { cardLocal };
