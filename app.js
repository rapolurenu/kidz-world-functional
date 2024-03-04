var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButtons = document.getElementsByClassName("button");

var items = [
  {
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
  },
  {
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
  },
  {
    name: "Matilda",
    quantity: 0,
    dollars: 6,
    cents: 80,
  },
  {
    name: "Harry Potter",
    quantity: 0,
    dollars: 10,
    cents: 0,
  },
  {
    name: "For Young Readers",
    quantity: 0,
    dollars: 7,
    cents: 29,
  },
  {
    name: "Wimpy Kid - DIY",
    quantity: 0,
    dollars: 4,
    cents: 99,
  },
  {
    name: "Dart Board",
    quantity: 0,
    dollars: 17,
    cents: 49,
  },
  {
    name: "Connect Four",
    quantity: 0,
    dollars: 19,
    cents: 99,
  },
  {
    name: "Jenga",
    quantity: 0,
    dollars: 20,
    cents: 99,
  },
  {
    name: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
  },
  {
    name: "Bookmarks",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Birthday Card",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
  },
];

function updateCart() {
  let cart = 0;
  for (index = 0; index < items.length; index++) {
    cart = cart + items[index].quantity;
  }
  cartValue.innerHTML = cart;
}

for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].onclick = (e) => {
    items[i].quantity++;
    updateCart();
  };
}

var finalDollars = 0;
var finalCents = 0;

function updatePrice() {
  let totalPriceInCents = 0;

  for (index = 0; index < items.length; index++) {
    totalPriceInCents =
      totalPriceInCents +
      items[index].quantity * (items[index].dollars * 100 + items[index].cents);
  }
  finalDollars = Math.floor(totalPriceInCents / 100);
  finalCents = totalPriceInCents % 100;
}
const baseWhatsappLink = "https://api.whatsapp.com/send?phone=918688678834";
function sendOrderOnWhatsApp(items, totalAmount) {
  let message = "Order Details:%0A";
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity != 0) {
      message += `${items[index].name} - ${items[index].quantity}%0A`;
    }
  }
  message += `Total Price: $${totalAmount.toFixed(2)}`;

  const whatsappLink = `${baseWhatsappLink}&text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappLink, "_blank");
}

cartButton.onclick = () => {
  updatePrice();

  sendOrderOnWhatsApp(items, finalDollars + finalCents / 100);
  for (let index = 0; index < items.length; index++) {
    if (items[index].quantity != 0) {
      console.log(
        `Item name: ${items[index].name} - Quantity: ${items[index].quantity}`
      );
    }
  }

  console.log(`The total amount is $${finalDollars}.${finalCents}`);
};
