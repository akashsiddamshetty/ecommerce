"use client";
import { useState, useEffect } from "react";
import Product from "@/types/productTypes";
import axiosInstance from "@/axios/axiosInstance";

const useProducts = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/products");
        setProducts(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { loading, products, error,setProducts };
};

export default useProducts;
