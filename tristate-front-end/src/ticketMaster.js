// import config  from "./config";
//
// const EventsFetch = () => {
// const TOKEN = config.API_KEY
//   async function eventFetch() {
//     let response = await fetch(
//       `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${TOKEN}&classificationName=comedy&dmaId=345&page=0&size=50`
//     )
//       .then((res) => res.json())
//       .then((data) =>
//         data._embedded.events.map((venue) => ({
//           eventName: venue.name,
//           eventUrl: venue.url,
//           eventImg: venue.images[2].url,
//           eventNote: venue.pleaseNote,
//         }))
//       );
//
//     return response
//
//   }
//
//
// };
// export default EventsFetch;
