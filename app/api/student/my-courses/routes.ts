import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const user = await currentUser();
        if (!user) {
            return NextResponse.json({ message: "Unauthorized user" }, { status: 401 });
        }

        const email = user.emailAddresses[0]?.emailAddress;
        if (!email) {
            return NextResponse.json({ message: "Unauthorized user - No email found" }, { status: 401 });
        }

        const existingStudent = await prisma.student.findUnique({
            where: {
                email: email,
            },
            select: {
                id: true, 
            },
        });

        if (!existingStudent?.id) {
            return NextResponse.json({ message: "No existing user found for this email" }, { status: 404 });
        }

        const myCourses = await prisma.courses.findMany({
            where: {
                studentId: existingStudent.id,
            },
            include: { 
                educator: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
        });

        return NextResponse.json(myCourses, { status: 200 }); 

    } catch (error) {
        console.error("Error fetching courses:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    } finally {
        await prisma.$disconnect(); 
    }
}