"use client";
import React, { useState } from "react";
//import { Post } from "@prisma/client";
import { Button } from "@/components/ui/button";
//import { Poor_Story } from "next/font/google";
import { savePost } from "@/actions/savePost";
import { unSavePost } from "@/actions/unSavePost";

type saveButtonProps = {
 
  postId: string;
  userId: string;
  val: boolean;
};

const SaveButton: React.FC<saveButtonProps> = ({
  postId,
  userId,
  val,
}) => {
  const [isSaved, setIsSaved] = useState(val);
  const functionCall = isSaved ? unSavePost : savePost;

  return (
    <div className="flex flex-row gap-0">
      <p className="p-1 pt-3 min-w-[51px] font-semibold">{isSaved ? "Saved" : "Save"}</p>
      <Button
        type={"submit"}
        onClick={async () => {
          functionCall({ postId, userId });
          setIsSaved(!isSaved);
        }}
        className="border-0 m-1 hover:cursor-pointer"
      >
        {isSaved ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 19 19"
          >
            <path
              fill="#1E90FF"
              d="M6 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v13.131a1 1 0 0 1-1.555.832l-3.89-2.593a1 1 0 0 0-1.11 0l-3.89 2.593A1 1 0 0 1 6 18.131V5Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 19 19"
          >
            <path
              fill="#000"
              d="M6 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v13.131a1 1 0 0 1-1.555.832l-3.89-2.593a1 1 0 0 0-1.11 0l-3.89 2.593A1 1 0 0 1 6 18.131V5Z"
            />
          </svg>
        )}
      </Button>
    </div>
  );
};

export default SaveButton;
