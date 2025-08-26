import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { toast } from "react-toastify";

const Products = () => {
  const [fetchedData, setfetchData] = useState([]);
  const [loading, setloading] = useState(false);
  const [filter, setfilter] = useState(null);
  const [search, setsearch] = useState(null);

  const fetchedDataFromServer = async () => {
    setloading(true);
    try {
      const res =
        filter || search
          ? await axios.get("https://fakestoreapi.com/products", {
              params: {
                category: filter,
                title_like: search,
              },
            })
          : await axios.get("https://fakestoreapi.com/products");

      setfetchData(res.data);
      setloading(false);
    } catch (error) {
      console.log(error);
      toast.error("Data not Found!", {
        position: "bottom-right",
      });
    }
  };

  useEffect(() => {
    fetchedDataFromServer();
  }, [filter, search]);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">🛍️ Our Products</h2>

      {/* Search & Filter Section */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            placeholder="🔎 Search products..."
            className="form-control"
            value={search || ""}
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>

        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            onChange={(e) => setfilter(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value={"men's clothing"}>👔 Men</option>
            <option value={"women's clothing"}>👗 Women</option>
            <option value={"jewelery"}>💍 Jewelry</option>
            <option value={"electronics"}>📱 Electronics</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row g-4">
        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2 text-muted">Fetching products...</p>
          </div>
        ) : (
          fetchedData.map((el) => (
            <div key={el.id} className="col-md-3 col-sm-6">
              <ProductCard {...el} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
