import { NextResponse } from "next/server";
import { findAllDishes } from "@/services/dish-service"

export async function GET() {
    try {
        const dishes = await findAllDishes();
        return NextResponse.json({ success: true, data: dishes }, { status: 200 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
