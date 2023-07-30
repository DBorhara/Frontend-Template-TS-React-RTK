import React from "react";
import { useSelector } from "react-redux";

export default function UserHome() {
  const user = useSelector((state: any) => state.user.data);

  return (
    <div className="w-full flex flex-col items-center bg-white  rounded px-8 pt-6 pb-8 mb-4">
      <div className=" pb-5 text-3xl text-stone-500">User Home</div>
      <div className="flex flex-col">
        <div className="flex flex-row text-lg">
          <div className="pr-2">User:</div>
          <div>{user?.email}</div>
        </div>
        <div className="flex flex-row text-lg">
          <div className="pr-2">Admin:</div>{" "}
          <div>{user?.isAdmin ? "true" : "false"}</div>
        </div>
      </div>
    </div>
  );
}
