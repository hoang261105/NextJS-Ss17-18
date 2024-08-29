"use client";
import { useState, Suspense, lazy } from "react";
import Loading from "../loading";
import Image from "next/image";

const MarkdownPreview = lazy(() =>
  delayForDemo(import("../MarkdownPreview.js"))
);

export default function MarkdownEditor() {
  const [showPreview, setShowPreview] = useState(false);
  const [markdown, setMarkdown] = useState("Hello, **world**!");
  return (
    <>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={showPreview}
          onChange={(e) => setShowPreview(e.target.checked)}
        />
        Show image
      </label>
      <hr />
      {showPreview && (
        <Suspense fallback={<Loading />}>
          <h2>Hình ảnh</h2>
          <MarkdownPreview markdown={markdown} />
          <Image
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySmX54NlQr2bnCH10ET59oFNTgFvMpoGh8A&s"
            }
            width={100}
            height={100}
            alt="t"
          />
        </Suspense>
      )}
    </>
  );
}

// Add a fixed delay so you can see the loading state
function delayForDemo(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
