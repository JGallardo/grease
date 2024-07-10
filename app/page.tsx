import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Grease</h1>
        <h2 className="text-2xl mt-4">Vehicle Design</h2>
        <div className="mt-8 w-full max-w-4xl">
          <Image src="/garage.png" alt="Vehicle" width={800} height={450} layout="responsive" />
        </div>
        <p className="mt-4 text-xl">Site under construction.</p>
      </div>
    </main>
  );
}
