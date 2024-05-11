import { addToCart } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import { FC } from "react";
import { AiFillStar, AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";

interface PropsType {
    id: string;
    img: string;
    title: string;
    price: number;
    category: string;
}
const ProductCard: FC<PropsType> = ({ id, img, title, price, category }) => {
    const dispatch = useAppDispatch();

    const addProductToCart = () => {
        const payload = {
            id: id,
            title: title,
            img: img,
            price: price,
            quantity: 1,
        };
        dispatch(addToCart(payload));
        makeToast("Product added to cart");
    };
    return (
        <div className="border border-gray-200">
            <div className="text-center border-b border-gray-200">
                <img src={img} alt="product" className="inline-clock" />
            </div>
            <div className="px-8 py-4">
                <p className="text-gray-500 text-[14px] font-medium">{category}</p>
                <h2 className="font-medium">{title}</h2>

                <div className="mt-3 flex text-[#ffb21d] items-center">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                    <p className="text-gray-600 text-[14px] ml-2">(3 Review)</p>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <h3 className="font-medium text-accent text-xl">${price}</h3>
                    <button
                        onClick={addProductToCart}
                        className="flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent"
                    >
                        <AiOutlineShoppingCart /> Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
