import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <h1>Form App</h1>
        <Link href='/quiz'>
          <button>Start Test</button>
        </Link>
      </div>
    </main>
  );
}
