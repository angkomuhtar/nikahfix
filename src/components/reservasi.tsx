"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { useSearchParams } from "next/navigation";

const formSchema = z.object({
  nama: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  kehadiran: z.string().min(2, { message: "Kehadiran harus diisi." }),
  pesan: z.string().min(2, { message: "Pesan harus diisi." }),
});

const Reservasi = () => {
  const searchPage = useSearchParams();
  const tamu = searchPage.get("to");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: tamu ?? undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className='w-full h-screen flex flex-col py-10 px-4 overflow-auto'>
      <h3 className='text-white font-sans font-semibold text-xl mb-4'>
        Wish for the Couple
      </h3>
      <div className='w-full bg-zinc-900 p-4 rounded-lg font-sans'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='nama'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>Nama</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='kehadiran'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>
                    Konfirmasi Kehadiran
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <SelectTrigger className=''>
                        <SelectValue placeholder='Pilih kehadiran' />
                      </SelectTrigger>
                      <SelectContent className='font-sans w-full'>
                        <SelectItem value='hadir'>Hadir</SelectItem>
                        <SelectItem value='tidak'>Tidak Hadir</SelectItem>
                        <SelectItem value='ragu'>Masih Ragu</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='pesan'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>
                    Konfirmasi Kehadiran
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className='bg-red-500 w-full' type='submit'>
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Reservasi;
