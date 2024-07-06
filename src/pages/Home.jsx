import React from "react";

import { useGetCollectionItems } from "../hooks/useGetCollectionItems";


import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

const Home = () => {
  const { items, loading } = useGetCollectionItems("products");

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "2em", margin: "1em 0" }}>Productos</h1>
      {loading ? (
        <LoaderComponent />
      ) : (
        <ItemListContainerComponent products={items} />
      )}
    </div>
  );
};

export default Home;
