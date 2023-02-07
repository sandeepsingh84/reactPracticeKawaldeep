import React, { useState } from "react";

const InputField = () => {
  const [first, setfirst] = useState("");

  const handleEvent = (event) => {
    setfirst(event.target.value);
  };
  return (
    //   <form onSubmit={(val)=> console.log('val', val)}>
    <div className="text-center py-10">
      <p className="my-4 text-xl font-sm">Practice input field</p>

      <input
        type="number"
        name="firstName"
        className="border"
        onChange={(event) => handleEvent(event)}
        value={first}
      />

      <p className="py-10 font-bold text-red-500">{first}</p>
      <button type="submit" onClick={handleEvent}>Submit</button>
      
    </div>
    //<button type="submit" >Submit</button>
    // </form>
  );
};

export default InputField;
