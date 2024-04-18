import React, { useState, useEffect } from "react";
import axios from "axios";

function Products() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://dummyjson.com/products?skip=5&limit=12",
    })
      .then((res) => {
        console.log(res.data.products);
        setData(res.data.products);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {loading && (
          <div className="col">
            <h>Loading...</h>
          </div>
        )}
        {data.map((product) => (
          <div key={product.id} product={product} className="col-md-4 mb-4">
            <div className="card" style={{ backgroundColor: "#cedcf2" }}>
              <img
                className="card-img-top img-fluid"
                src={product.thumbnail}
                alt=""
                style={{ maxHeight: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title" style={{ minHeight: "20px" }}>
                  {product.title}
                </h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Category: {product.category}</p>
                <p className="card-text">Brand: {product.brand}</p>
                <p className="card-text">Description: {product.description}</p>
                <p className="card-text">Rating: {product.rating}</p>
                <p className="card-text">Stock: {product.stock}</p>
                <p className="card-text">
                  Discount Percentage: {product.discountPercentage}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
