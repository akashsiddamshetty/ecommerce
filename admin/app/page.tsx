"use client";
import ProductCard from "@/components/ProductCard";
import useProducts from "@/hooks/useProducts";

export default function Home() {
  const { loading, products, error } = useProducts();
  if (loading) return <div>laoding</div>;
  if (error) {
    return <div>Somthing went wrong</div>;
  }
  if (products)
    return (
      <main className="flex items-center justify-center flex-wrap gap-4">
        {products.map((product, i) => {
          return <ProductCard key={i} product={product} />;
        })}
      </main>
    );
}
