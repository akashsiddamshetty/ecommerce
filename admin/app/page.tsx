/* eslint-disable @next/next/no-img-element */
"use client";

import axiosInstance from "@/axios/axiosInstance";
import ProductCard from "@/components/ProductCard";
import useProducts from "@/hooks/useProducts";
import Image from "next/image";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Home() {
  const { loading, products, error, setProducts } = useProducts();
  const [edit, setEdit] = useState(false);
  const saveOrder = async () => {
    try {
      const response = await axiosInstance.post("/reorder", {
        products: products.map((product, index) => ({
          ...product,
          productPosition: index,
        })),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnDragEnd = async (result: any) => {
    if (!result.destination) return;

    const items = Array.from(products);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setProducts(items);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="select-none h-screen overflow-hidden relative py-10 px-20">
      <div className="flex items-center justify-between w-full">
        <h1>Product List</h1>
        {edit ? (
          <button
            onClick={() => {
              setEdit(false);
              saveOrder();
            }}
            className="border-2 border-white rounded-lg px-4 py-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className="border-2 border-white rounded-lg px-4 py-2"
          >
            Reorder List
          </button>
        )}
      </div>
      <div className="h-[90%] my-10 overflow-scroll">
        {edit ? (
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="products">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                  {products.map(({ _id, title, thumbnail }, index) => {
                    return (
                      //@ts-expect-error
                      <Draggable key={_id} draggableId={_id} index={index}>
                        {(provided) => (
                          <li
                            className="flex items-center justify-start gap-4"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {/* <ProductCard title={title} /> */}
                            <img
                              src={thumbnail}
                              alt={title}
                              className="h-20 w-20 object-contain"
                            />

                            <span>{title}</span>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <div>
            <ul>
              {products.map(({ id, title, thumbnail }, index) => {
                return (
                  <li
                    className="flex items-center justify-start gap-4"
                    key={id}
                  >
                    <img
                      src={thumbnail}
                      alt={title}
                      className="h-20 w-20 object-contain"
                    />

                    <span>{title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
