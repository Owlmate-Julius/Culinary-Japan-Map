import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Dish from "@/models/Dish";

export async function GET() {
    try {
        await dbConnect();
        const dishes = await Dish.find({});
        return NextResponse.json({ success: true, data: dishes }, { status: 200 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
