"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  message: z
    .string()
    .min(2, {
      message: "Message must be at least 2 characters.",
    })
    .optional(),
  number: z.string().min(2, {
    message: "Number must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  // ...\
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
      number: "",
    },
  });

  function formatNomorIndonesia(phoneNumber: string) {
    // 1. Hapus semua karakter non-digit (termasuk spasi, -, titik, dll)
    const hanyaAngka = phoneNumber.replace(/\D/g, "");

    // 2. Ganti 0 di awal dengan 62
    return hanyaAngka.replace(/^0/, "62");
  }
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    window.open(
      `https://wa.me/${formatNomorIndonesia(
        values.number
      )}?text=${encodeURIComponent(`${values.message || "Halo!"}`)}
`,
      "_blank"
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid grid-cols-2 gap-4 w-full mb-20 border border-white rounded-md p-4'>
        <div className='col-span-2'>
          <h1 className='text-2xl font-bold'>Form Tamu</h1>
        </div>
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pesan</FormLabel>
              <FormControl>
                <Input placeholder='Pesan' {...field} className='text-black' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='number'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nomor Whatsapp</FormLabel>
              <FormControl>
                <Input
                  placeholder='Nomor WhatsApp'
                  {...field}
                  className='text-black'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='col-span-2 flex justify-end'>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </Form>
  );
}
