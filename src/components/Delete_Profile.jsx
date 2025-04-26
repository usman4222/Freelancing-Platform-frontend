import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input"
import React from "react";

function Delete_Profile() {
  return <div className="sm:p-14 p-6 bg-[#F0EFEC] h-full" >
    <h1 className="sm:text-3xl text-2xl font-bold">Delete Profile</h1>
    <div className="border p-6 mt-6 bg-white rounded-sm">
      <p className="text-sm text-gray-500">Are you sure! You want to delete your profile</p>
      <p className="pt-2 text-[14px]">This cannot be undone!</p>
      <p className="text-[14px] pt-6 font-medium">Please enter your login Password to confirm:</p>
      <Input placeholder="Password"  className="my-2 mt-2 py-5 sm:w-[500px]"/>
      <div>
      <Button className="bg-red-500 p-6 py-6 mt-4">Delete Profile <ArrowUpRight/></Button>
      </div>
    </div>
  </div>;
}

export default Delete_Profile;
