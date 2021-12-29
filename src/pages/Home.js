import React from "react";
import { Hero } from "../components";
import { useState, useEffect } from "react";

function Home() {
  const [articles, setArticles] = useState([]);
  const apiKey = "keynggO9MrPH2Mznf";
  const airtableApi = `https://api.airtable.com/v0/appyVo1FNAGNfze0e/API?api_key=${apiKey}`;

  useEffect(() => {
    try {
      fetch(airtableApi)
        .then((res) => res.json())
        .then((data) => setArticles(data.records));
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(articles);
  return (
    <React.Fragment>
      <Hero />
      {articles.length > 0 ? (
        <div className="container">
          <table border="1">
            <thead>
              <tr>
                <th>Description</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((record, i) => (
                <tr key={i}>
                  <td>{record.fields.descripcion}</td>
                  <td>{record.fields.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>fetching data...</p>
      )}
    </React.Fragment>
  );
}

export { Home };
