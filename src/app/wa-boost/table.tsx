"use client";
import React, { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircleHeart } from "lucide-react";
import { data } from "./data";

const Tabel = () => {
  const [page, setPage] = useState(1);

  const tableData = data.slice((page - 1) * 20, page * 20);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>No</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className='text-right'>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.nama}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell className='text-right'>
                <Button asChild>
                  <Link
                    href={`https://wa.me/62${
                      item.phone
                    }?text=${encodeURIComponent(`
Bismillahirrahmanirrahim, Assalamualaikum Wr. Wb.

Yth. Bapak/Ibu/Saudara/i

*${item.nama}*

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara Pernikahan kami :

*Mesias & Shawir*

Berikut link undangan kami untuk info lengkap dari acara bisa kunjungi :
https://nikahfix-pink.vercel.app/?to=${encodeURI(item.nama)}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

Mohon maaf perihal undangan hanya dibagikan melalui pesan ini.

Terima kasih banyak atas perhatiannya.

Wassalamu'alaikum Wr. Wb

Kami yang berbahagia
*Mesias & Shawir*`)}`}
                    target='_blank'>
                    <MessageCircleHeart />
                    Kirim WA
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='flex items-center justify-end space-x-2 py-4'>
        <Button
          size='sm'
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}>
          Previous
        </Button>
        <Button
          size='sm'
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === Math.ceil(data.length / 20)}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Tabel;
