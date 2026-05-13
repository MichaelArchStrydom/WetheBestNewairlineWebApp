import { connectDB } from "@/lib/mongodb";

export async function GET() {
    const mydb = await connectDB();
    const mycoll = mydb.collection("Schedules");
    const mydocs = await mycoll.find({}).toArray();
    return Response.json(mydocs);
}