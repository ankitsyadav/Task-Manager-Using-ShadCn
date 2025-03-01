import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";
import { Task } from "@/models/task";

connectDB();

// get all users
export async function GET(request) {
  let tasks = [];
  try {
    tasks = await Task.find();
    return NextResponse.json(tasks, {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "get tasks failed",
    });
  }
}
// create user
export async function POST(request) {
  const { title, desc, addedDate, status, userId } = await request.json();
  console.log(title, desc, addedDate, status, userId);

  const task = new Task({
    title,
    desc,
    addedDate,
    status,
    userId,
  });
  try {
    const createdTask = await task.save();
    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create task",
      status: false,
    });
  }
}
