import Table from "./table";

export default function Home() {
  return (
    <div className=''>
      <div className='grid items-center justify-items-center min-h-screen bg-black'>
        <main className='max-w-3xl w-full bg-black relative font-sans text-white'>
          <Table />
        </main>
      </div>
    </div>
  );
}
