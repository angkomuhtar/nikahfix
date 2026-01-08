import { ProfileForm } from "./form";

export default async function Home() {
  // const data = await getData();
  return (
    <div className=''>
      <div className='grid justify-items-center min-h-screen bg-black'>
        <main className='max-w-3xl w-full bg-black relative font-sans text-white'>
          <ProfileForm />
        </main>
      </div>
    </div>
  );
}
