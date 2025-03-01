import React from "react";
import addtask from "@/assets/addtask.svg";
import Image from "next/image";

const AddTask = () => {
  return (
    <div className="grid grid-cols-12 justify-center">
      <div className=" col-span-6 col-start-4 justify-center">
        <div className="flex justify-center">
          <Image src={addtask} alt="img logo" width={300}></Image>
        </div>
        <div className="flex justify-center">
          <h1 className="text-3xl">Add Your Task Here</h1>
        </div>

        <form action="#!">
          <div className="mt-1.5">
            <label htmlFor="task_title" className="block text-xl font-medium">
              Title
            </label>
            <input
              type="text"
              id="task_title"
              className="w-full p-2.5 border-amber-950  border-2"
            />
          </div>
          <div className="mt-1.5">
            <label htmlFor="task_desc" className="block text-xl font-medium">
              Description
            </label>
            <input
              type="text"
              id="task_desc"
              className="w-full p-2.5 border-amber-950  border-2"
            />
          </div>
          <div className="flex space-x-5 items-center justify-center mt-4 pt-2 pb-2">
            <button className=" bg-green-600 hover:bg-emerald-200 rounded-e-sm">
              Add task
            </button>
            <button className="bg-red-500 hover:bg-emerald-200 rounded-e-sm">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
