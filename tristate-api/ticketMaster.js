const fetch = require("node-fetch");
const { apiKey } = require("./config");

async function eventFetch() {
  let response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&classificationName=comedy&dmaId=345&page=0&size=15`
  )
    .then((res) => res.json()).then((data) =>
      data._embedded.events.map((venue) => ({
        eventName: venue.name,
        eventUrl: venue.url,
        eventImg: venue.images[2].url,
        eventNote: venue.pleaseNote,
      }))


    );

  return response

}

module.exports = eventFetch();
// console.log(module.exports);
