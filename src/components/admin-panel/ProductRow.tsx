import { IProduct } from "@/app/admin/dashboard/page";
import { setLoading } from "@/redux/features/loadingSlice";
import { setProduct } from "@/redux/features/productSlice";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import axios from "axios";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

interface PropType {
    srNo: number;
    setOpenPopup: Dispatch<SetStateAction<boolean>>;
    setUpdateTable: Dispatch<SetStateAction<boolean>>;
    product: IProduct;
}
const ProductRow = ({ srNo, setOpenPopup, setUpdateTable, product }: PropType) => {
    const dispatch = useAppDispatch();

    const onEdit = () => {
        dispatch(setProduct(product));
        setOpenPopup(true);
    };

    const onDelete = () => {
        dispatch(setLoading(true));
        const payload = {
            fileKey: product.fileKey,
        };

        axios
            .delete("/api/uploadthing", { data: payload })
            .then((res) => {
                axios
                    .delete(`/api/delete_product/${product._id}`)
                    .then((res) => {
                        makeToast("Product Deleted Successfully");
                        setUpdateTable((prevState) => !prevState);
                    })
                    .catch((err) => console.log(err))
                    .finally(() => dispatch(setLoading(false)));
            })
            .catch((err) => console.log(err));
    };

    return (
        <tr>
            <td>{srNo}</td>
            <td>{product.name}</td>
            <td>$ {product.price}</td>
            <td className="py-2">
                <Image src={product.imgSrc} width={40} height={40} alt="image" />
            </td>

            <td>
                <div className="text-2xl flex items-center gap-2 text-gray-600">
                    <CiEdit className="cursor-pointer hover:text-black" onClick={onEdit}>
                        Edit
                    </CiEdit>
                    <RiDeleteBin5Line
                        className="text-[20px] cursor-pointer hover:text-red-600"
                        onClick={onDelete}
                    >
                        Delete
                    </RiDeleteBin5Line>
                </div>
            </td>
        </tr>
    );
};

export default ProductRow;
