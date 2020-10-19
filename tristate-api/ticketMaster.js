const fetch = require("node-fetch");
const { apiKey } = require("./config");

async function eventFetch() {
  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&marketId=35&page=0&size=100`
  ).then(async function (response) {
    const data = await response.json().then((data) => {
      const eventData = data._embedded.events.map((venue) => ({
        eventName: venue.name,
        eventUrl: venue.url,
        eventImg: venue.images[2].url,
      }));

      console.log(eventData);
    });
  });
}
eventFetch();
