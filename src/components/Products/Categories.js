import React, { useState, useEffect } from "react";
import axios from "axios";

function Categories() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://dummyjson.com/products/categories",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        // console.log(data.length);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {loading && (
            <div className="col">
              <h1>Loading...</h1>
            </div>
          )}
          {!loading &&
            data.map((category, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="card" style={{ backgroundColor: "#cedcf2" }}>
                  <div className="card-body">
                    <h5 className="card-title">{category}</h5>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
