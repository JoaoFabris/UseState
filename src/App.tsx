import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [guest, setGuest] = useState<string[]>([]);
  const [email, setEmail] = useState<string[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<string[]>([]);
  const [selectedFruit, setSelectedFruit] = useState<string[]>([]);

  const addGuest = (newGuest: string) => {
    setGuest([...guest, newGuest]);
  };

  const addEmail = (newEmail: string) => {
    setEmail([...email, newEmail]);
  };

  const addRadioDrink = (newDrink: string) => {
    setSelectedDrink([...selectedDrink, newDrink]);
  };

  const addRadioFruit = (newFruit: string) => {
    setSelectedFruit([...selectedFruit, newFruit]);
  };

  return (
    // aqui enviamos a função para o componente Form
    <div>
      <Form
        newGuest={addGuest}
        newEmail={addEmail}
        newDrink={addRadioDrink}
        newFruit={addRadioFruit}
      />
    </div>
  );
}

export default App;
