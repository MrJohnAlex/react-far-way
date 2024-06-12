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
  return <h1>Far Away</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <form>
        <label>What do you need for your 😍 trip?</label>
        <select name="description">
          <option defaultChecked>Hello</option>
          <option>Hello</option>
        </select>
        <input type="text" placeholder="Item...." />
        <input type="submit" value="ADD" />
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
      <select name="order" id="order">
        <option defaultChecked>Hello</option>
        <option>Hello</option>
      </select>
      <button>Reset</button>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span>
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
