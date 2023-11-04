import { useEffect, useState } from "react";
import { getData } from "./api";

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getData().then((result) => {
      setdata(result);
    });
  }, []);

  console.log(data);

  const DataManusia = () => {
    return data.map((data, i) => {
      return (
        <div key={i}>
          <div>{data.judul}</div>
          <img src = {data.image}></img>
          <div>{data.image}</div>
          <div>{data.description}</div>

        </div>
      );
    });
  };

  return (
    <>
      <DataManusia />
    </>
  );
}

export default App;
