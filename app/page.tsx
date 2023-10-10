import Link from 'next/link';

const Home = () => (
  <main>
    <h1 className="text-3xl underline font-bold bg-amber-400">Hello world</h1>
    <Link href="/home">Home</Link>
  </main>
);
export default Home;
