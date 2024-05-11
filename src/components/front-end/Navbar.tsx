import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

interface PropsType {
    setShowCart: Dispatch<SetStateAction<boolean>>;
}
const Navbar = ({ setShowCart }: PropsType) => {
    const cartCount = useAppSelector((state) => state.cartReducer.length);
    return (
        <header className="pt-4 bg-white top-0">
            <div className="container">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl md:text-4xl font-bold">
                        SProduct
                    </Link>
                    <div className="lg:flex hidden w-full max-w-[500px]">
                        <input
                            className="border-2 border-accent px-6 py-2 w-full"
                            type="text"
                            placeholder="Search for products..."
                        />

                        <button className="bg-accent text-white text-[26px] grid place-items-center px-4">
                            <BsSearch />
                        </button>
                    </div>

                    <div className="flex gap-4 md:gap-8 items-center">
                        <div className="flex gap-3 text-[14px] md:text-[16px]">
                            <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[23px] w-[50px] h-[50px] grid place-items-center">
                                <AiOutlineUser />
                            </div>
                            <div>
                                <button className="text-gray-500">Hello, Sign In</button>
                                <p className="font-medium">Your Account</p>
                            </div>
                        </div>

                        <div
                            className="text-gray-500 text-[32px] relative cursor-pointer"
                            onClick={() => setShowCart(true)}
                        >
                            <AiOutlineShoppingCart />

                            <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center">
                                {cartCount}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-200 pt-4" />
            </div>
        </header>
    );
};

export default Navbar;
