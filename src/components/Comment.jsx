import { useState } from "react";
import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {

    
  return (
    <div className="d-flex gap-2 my-2">
          <img
            src={userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div>
            <div className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}>
            <span className="fw-semibold">{username}</span>
            <br />
            <span>{commentText}</span>
            <div className="d-flex align-items-center  gap-1">
              { likeNum > 0?<img src="/like.svg" width={20}></img>:""}
              { likeNum > 0?<span className="text-muted" >{likeNum} คน</span>: ""}
              </div>
            </div>
            <div>{replies.map((re) => (
          <Reply
          userImagePath = {re.userImagePath}
          key = {re.username}
          username = {re.username}
          replyText = {re.replyText}
          likeNum = {re.likeNum}
          />
        ))}</div>
        </div>
      </div>
  );
};
