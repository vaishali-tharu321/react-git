import React, { useEffect, useState } from "react";

export function FetchData() {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        async function ProductInfo() {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();

            console.log(data);

            // Products array ko state me store karo
            setProductsData(data.products);
        }

        ProductInfo();
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gray-100 px-4 py-10">

                {/* Heading */}
                <div className="mx-auto mb-10 max-w-7xl text-center">
                    <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
                        Our Products
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Explore our latest collection
                    </p>
                </div>

                {/* Products Grid */}
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                    {productsData.map((product) => (
                        <div
                            key={product.id}
                            className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >

                            {/* Image */}
                            <div className="flex h-64 items-center justify-center bg-gray-50 p-6">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-5">

                                {/* Category */}
                                <p className="mb-2 text-sm font-medium capitalize text-blue-600">
                                    {product.category}
                                </p>

                                {/* Title */}
                                <h2 className="mb-3 line-clamp-2 text-lg font-semibold text-gray-800">
                                    {product.title}
                                </h2>

                                {/* Price + Add Cart */}
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-gray-900">
                                        ${product.price}
                                    </span>

                                    <button
                                        className="rounded-lg bg-blue-600 px-4 py-2 font-normal text-white transition hover:bg-blue-700"
                                        onClick={() =>
                                            console.log("Added:", product)
                                        }
                                    >
                                        Add to Cart
                                    </button>
                                </div>

                                {/* Buy Now */}
                                <div className="mt-4">
                                    <button
                                        className="w-full rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700"
                                        onClick={() =>
                                            console.log("Buy Now:", product)
                                        }
                                    >
                                        Buy Now
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}