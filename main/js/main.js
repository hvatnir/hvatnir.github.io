let card = new Card('js-card');
card.run();


function Card(classCard) {
  this.cards = document.querySelectorAll('.' + classCard);
  this.bindEventsCard = function() {
    for (let i = 0, length = this.cards.length; i < length; i++) {
      this.cards[i].addEventListener('mousemove', this.startRotate);
      this.cards[i].addEventListener('mouseout', this.stopRotate);
    }
  }
  this.startRotate = function(event) {
    let cardItem = this.querySelector('.card-item'),
        halfHeight = cardItem.offsetHeight / 2,
        halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotatex(' + -(event.offsetY - halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - halfWidth) / 5 + 'deg)';
  }
  this.stopRotate = function(event) {
  let cardItem = this.querySelector('.card-item');
  cardItem.style.transform = 'rotate(0)';
}
  this.run = () => {
    this.bindEventsCard();
  }
}


VANTA.BIRDS({
  el: "#cred",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0xffffff,
  color1: 0x0,
  color2: 0x0,
  birdSize: 0.80,
  wingSpan: 14.00,
  speedLimit: 2.00,
  separation: 94.00,
  alignment: 27.00,
  quantity: 4.00
})