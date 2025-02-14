import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        {people.length === 0 ? (
          <button
            type="button"
            onClick={() => setPeople(data)}
            className="btn btn-block"
          >
            Add all
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setPeople([])}
            className="btn btn-block"
          >
            clear all
          </button>
        )}
      </section>
    </main>
  );
};
export default App;
