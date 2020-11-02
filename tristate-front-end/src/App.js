import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState({ events: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/events");

      setData(result.data);
    };

    fetchData();
  }, []);
console.log(data);

  return (
    <div className="App">
    <ul>
     {data.events.map((item, i) => (
       <li key={i}>

         <img src={item.eventImg} alt="" key={i} />
         <a href={item.eventUrl}>{item.eventNote}</a>
       </li>
     ))}
   </ul>
    </div>
  );
};

export default App;
