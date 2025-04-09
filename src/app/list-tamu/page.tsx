// import { columns, Payment } from "./columns";
// import { DataTable } from "./data-table";
import { ProfileForm } from "./form";
import Table from "./table";

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return data;
// }

export default async function Home() {
  // const data = await getData();
  return (
    <div className=''>
      <div className='grid justify-items-center min-h-screen bg-black'>
        <main className='max-w-3xl w-full bg-black relative font-sans text-white'>
          <Table />
          <ProfileForm />
        </main>
      </div>
    </div>
  );
}
