import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={28}
          priority
        />
      </main>
      <h1>哈哈哈</h1>
    </div>
  );
}
