import { useState } from "react";

// o component form vai enviar o nome para o component pai App
type FormProps = {
  newGuest: (param: string) => void;
  newEmail: (param: string) => void;
  newDrink: (param: string) => void;
  newFruit: (param: string) => void;
};

function Form({ newGuest, newEmail, newDrink, newFruit }: FormProps) {
  const [guest, setGuest] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDrink, setSelectedDrink] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("");

  // This function will be triggered when a radio button is selected
  const radioHandlerDrink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDrink(event.target.value);
  };

  const radioHandlerFruits = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFruit(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (guest && email) {
      newGuest(guest);
      setGuest("");
      newEmail(email);
      setEmail("");
      newDrink(selectedDrink);
      setSelectedDrink("");
      newFruit(selectedFruit);
      setSelectedFruit("");
    }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="name">
        <input
          name="name"
          placeholder="New guest"
          value={guest}
          onChange={({ target }) => setGuest(target.value)}
        />
      </label>
      <label htmlFor="email">
        <input
          name="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
      <div className="container">
        <fieldset>
          <legend>Please select your most favorite drink?</legend>
          <p>
            <input
              type="radio"
              name="drink"
              value="Coffee"
              id="coffee"
              onChange={radioHandlerDrink}
            />
            <label htmlFor="coffee">Coffee</label>
          </p>

          <p>
            <input
              type="radio"
              name="drink"
              value="Tea"
              id="tea"
              onChange={radioHandlerDrink}
            />
            <label htmlFor="tea">Green Tea</label>
          </p>
          <p>
            <input
              type="radio"
              name="drink"
              value="Pumpkin Juice"
              id="pumpkin"
              onChange={radioHandlerDrink}
            />
            <label htmlFor="pumpkin">Pumpkin Juice</label>
          </p>
        </fieldset>
        <fieldset>
          <legend>Now pick your most favorite fruit</legend>
          <p>
            <input
              type="radio"
              name="food"
              id="banana"
              value="banana"
              onChange={radioHandlerFruits}
            />
            <label htmlFor="banana">Banana</label>
          </p>

          <p>
            <input
              type="radio"
              name="food"
              id="apple"
              value="apple"
              onChange={radioHandlerFruits}
            />
            <label htmlFor="apple">Apple</label>
          </p>

          <p>
            <input
              type="radio"
              name="food"
              id="oranges"
              value="oranges"
              onChange={radioHandlerFruits}
            />
            <label htmlFor="oranges">Oranges</label>
          </p>
        </fieldset>
      </div>

      <button>Add Quests</button>
    </form>
  );
}

export default Form;
