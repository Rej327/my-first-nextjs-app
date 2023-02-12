"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function FormPost() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  //create a submit post
  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch("/api/createPost", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const res = await data.json();
    if (!res.ok) console.log(res.message);
    //Show live post
    router.refresh();
  }

  return (
    <form onSubmit={submitPost}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
      />
      <button type="submit">Make a post</button>
    </form>
  );
}
