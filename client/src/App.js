import React, { useEffect, useState } from "react";


function App() {
  const axios = require('axios');
  const[result, setResult] = useState("");

  useEffect(() =>{
    setResult("nothing");
  },[])


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      async function getMessage() {
        const response = await axios.get(
          `/backend/api/users`
        );
        console.log(response);
        setResult(response.data.name);
      }
      getMessage();
    } catch(err) {
      console.log(err);
    }



    setResult("success..");
    console.log(result)
  }


  return (
    <div>
      <p>welcome to the simple app!</p>
      <form onSubmit={handleSubmit}>
        <button variant="primary" type="submit">test</button >
      </form>
      
      <p>{result}</p>
    </div>
  );
}

export default App;