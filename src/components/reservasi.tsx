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
import { formSchema } from "@/lib/schema";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getdata, storeData } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { toast } from "sonner";
import moment from "moment";

const Reservasi = () => {
  const to = useSearchParams().get("to");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: to ?? undefined,
    },
  });

  const {
    data: pesan,
  }: {
    data?: {
      data: { id: string; nama: string; pesan: string; createdAt: string }[];
      count: number;
    };
  } = useQuery({
    queryKey: ["pesan"],
    queryFn: getdata,
  });

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: storeData,
    onSuccess: (res) => {
      // console.log(res);
      if (res?.success) {
        queryClient.invalidateQueries({ queryKey: ["pesan"] });
        form.reset();
        toast("Pesan berhasil dikirim");
      } else {
        toast("Pesan Gagal dikirim");
      }
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }
  return (
    <div className='w-full flex flex-col py-28 px-4 overflow-auto'>
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
                    Komentar atau Ucapan
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder='Komentar atau Ucapan' />
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
      <div className='mt-4 px-6'>
        {(pesan?.count ?? 0) > 0 ? (
          pesan?.data?.map((item) => (
            <div className='flex items-center space-x-4' key={item.id}>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>NF</AvatarFallback>
              </Avatar>
              <div className=''>
                <h3 className='font-sans text-sm font-semibol text-white'>
                  {item?.nama}
                </h3>
                <p className='font-light text-xs text-white font-sans mt-2'>
                  {item?.pesan}
                </p>
                <p className='text-white text-[10px] font-sans italic font-extralight mt-2'>
                  {moment(item?.createdAt).fromNow()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className='font-light text-xs text-white font-sans text-center my-10'>
            Beluam ada data
          </p>
        )}
      </div>
    </div>
  );
};

export default Reservasi;
