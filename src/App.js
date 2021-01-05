import Map from "./Map";
import { useState, useEffect } from "react";
import load from "./icon/load.gif";
import Header from "./Header";
import leaf from "./icon/leaf.png";
function App() {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();
      setdata(events);
      setloading(false);
      console.log(events);
    };
    fetchData();
  }, []);
  return (
    <div>
      {!loading ? (
        <>
          <Header />
          <Map data={data} />
        </>
      ) : (
        <div className="loadContainer">
          <div className="load">
            <ul>
              <li>
                <img src={leaf} alt="logo" />
              </li>
              <li>
                <img src={load} alt="Loading" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
