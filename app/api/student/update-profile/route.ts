import { currentUser } from "@clerk/nextjs/server";
import {  NextRequest, NextResponse } from "next/server";
import {prisma} from "@/lib/db"

export async function POST(request:NextRequest) {
    try {
        const user = await currentUser()
        if(!user){
            return NextResponse.json({message:"Unauthourized user"}, {status:401})
        }

        const email = user.emailAddresses[0].emailAddress
        if(!email){
            return NextResponse.json({message:"Unauthourized user"}, {status:405})
        }

        const body = await request.json()
        const {age, dob, intrest, goal, srn} = body
        if(!age || !dob || !intrest || !goal || !srn){
            return NextResponse.json({message:"All fields are required"}, {status:405})
        }
        
        await prisma.student.upsert({
            where:{
                email:email
            },
            create:{
                name:user.fullName,
                email:email,
                srn:srn,
                age:age,
                intrest:intrest,
                dob:dob,
                goal:goal
            },
            update:{
                srn:srn,
                age:age,
                intrest:intrest,
                dob:dob,
                goal:goal
            }
        })
        
        return NextResponse.json({status:200})
    } catch (error) {
        return NextResponse.json({message:"Internal server error"}, {status:500})
    }
}