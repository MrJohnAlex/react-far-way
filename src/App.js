import { useState } from "react";

const initialItems = [
  {
    id: 1,
    description: "Passport",
    quantity: 2,
    packed: true,
  },
  {
    id: 2,
    description: "Socks",
    quantity: 10,
    packed: false,
  },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Status />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <h1> 🌴 Far Away 💼</h1>
    </div>
  );
}
function Form() {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    setItems(items, newItem);
  }
  return (
    <div className="add-form">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>What do you need for your 😍 trip?</label>
          <select
            name="description"
            value={quantity}
            onChange={(e) => {
              setQuantity(Number(e.target.value));
            }}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
              <option value={num}>{num}</option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Item...."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <input type="submit" value="ADD" />
        </div>
      </form>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      <div className="sort">
        <select name="order" id="order">
          <option defaultChecked>Hello</option>
          <option>Hello</option>
        </select>
        <button>Reset</button>
      </div>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span className={item.packed ? "packed" : ""}>
        {item.quantity} {item.description}
      </span>
      <button>X</button>
    </li>
  );
}

function Status() {
  return (
    <footer>
      <p>you have X items on your list, and you already packed X %</p>
    </footer>
  );
}
