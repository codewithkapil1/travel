import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import {NextRequest,NextResponse} from "next/server"



connect()

export async function POST(request){
    try {
        const reqBody = await request.json()
        const {email,password} = reqBody
        console.log(reqBody)

        // check if user exits
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error: "User does not exist"},{status: 400})

        }
        console.log("user exists")
    } catch (error) {
        return NextResponse.json({error: error.message},{status:500})
    }
}