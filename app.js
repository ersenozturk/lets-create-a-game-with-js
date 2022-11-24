document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
  ];

  const randomCardArray = cardArray.sort(() => 0.5 - Math.random());
  console.log("randomCardArra-->", randomCardArray);

  const grid = document.querySelector("#grid");
  const gameResults = document.querySelector("#result");
  let cardsChosenName = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //! first of all create your card image and add them event listener
  function createCard() {
    for (let i = 0; i < randomCardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./images/blank.png");
      card.setAttribute("data-id", i);
      grid.appendChild(card);
      card.addEventListener("click", flipCard);
    }
  }

  //! when user clicked  two cards and compare them
  function compareChosenCards() {
    // const allCards = document.querySelectorAll("#grid img");
    const allCards = randomCardArray;

    let clickedFirstName = cardsChosenName[0];
    let clickedSecondName = cardsChosenName[1];
    let clickedFirstId = cardsChosenId[0];
    let clickedSecondId = cardsChosenId[1];

    if (clickedFirstId == clickedSecondId) {
      alert("You have clicked the same image!");
      allCards[clickedFirstId].setAttribute("src", "./images/blank.png");
      allCards[clickedSecondId].setAttribute("src", "./images/blank.png");
    } else if (clickedFirstName === clickedSecondName) {
      alert("You found a match");

      allCards[clickedFirstId].setAttribute("src", "./images/white.png");
      allCards[clickedSecondId].setAttribute("src", "./images/white.png");
      allCards[clickedFirstId].removeEventListener("click", flipCard);
      allCards[clickedSecondId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosenName);
      gameResults.textContent = cardsWon.length;
      console.log(cardsWon);
    } else {
      allCards[clickedFirstId].setAttribute("src", "./images/blank.png");
      allCards[clickedSecondId].setAttribute("src", "./images/blank.png");
    }
    cardsChosenName = [];
    cardsChosenId = [];
  }

  //! Function Declaration
  // function flipCard() {
  //   let cardID = this.getAttribute("data-id");
  //   cardsChosenId.push(cardID);
  //   cardsChosenName.push(randomCardArray[cardID].name);
  //   this.setAttribute("src", randomCardArray[cardID].img);

  //   if (cardsChosenName.length === 2) {
  //     setTimeout(compareChosenCards, 400);
  //   }
  // }
  const flipCard = (e) => {
    let cardID = e.target.getAttribute("data-id");
    cardsChosenId.push(cardID);
    cardsChosenName.push(randomCardArray[cardID].name);
    e.target.setAttribute("src", randomCardArray[cardID].img);

    if (cardsChosenName.length === 2) {
      setTimeout(compareChosenCards, 100);
    }
  };
  createCard();
});
