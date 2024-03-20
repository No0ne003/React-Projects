import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
      console.log(result)
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading data ! Please wait man</div>;
  }

  return (
    <div
      className={`container flex flex-1 flex-col items-center justify-start gap-8 my-10 w-full`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products && products.length
          ? products.map((item, index) => (
            <div
              className="p-5 border-border border-2 flex flex-col items-center justify-center gap-3"
              key={index}
            >
              <img src={item.thumbnail} alt={item.title} />
              <p className="font-mono">{item.title}</p>
            </div>
          ))
          : null}
      </div>
      <div className="btn-container">
        <Button onClick={() => setCount(count + 1)} variant="secondary">
          Load More Products
        </Button>
      </div>
    </div>
  );
}

export default LoadMoreData;
