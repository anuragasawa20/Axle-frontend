import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import StarRating from "./ui/rating";
import { MoreVertical } from "lucide-react";

function CommentsGrid({username,comment,img,date,rating}:any) {
  return (
    <div className="p-2 m-2 border-b-2">
      <div className="flex justify-between items-center my-2">
        <div className="flex gap-2 items-start">
          <Avatar className="h-14 w-14">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <div className="text-lg font-semibold">
            <p>{username}</p>
            <StarRating rating={rating}/>
          </div>
          <div className="mx-10">{new Date(date).toISOString().split('T')[0]}</div>
        </div>
        <div><MoreVertical /></div>
      </div>
      <div>
        {comment}
      </div>
    </div>
  );
}

export default CommentsGrid;
