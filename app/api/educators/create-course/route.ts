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

        if (!existingEducator?.id) {
            return NextResponse.json({ message: "No educator account found for this email. Only educators can create courses." }, { status: 404 });
        }

        const { course_name, description, duration } = await request.json();
        if (!course_name || !description || !duration) {
            return NextResponse.json({ message: "All fields (course_name, description, duration) are required" }, { status: 400 }); // Changed status to 400
        }

        const newCourse = await prisma.courses.create({
            data: {
                name: course_name,
                duration: duration,
                completion: description, 
                isCompleted: false, 
                educatorId: existingEducator.id,
                enrolled: 0, 
            },
        });

        return NextResponse.json({ message: "Course created successfully", course: newCourse }, { status: 201 }); // Changed status to 201 (Created) and returned the new course
    } catch (error) {
        console.error("Error creating course:", error); // Log the error for debugging
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}