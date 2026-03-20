
import useFetch from "../hooks/useFetch";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";  

const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data, error, loading } = useFetch("https://dummyjson.com/products");
// extract products safely
  const products = data?.products || [];

//  useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const response = await fetch("https://dummyjson.com/products");
//       const data = await response.json();
//       setProducts(data.products);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   fetchProducts();
// }, []);


  // Slice products for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= Math.ceil(products.length / itemsPerPage)) {
      setCurrentPage(page);
    }
  };
    // handle loading & error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return products.length === 0 ? (
    <p>No products available</p>
  ) : (
    <div>
      <div className="product-container">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;
