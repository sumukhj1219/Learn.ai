import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ message: "Unauthorized user" }, { status: 401 });
        }

        const email = user.emailAddresses[0]?.emailAddress;
        if (!email) {
            return NextResponse.json({ message: "Unauthorized user - No email found" }, { status: 401 });
        }

        const existingEducator = await prisma.educators.findUnique({
            where: {
                email: email,
            },
        });

        if(!existingEducator){
            return NextResponse.json({message:"No user with email"}, {status:405})
        }

        const courses = await prisma.educators.findUnique({
            where:{
                email:email
            },
            include:{
                courses:true
            }
        })

        return NextResponse.json({courses}, {status:200})
    } catch (error) {
        return NextResponse.json({ message: "Internal server error" }, { status: 500 })
    }
}