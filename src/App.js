import { useState } from "react";
import "./App.css";

function App() {
  const changHandler = (e) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const [formData, setForm] = useState({
    firstName: "",
    lastName: "",
    visible: false,
    mode: "",
    favCar:"",
  });

 

  function submitHandler(e){
     e.preventDefault();
     console.log(formData);

  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first name"
          onChange={changHandler}
          value={formData.firstName}
          name="firstName"
        />

        <input
          type="text"
          placeholder="last name"
          onChange={changHandler}
          value={formData.lastName}
          name="lastName"
        />

        <input
          type="checkBox"
          name="visible"
          id="visible"
          onChange={changHandler}
          checked={formData.visible}
        />
        <label htmlFor="visible">am i visible</label>

        <fieldset>

          <legend>Mode:</legend>

          {/* when making radio button how many u make make the name same */}
          <input
            type="radio"
            name="mode"
            value="online"
            id="online"
            onChange={changHandler}
            checked={formData.mode === "online"}
          />
          <label htmlFor="online">online</label>

          <input
            type="radio"
            name="mode"
            value="offline"
            id="offline"
            onChange={changHandler}
            checked={formData.mode === "offline"}
          />

          <label htmlFor="offline">offline</label>


        </fieldset>

         <select name="favCar" value={formData.favCar}  onChange={changHandler}>
           
         <option value="thar">Select</option>
          <option value="scorpipo">scorpio</option>
          <option value="fortuner">fortuner</option>
          <option value="thar">thar</option>
           
         </select>
         <button>Submit</button>   
      </form>
    </div>
  );
}

export default App;
