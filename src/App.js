import { useState } from "react";
import React from "react";
import data from "./Data";
import Card from "./Card";

function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
    console.log("cleared");
  };

  return (
    <main>
      <section>
        <h2>{people.length} birthdays today</h2>
        {people.map((person) => {
          return (
            <Card
              image={person.image}
              name={person.name}
              age={person.age}
              key={person.id}
            />
          );
        })}
        <button className="clear" onClick={clearAll}>
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
