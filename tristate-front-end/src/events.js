import React, { useEffect, useState, Fragment } from "react";
import { Card, Image, Container } from "semantic-ui-react";
import config from "./config";
import axios from "axios";

const TOKEN = config.API_KEY;

const Events = () => {
  const [data, setData] = useState({ events: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://cors-anywhere.herokuapp.com/https://app.ticketmaster.com/discovery/v2/events.json?apikey=${TOKEN}&classificationName=comedy&dmaId=345&page=0&size=50`);

      await setData(result.data._embedded.events);
      await setLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <Container>
      {loading && <h1>Loading Events</h1>}
      {!loading && (
        <Fragment>
          <Card.Group
            centered
            rounded="true"
            style={{ minHeight: 100, padding: "1em 0em" }}
          >
            {data.map((item, i) => (
              <Card key={i} href={item.url} target="_blank">
                <Image src={item.images[1].url} centered fluid rounded />
                <Card.Content>
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Description>{item.pleaseNote}</Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Fragment>
      )}
    </Container>
  );
};

export default Events;
