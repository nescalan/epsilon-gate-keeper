// import React from "react";
// import { useState, useEffect } from "react";

// function FetchApi() {
//   const [articles, setArticles] = useState([]);
//   const apiKey = "keynggO9MrPH2Mznf";
//   const airtableApi = `https://api.airtable.com/v0/appyVo1FNAGNfze0e/API?api_key=${apiKey}`;

//   useEffect(() => {
//     try {
//       fetch(airtableApi)
//         .then((res) => res.json())
//         .then((data) => setArticles(data.records));
//     } catch (error) {
//       console.log(error);
//     }
//   }, []);
//   console.log(articles);

// export { FetchApi };
