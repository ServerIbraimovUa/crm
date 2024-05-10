import { connectMongoDb } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, URLParams: any) {
    try {
        const id = URLParams.params.id;
        await connectMongoDb();
        const data = await Product.findByIdAndDelete(id);

        return NextResponse.json({ msg: "Deleted successfully!" });
    } catch (error) {
        return NextResponse.json(
            {
                error,
                msg: "Something went wrong!",
            },
            { status: 400 }
        );
    }
}
