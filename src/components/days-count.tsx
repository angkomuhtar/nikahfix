import React from "react";

const DayCount = ({ count, type }: { count?: string; type: string }) => {
  return (
    <div className='flex flex-col items-center justify-center py-3 px-2 border border-white/70 space-y-1 w-12 aspect-auto'>
      <h3 className='text-white text-lg font-sans font-extrabold'>
        {count ?? "0"}
      </h3>
      <p className='font-light font-sans text-white/70 text-[10px]'>{type}</p>
    </div>
  );
};

export default DayCount;
