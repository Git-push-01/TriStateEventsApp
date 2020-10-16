const fetch = require("node-fetch");
const { apiKey } = require("./config");

async function eventFetch() {
  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&marketId=35&page=0&size=20`
  ).then(async function (response) {
    const data = await response.json()
    .then(data => {
      data._embedded.events.map(event => console.log(event))
    })

  })

}
eventFetch();
