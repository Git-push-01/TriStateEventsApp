import React, { useEffect, useState } from "react";
import { Card, Image, Container } from 'semantic-ui-react'
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
 <Container>
    {data.events.map((item, i) => (

    <Card key ={i}  href={item.eventUrl}>
       <Image src={item.eventImg} wrapped ui={false}/>
       <Card.Content>
         <Card.Header>{item.eventName}</Card.Header>
         <Card.Description>
        {item.eventNote}
         </Card.Description>
       </Card.Content>

     </Card>
 ))}
</Container>
)
}

export default App;
