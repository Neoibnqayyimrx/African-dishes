const menu = [
  {
    id: 1,
    title: "Abula",
    category: "breakfast",
    price: 1500,
    img: "./images/item-1.jpeg",
    desc: `beware of biting your tounge when eating a nice Abula,else you're OYO. `,
  },
  {
    id: 2,
    title: "Masar Bauchi",
    category: "lunch",
    price: 1450,
    img: "./images/item-2.jpg",
    desc: `anyone who visits Bauchi state without tasting their Masa,did not visit Bauchi state at all. besides Yankari game reserve, Bauchi state has so many interesting things. `,
  },
  {
    id: 3,
    title: "Fried rice",
    category: "brunch",
    price: 1700,
    img: "./images/item-3.jpg",
    desc: `For Party and Occasions`,
  },
  {
    id: 4,
    title: "Efo Riro",
    category: "breakfast",
    price: 2000,
    img: "./images/item-4.jpg",
    desc: `Hnmm, A well prepared Efo riro is the quickest route to a yoruba Man's heart `,
  },
  {
    id: 5,
    title: "Ofada",
    category: "lunch",
    price: 2000,
    img: "./images/item-5.jpeg",
    desc: `A yoruba Man will go extra mile because of Ofada `,
  },
  {
    id: 6,
    title: "Akara",
    category: "breakfast",
    price: 600,
    img: "./images/item-6.jpeg",
    desc: `Made from beans,Usually taken together with Pap(ogi) or Koko in Hausa land`,
  },
  {
    id: 7,
    title: "Jollof/Fried rice",
    category: "breakfast",
    price: 1700,
    img: "./images/item-7.jpg",
    desc: `Food for Party nad Occasions `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 1500,
    img: "./images/item-8.jpeg",
    desc: `Nil `,
  },

  {
    id: 9,
    title: "semovita",
    category: "dinner",
    price: 1300,
    img: "./images/item-9.jpg",
    desc: `A Cosmopolitan meal in Africa, in other words,refined Tuwon masara`,
  },
  {
    id: 10,
    title: "beef steak",
    category: "brunch",
    price: 1300,
    img: "./images/item-10.jpeg",
    desc: `tasty Protein`,
  },
  {
    id: 11,
    title: "afang soup",
    category: "dinner",
    price: 1300,
    img: "./images/item-11.jpg",
    desc: `An Akwa-ibom delicacy`,
  },
  {
    id: 12,
    title: "fufu",
    category: "dinner",
    price: 1300,
    img: "./images/item-12.jpg",
    desc: `A food rich in carbohydrate. Poupalar food in the south-eastern and western part of Nigeria`,
  },
  {
    id: 13,
    title: "tuwon shinkafa",
    category: "dinner",
    price: 1300,
    img: "./images/item-13.jpg",
    desc: `A highly exotic meal venerated by the Hausa-fulanis`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

//load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button " data-id=${category}>
    ${category}
      </button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title}/>
    <div class="item-info">
    <header>
    <h4>${item.title}</h4>
    <h4 class="price">$${item.price}</h4>
    </header>
    <p class="item-text">
    ${item.desc}
    </p>
    </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}
