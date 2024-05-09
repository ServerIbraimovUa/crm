"use client";
import { setLoading } from "@/redux/features/loadingSlice";
import { useAppDispatch } from "@/redux/hooks";
import { makeToast } from "@/utils/helper";
import { UploadButton } from "@/utils/uploadthing";
import axios from "axios";
import Image from "next/image";
import { FormEvent, useState } from "react";

interface IPayload {
    imgSrc: string | null;
    fileKey: string | null;
    name: string;
    price: string;
    category: string;
}
const ProductForm = () => {
    const [payload, setPayload] = useState<IPayload>({
        imgSrc: null,
        fileKey: null,
        name: "",
        price: "",
        category: "",
    });

    const dispatch = useAppDispatch();
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setLoading(true));
        axios
            .post("/api/add_product", payload)
            .then((res) => {
                makeToast("Product added successfully");
                setPayload({ imgSrc: null, fileKey: null, name: "", price: "", category: "" });
            })
            .catch((err) => console.log(err))
            .finally(() => dispatch(setLoading(false)));
    };
    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Image
                className="max-h-[300px] w-auto object-contain rounded-md"
                src={payload.imgSrc ? payload.imgSrc : "/placeholder.png"}
                alt="photo"
                width={800}
                height={500}
            />
            <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />

            <div>
                <label className="block ml-1">Product Name</label>
                <input
                    className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
                    type="text"
                    value={payload.name}
                    onChange={(e) => setPayload({ ...payload, name: e.target.value })}
                    required
                />
            </div>
            <div>
                <label className="block ml-1">Product Category</label>
                <input
                    className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
                    type="text"
                    value={payload.category}
                    onChange={(e) => setPayload({ ...payload, category: e.target.value })}
                    required
                />
            </div>
            <div>
                <label className="block ml-1">Product Price</label>
                <input
                    className="bg-gray-300 w-full px-4 py-2 border outline-pink rounded-md"
                    type="text"
                    value={payload.price}
                    onChange={(e) => setPayload({ ...payload, price: e.target.value })}
                    required
                />
            </div>
            <div className="flex justify-end">
                <button className="bg-pink text-white px-8 py-2 rounded-lg self-center">Add</button>
            </div>
        </form>
    );
};

export default ProductForm;
