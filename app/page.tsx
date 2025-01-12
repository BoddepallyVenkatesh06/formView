import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className='text-3xl font-semibold  '>
        Create your History...!🏆
      </h1>

      <div>
        <Link href='/dashboard'>
          <button className='bg-green-500 hover:bg-green-600 p-7 text-5xl font-bold rounded-xl '>
            Dashboard
          </button>
        </Link>
      </div>


    </div>
  );
}
