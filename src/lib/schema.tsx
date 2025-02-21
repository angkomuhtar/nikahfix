import { z } from "zod";

export const formSchema = z.object({
  nama: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  kehadiran: z.string().min(2, { message: "Kehadiran harus diisi." }),
  pesan: z.string().min(2, { message: "Pesan harus diisi." }),
});
