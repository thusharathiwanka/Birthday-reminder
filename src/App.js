import React from "react";
import data from "./Data";
import Card from "./Card";

function App() {
  return (
    <main>
      <section>
        {data.map((person) => {
          return (
            <Card image={person.image} name={person.name} age={person.age} />
          );
        })}
      </section>
    </main>
  );
}

export default App;
