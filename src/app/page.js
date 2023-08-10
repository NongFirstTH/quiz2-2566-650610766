"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";
import { useState } from "react";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner name = "Tanabodee Srikhampa" stuid = "650610766" textline = "Quiz ง่ายจังเลยครับ ขอแบบยากๆหน่อยครับง่ายเกิน #261207"/>

        {/* Reply Example */}
        {/* map-loop render Comment component here */}
      <div>{comments.map((com) => (
        <Comment
        username = {com.username}
        key = {com.username}
        userImagePath = {com.userImagePath}
        commentText ={com.commentText}
        likeNum = {com.likeNum}
        replies = {com.replies}
        />
        ))}</div>
      </div>
    </div>
  );
}
