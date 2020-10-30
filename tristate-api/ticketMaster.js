const fetch = require("node-fetch");
const { apiKey } = require("./config");

async function eventFetch() {
  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&classificationName=comedy&dmaId=345&page=0&size=10`
  ).then(async function (response) {
    await response.json().then((data) => {
      const events = data._embedded.events.map((venue) => ({
        eventName: venue.name,
        eventUrl: venue.url,
        eventImg: venue.images[2].url,
        eventNote: venue.pleaseNote,
      }));
      return events
console.log(events);
    });
  });


}



module.export = eventFetch()
console.log(module.export);
