"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Detail() {
  const router = useRouter();
  console.log(router);

  return <div>目录加上[]包起来我是动态路由</div>;
}
