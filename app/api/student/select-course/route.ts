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

    const existingStudent = await prisma.student.findUnique({
      where: {
        email: email,
      },
    });

    if (!existingStudent) {
      return NextResponse.json({ message: "No existing user found for this email" }, { status: 404 });
    }

    const { courseId } = await request.json();
    if (!courseId) {
      return NextResponse.json({ message: "Missing courseId in request body" }, { status: 400 }); 
    }

    const existingCourse = await prisma.courses.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!existingCourse) {
      return NextResponse.json({ message: "Course with provided courseId not found" }, { status: 404 });
    }

    const updatedCourse = await prisma.courses.update({
      where: {
        id: courseId,
      },
      data: {
        studentId: existingStudent.id,
        enrolled: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({ message: "Successfully enrolled student in the course", updatedCourse }, { status: 200 }); 
  } catch (error) {
    console.error("Error enrolling student in course:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

