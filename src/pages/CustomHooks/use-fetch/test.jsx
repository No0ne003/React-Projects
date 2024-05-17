import Loading from "@/components/ui/Loading";
import useFetch from "./useFetch";

const UseFetchHookTest = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {},
  );

  return (
    <div className="min-h-[200px]">
      <h1 className="text-2xl font-mono text-center mb-2">
        <span className="text-primary font-bold">useFetch</span> Hook
      </h1>
      {pending ? (
        <div className="absolute inset-0 m-auto flex justify-center items-center">
          <Loading />
        </div>
      ) : error ? (
        <h3 className="text-rose-500 text-lg text-center">{error}</h3>
      ) : data && data.products && data.products.length ? (
        data.products.map((productItem) => (
          <p key={productItem.key} className="text-center">
            {productItem.title}
          </p>
        ))
      ) : null}
    </div>
  );
};

export default UseFetchHookTest;
