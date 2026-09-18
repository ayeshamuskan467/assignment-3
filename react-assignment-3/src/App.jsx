
import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuCard from "./components/MenuCard";

// Images
import coffeeImage from "./assets/coffee.jpg";
import latteImage from "./assets/latte.jpg";
import cakeImage from "./assets/cake.jpg";
import sandwichImage from "./assets/sandwich.jpg";
import shakeImage from "./assets/shake.jpg";
import friesImage from "./assets/fries.jpg";

const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    category: "Coffee",
    description: "Rich coffee with creamy foam and a smooth taste.",
    price: 350,
    image: coffeeImage,
  },
  {
    id: 2,
    name: "Latte",
    category: "Coffee",
    description: "Soft and creamy coffee made with fresh milk.",
    price: 400,
    image: latteImage,
  },
  {
    id: 3,
    name: "Chocolate Cake",
    category: "Dessert",
    description: "Soft and delicious chocolate cake with rich flavor.",
    price: 450,
    image: cakeImage,
  },
  {
    id: 4,
    name: "Club Sandwich",
    category: "Food",
    description: "Fresh chicken sandwich with vegetables and cheese.",
    price: 550,
    image: sandwichImage,
  },
  {
    id: 5,
    name: "Strawberry Shake",
    category: "Drinks",
    description: "Fresh strawberry shake with a sweet creamy taste.",
    price: 300,
    image: shakeImage,
  },
  {
    id: 6,
    name: "French Fries",
    category: "Food",
    description: "Crispy golden fries served with special sauce.",
    price: 250,
    image: friesImage,
  },
];

function App() {
  const [orders, setOrders] = useState(0);
  const [search, setSearch] = useState("");
  const [showAbout, setShowAbout] = useState(false);
  const [message, setMessage] = useState("");

  const addOrder = (itemName) => {
    setOrders(orders + 1);
    setMessage(`${itemName} added to your cart!`);
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Menu Section */}
      <section className="menu-section" id="menu">

        <div className="section-heading">
          <p className="small-heading">OUR SPECIAL MENU</p>

          <h1>Delicious Choices</h1>

          <p>
            Explore our freshly prepared coffee, snacks,
            desserts and drinks.
          </p>
        </div>

        {/* Search */}
        <div className="menu-tools">

          <input
            type="text"
            placeholder="Search your favorite item..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <div className="order-count">
            Orders: <strong>{orders}</strong>
          </div>

        </div>

        {/* Success Message */}
        {message && (
          <p className="success-message">
            {message}
          </p>
        )}

        {/* Menu Cards */}
        {filteredItems.length > 0 ? (

          <div className="menu-grid">

            {filteredItems.map((item) => (
              <MenuCard
                key={item.id}
                name={item.name}
                category={item.category}
                description={item.description}
                price={item.price}
                image={item.image}
                onAdd={() => addOrder(item.name)}
              />
            ))}

          </div>

        ) : (

          <div className="no-items">
            <h2>No items found</h2>

            <p>
              Please try searching for another item.
            </p>
          </div>

        )}

      </section>

      {/* About Section */}
      <section className="about-section" id="about">

        <div>

          <p className="small-heading">
            ABOUT US
          </p>

          <h1>Made With Love</h1>

          <p>
            Sweet Café is a cozy place where you can enjoy
            fresh coffee, delicious desserts and tasty snacks
            with your friends and family.
          </p>

          <button
            className="main-button"
            onClick={() => setShowAbout(!showAbout)}
          >
            {showAbout ? "Hide Details" : "Read More"}
          </button>

          {showAbout && (
            <div className="about-details">

              <p>
                We prepare every item with fresh ingredients
                and lots of love. Our goal is to provide a
                comfortable environment and delicious food
                for everyone.
              </p>

            </div>
          )}

        </div>

        <div className="about-card">

          <h2>Fresh Coffee</h2>

          <p>
            Freshly brewed coffee prepared especially for you.
          </p>

        </div>

      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">

        <p className="small-heading">
          GET IN TOUCH
        </p>

        <h1>Visit Sweet Cafe</h1>

        <p>
          Come and enjoy your favorite food and drinks with us.
        </p>

        <div className="contact-info">

          <p>Main Street, Your City</p>

          <p>0300-1234567</p>

          <p>sweetcafe@example.com</p>

        </div>

      </section>

      {/* Footer */}
      <footer>

        <p>
          © 2026 Sweet Cafe. All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;
