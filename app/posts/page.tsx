import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách bài viết",
  description: "Những bài viết hay luôn được cập nhật",
};

export default function B1_B2() {
  const data = [
    {
      id: 1,
      title: "Nguyễn Dịu Linh",
      thumbnailURL: "",
      color: "#42b883",
    },
    {
      id: 2,
      title: "Nhã Hương",
      thumbnailURL: "",
      color: "#4ef037",
    },
    {
      id: 3,
      title: "Thảo Nguyên",
      thumbnailURL: "",
      color: "#f70776",
    },
    {
      id: 4,
      title: "Huyền Trang",
      thumbnailURL: "",
      color: "#66bfbf",
    },
    {
      id: 5,
      title: "Phương Anh",
      thumbnailURL: "",
      color: "#118a7e",
    },
    {
      id: 6,
      title: "Khánh Huyền",
      thumbnailURL: "",
      color: "#ffe700",
    },
  ];
  return (
    <>
      <h2>Danh sách bài viết</h2>
      <div className="container">
        {data.map((post: any) => (
          <div className="post-item" key={post.id}>
            <div className="size" style={{ background: post.color }}>
              150x150
            </div>
            <div className="line"></div>
            <div className="title">
              <b>{post.title}</b>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
