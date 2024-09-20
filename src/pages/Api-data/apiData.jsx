import axios from "axios";
import { useEffect, useState } from "react";

function ApiData() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    console.log("data refreshed!");
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((data) => setData(data.data));
    console.log("data=>>", data);
  }, [refresh]);

  return (
    <div>
      <h1>API data</h1>
      <br />
      <br />
      <button onClick={() => setRefresh(!refresh)}>refresh data</button>
      {data.map((item, index) => {
        return (
          <div key={index} style={{ border: "1px solid grey", margin: "5px" }}>
            <h2>
              {item.id}: {item.title.toUpperCase()}
            </h2>
          </div>
        );
      })}
    </div>
  );
}
export default ApiData;
