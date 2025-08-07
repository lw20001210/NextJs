'use client';
import { useParams } from 'next/navigation';
import React from 'react';

export default function Detail() {
  const params = useParams();

  console.log('收到的参数:', params.detail); // 输出: 2

  return (
    <ol>
      <li>http://localhost:3000/list/test</li>
      <li>你的文件夹命名为 [detail]，所以参数就是 params.detail</li>
      <li>目录加上[]包起来我是动态路由</li>
      <li>当前路由参数: {params.detail}</li>
    </ol>
  );
}
