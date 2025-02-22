"use server";
import { z } from "zod";
import { prisma } from "./db";
import { formSchema } from "./schema";

export async function getdata() {
  try {
    const data = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      // take: 7,
    });

    const count = await prisma.post.count();
    return { success: true, data: data, count: count };
  } catch (error) {
    return { success: false, data: error };
  }
}

export async function storeData(data: z.infer<typeof formSchema>) {
  try {
    const input = await prisma.post.create({
      data: {
        nama: data?.nama,
        pesan: data?.pesan,
        kehadiran: data?.kehadiran,
      },
    });

    return { success: true, data: input };
  } catch (error) {
    return { success: false, data: error };
  }
}
