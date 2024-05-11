import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const TrendingProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get("/api/get_products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="container mt-32">
            <div className="sm:flex justify-between items-center">
                <h2 className="text-4xl font-medium">Trending Products</h2>

                <div className="text-gray-500 flex gap-4 text-xl mt-4 sm:mt-0">
                    <p className="text-black">New</p>
                    <p>Featured</p>
                    <p>Top Sellers</p>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6">
                {products.map(({ _id, imgSrc, category, title, price }) => (
                    <ProductCard
                        key={_id}
                        id={_id}
                        img={imgSrc}
                        category={category}
                        title={title}
                        price={price}
                    />
                ))}
            </div>
        </div>
    );
};

export default TrendingProducts;
