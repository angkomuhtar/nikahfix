"use client";
import React from "react";

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

const data = [
  {
    no: "1",
    nama: "Ir. Oman Abdurahman, M.T.",
    phone: "81320691773",
  },
  {
    no: "2",
    nama: "Dr. Adang Saputra, S.Si.Komp., M.Si.",
    phone: "82138315536",
  },
  {
    no: "3",
    nama: "Ir. Sabtanto Joko Suprapto, M.T.",
    phone: "81320405698",
  },
  {
    no: "4",
    nama: "Ir. Suparno, M.Si.",
    phone: "8156651796",
  },
  {
    no: "5",
    nama: "Dr. Ir. Priatna, M.T.",
    phone: "8122008811",
  },
  {
    no: "6",
    nama: "Dr. Asep Rohman, S.T., M.T.",
    phone: "81222254241",
  },
  {
    no: "7",
    nama: "Dr.mont. Imelda Eva Roturena Hutabarat, S.T., M.T.",
    phone: "87870945360",
  },
  {
    no: "8",
    nama: "Yudi Rahayudin, S.T., M.T., Ph.D.",
    phone: "8122226063",
  },
  {
    no: "9",
    nama: "Junianita Puspitasari, S.Kom.",
    phone: "8112030206",
  },
  {
    no: "10",
    nama: "Abdi Rasul, S.Sos., M.Si.",
    phone: "85267591917",
  },
  {
    no: "11",
    nama: "Dr. Denny Lumban Raja, S.Kom., M.T.",
    phone: "87821104480",
  },
  {
    no: "12",
    nama: "Dadan Wildan, S.T., M.Si.",
    phone: "82122217573",
  },
  {
    no: "13",
    nama: "Sumanto, S.E.",
    phone: "85225525120",
  },
  {
    no: "14",
    nama: "Dr. forest. Tedi Yunanto, S.Hut., M.Si.",
    phone: "81316444786",
  },
  {
    no: "15",
    nama: "Fiati Nurmaya, M.T.",
    phone: "8112229837",
  },
  {
    no: "16",
    nama: "Dr. Asep Mohamad Ishaq Shiddiq, S.T., M.T.",
    phone: "81390342767",
  },
  {
    no: "17",
    nama: "Zulfikar Aji Kusworo, S.T.",
    phone: "85643705658",
  },
  {
    no: "18",
    nama: "Rochsyid Anggara, S.T., M.T.",
    phone: "85643145366",
  },
  {
    no: "19",
    nama: "Muhammad Ridwan Solehudin, S.E.",
    phone: "81322841615",
  },
  {
    no: "20",
    nama: "Dian Eka Aryanti, S.T., M.T.",
    phone: "8111253408",
  },
  {
    no: "21",
    nama: "Sutrisna, S.Kom.",
    phone: "81320008667",
  },
  {
    no: "22",
    nama: "Suwisno",
    phone: "82128000754",
  },
  {
    no: "23",
    nama: "Dadang Zaelani",
    phone: "81222805482",
  },
  {
    no: "24",
    nama: "Sulistyono, S.T., M.Si.",
    phone: "85213128883",
  },
  {
    no: "25",
    nama: "Fahny Ardian, S.T., M.T.",
    phone: "88227640461",
  },
  {
    no: "26",
    nama: "Rudiyansah, S.T., M.T.",
    phone: "81283834605",
  },
  {
    no: "27",
    nama: "Fauziah Maulina Yusuf, S.Pd.",
    phone: "81546823765",
  },
  {
    no: "28",
    nama: "Harmoni Sofa, S.Pd.",
    phone: "85722249060",
  },
  {
    no: "29",
    nama: "Lingga Bayu Anshori, S.Pd.",
    phone: "81575173348",
  },
  {
    no: "30",
    nama: "Eka Atika, S.Pd.",
    phone: "82217742421",
  },
  {
    no: "31",
    nama: "Icha Viozlia Ananda, S.Pd.",
    phone: "89648201209",
  },
  {
    no: "32",
    nama: "Neneng Badriah, S.E.",
    phone: "8157143324",
  },
  {
    no: "33",
    nama: "Eneng Siti Purmala, S.H.",
    phone: "82129952766",
  },
  {
    no: "34",
    nama: "Fauziyah Hani, S.T.",
    phone: "81394952176",
  },
  {
    no: "35",
    nama: "Andini, S.T.",
    phone: "83811917604",
  },
  {
    no: "36",
    nama: "Hendra Winata, S.T.",
    phone: "81367798787",
  },
  {
    no: "37",
    nama: "Dea Pratami, S.Pd.",
    phone: "81223269786",
  },
  {
    no: "38",
    nama: "Iqbal Pradikta Putra, S.E.",
    phone: "82118998963",
  },
  {
    no: "39",
    nama: "Febriyanto Pratama, S.Kom.",
    phone: "87822956559",
  },
  {
    no: "40",
    nama: "Hendra Hermawan",
    phone: "895412115629",
  },
  {
    no: "41",
    nama: "Deni Saputra",
    phone: "88218096477",
  },
  {
    no: "42",
    nama: "Ilfa Lismayani",
    phone: "82295033390",
  },
  {
    no: "43",
    nama: "Tubagus Rohman Arifin",
    phone: "81394130184",
  },
  {
    no: "44",
    nama: "Rukmaya Sulaeman",
    phone: "88218276125",
  },
  {
    no: "45",
    nama: "Suratman",
    phone: "88222130963",
  },
  {
    no: "46",
    nama: "Suhikmat",
    phone: "85316746677",
  },
  {
    no: "47",
    nama: "Cecep",
    phone: "82118648909",
  },
  {
    no: "48",
    nama: "Dana",
    phone: "817168284",
  },
  {
    no: "49",
    nama: "Reno Wiguna",
    phone: "81322236082",
  },
  {
    no: "50",
    nama: "Dani",
    phone: "85220230417",
  },
  {
    no: "51",
    nama: "Diki",
    phone: "83195060061",
  },
  {
    no: "52",
    nama: "Dony",
    phone: "82262293178",
  },
  {
    no: "53",
    nama: "Apriyanti",
    phone: "83820608078",
  },
  {
    no: "54",
    nama: "Ayu Ratna",
    phone: "82122195330",
  },
  {
    no: "55",
    nama: "Maryam",
    phone: "87821475333",
  },
  {
    no: "56",
    nama: "Sitoresmi",
    phone: "85722273939",
  },
  {
    no: "57",
    nama: "Anissa",
    phone: "895422512045",
  },
  {
    no: "58",
    nama: "Adi",
    phone: "85963164579",
  },
  {
    no: "59",
    nama: "Surya Prima Sudibyo, M.T.",
    phone: "81313305733",
  },
  {
    no: "60",
    nama: "Wahyu Dwi Nurcahyo, M.T.",
    phone: "81214588419",
  },
  {
    no: "61",
    nama: "Azarine Atha Pandani, M.T.",
    phone: "82141476525",
  },
  {
    no: "62",
    nama: "Rahadian Nopriantoko, M.Si.",
    phone: "81312000913",
  },
  {
    no: "63",
    nama: "Wahid Sugiman, M.T",
    phone: "8122111032",
  },
  {
    no: "64",
    nama: "Kartini Asri Malik, S.T.",
    phone: "85299168007",
  },
  {
    no: "65",
    nama: "Abdullah, S.T.",
    phone: "85349298617",
  },
  {
    no: "66",
    nama: "Rofillah Gustiani, S.T.",
    phone: "85249645596",
  },
  {
    no: "67",
    nama: "Yudi Haryanto, S.T.",
    phone: "81350256988",
  },
  {
    no: "68",
    nama: "Walriyanto, S.T.",
    phone: "8115807137",
  },
  {
    no: "69",
    nama: "Wahyu Setiawan, S.T., M.T.",
    phone: "8125366187",
  },
  {
    no: "70",
    nama: "Ibnu Gamal Purnawilaga, S.T., M.Si.",
    phone: "811544185",
  },
  {
    no: "71",
    nama: "Ahmad Wildy Haifan. ST., M.Si",
    phone: "8115556890",
  },
  {
    no: "72",
    nama: "Sonny Widyagara Nadar, S.T., MAP, M,Sc",
    phone: "81230908987",
  },
  {
    no: "73",
    nama: "Rini Diana Setyawati, ST",
    phone: "81214571609",
  },
  {
    no: "74",
    nama: "Yulis Firianto, S.T.",
    phone: "82150517603",
  },
  {
    no: "75",
    nama: "Yitno Wahudi, S.T.",
    phone: "8115933035",
  },
  {
    no: "76",
    nama: "Melizani Muftiasari, S.T.",
    phone: "85157577317",
  },
  {
    no: "77",
    nama: "Aghrid Salsabiela, S.T.",
    phone: "81395851600",
  },
  {
    no: "78",
    nama: "Afrina Wulan Munir, S.T.",
    phone: "85274607373",
  },
  {
    no: "79",
    nama: "Melani Nur Indri, S.Si.",
    phone: "85729616329",
  },
  {
    no: "80",
    nama: "Andhika",
    phone: "82232978522",
  },
  {
    no: "81",
    nama: "Elis",
    phone: "82287000166",
  },
  {
    no: "82",
    nama: "Sari Sulistyowati",
    phone: "81251316574",
  },
  {
    no: "83",
    nama: "Herdian",
    phone: "81346593636",
  },
  {
    no: "84",
    nama: "Andi Yuliastanto",
    phone: "81567985240",
  },
  {
    no: "85",
    nama: "Asib Hidayat",
    phone: "81321182701",
  },
  {
    no: "86",
    nama: "Cipta",
    phone: "85789968242",
  },
  {
    no: "87",
    nama: "Suherman",
    phone: "85811547174",
  },
  {
    no: "88",
    nama: "Achmad Djumarma",
    phone: "811245765",
  },
  {
    no: "89",
    nama: "Nandian Mareta",
    phone: "82321907596",
  },
  {
    no: "90",
    nama: "Agung",
    phone: "82121555771",
  },
  {
    no: "91",
    nama: "Agung Tri Subekti",
    phone: "82338671773",
  },
  {
    no: "92",
    nama: "Lang lang Buana",
    phone: "8195490191",
  },
  {
    no: "93",
    nama: "Bagus",
    phone: "81325125777",
  },
  {
    no: "94",
    nama: "Akbar",
    phone: "81347323721",
  },
  {
    no: "95",
    nama: "Andi Waylani",
    phone: "82372584643",
  },
  {
    no: "96",
    nama: "Floren",
    phone: "81254358035",
  },
  {
    no: "97",
    nama: "Rasa Sundana",
    phone: "8124036136",
  },
  {
    no: "98",
    nama: "Yani",
    phone: "85722641821",
  },
  {
    no: "99",
    nama: "Handri",
    phone: "85249207105",
  },
  {
    no: "100",
    nama: "Tari",
    phone: "81253332921",
  },
  {
    no: "101",
    nama: "Achmad Ismail",
    phone: "82156680432",
  },
  {
    no: "102",
    nama: "Asrul",
    phone: "81283453246",
  },
  {
    no: "103",
    nama: "Andi",
    phone: "85750074987",
  },
  {
    no: "104",
    nama: "Dennis",
    phone: "82282464225",
  },
  {
    no: "105",
    nama: "Maya",
    phone: "82138694190",
  },
  {
    no: "106",
    nama: "Defri",
    phone: "87823011134",
  },
  {
    no: "107",
    nama: "Eko Nur",
    phone: "85722466123",
  },
  {
    no: "108",
    nama: "Fakhrizal Haska",
    phone: "85222221813",
  },
  {
    no: "109",
    nama: "Sundek",
    phone: "81347788737",
  },
  {
    no: "110",
    nama: "Grahita",
    phone: "8122788447",
  },
  {
    no: "111",
    nama: "Dian",
    phone: "81224626864",
  },
  {
    no: "112",
    nama: "Noenoek",
    phone: "81321863885",
  },
  {
    no: "113",
    nama: "Rika",
    phone: "8112350666",
  },
  {
    no: "114",
    nama: "Lucia",
    phone: "82142911256",
  },
  {
    no: "115",
    nama: "Firdolin",
    phone: "81370705282",
  },
  {
    no: "116",
    nama: "Tommy Trides",
    phone: "81347394807",
  },
  {
    no: "117",
    nama: "Pepen",
    phone: "8112346975",
  },
  {
    no: "118",
    nama: "Adieb",
    phone: "81394284304",
  },
  {
    no: "119",
    nama: "Benny Bensaman",
    phone: "811229886",
  },
  {
    no: "120",
    nama: "Mery Susiana",
    phone: "85386349811",
  },
  {
    no: "121",
    nama: "Afni datul Ihsan",
    phone: "81268841782",
  },
  {
    no: "122",
    nama: "Angga Dwi Poetra",
    phone: "82322255566",
  },
  {
    no: "123",
    nama: "Erick Christian Uyan",
    phone: "82251284111",
  },
  {
    no: "124",
    nama: "Sahrul Rahman",
    phone: "87713937312",
  },
  {
    no: "125",
    nama: "Andika Prasetya",
    phone: "82252544756",
  },
  {
    no: "126",
    nama: "Chaidir Bakri",
    phone: "85254736908",
  },
  {
    no: "127",
    nama: "MUTIARA ISLAMI",
    phone: "81256564876",
  },
  {
    no: "128",
    nama: "RYAN FARDELLY",
    phone: "85245194370",
  },
  {
    no: "129",
    nama: "FIRMAN SUGIARTO",
    phone: "82217969754",
  },
  {
    no: "130",
    nama: "SUSANTO",
    phone: "81336699273",
  },
  {
    no: "131",
    nama: "PRIYONO",
    phone: "",
  },
  {
    no: "132",
    nama: "BRYAN ADE TAWANG",
    phone: "81250398070",
  },
  {
    no: "133",
    nama: "YOSUA YEHEZKIEL",
    phone: "85947237368",
  },
  {
    no: "134",
    nama: "AGUSTINUS SANTOSO",
    phone: "8970830000",
  },
  {
    no: "135",
    nama: "ALPRITA LANGI M",
    phone: "81256619519",
  },
  {
    no: "136",
    nama: "JANE BANDASO’",
    phone: "87715780319",
  },
  {
    no: "137",
    nama: "ARLIN NOVYENLY FOERTHIONO",
    phone: "8971278986",
  },
  {
    no: "138",
    nama: "LEVINA AGUSTINA SUSILO",
    phone: "8115845177",
  },
  {
    no: "139",
    nama: "ONG YET PHING",
    phone: "81251272728",
  },
  {
    no: "140",
    nama: "FRANSISKA WENDY WIJAYA",
    phone: "82227522228",
  },
  {
    no: "141",
    nama: "RIFKA SEPTIANI ASTAN",
    phone: "82245957284",
  },
  {
    no: "142",
    nama: "ADI GUNAWAN",
    phone: "811555401",
  },
  {
    no: "143",
    nama: "CYNTHIA CLARA MONA WIJAYA",
    phone: "81351765332",
  },
  {
    no: "144",
    nama: "Sutrisno Henru",
    phone: "81350656303",
  },
  {
    no: "145",
    nama: "Maria Marselina",
    phone: "82310898886",
  },
  {
    no: "146",
    nama: "Yosepina Dom",
    phone: "81256094444",
  },
  {
    no: "147",
    nama: "Sisi",
    phone: "82153170800",
  },
  {
    no: "148",
    nama: "wanda mellinia",
    phone: "81911820013",
  },
  {
    no: "149",
    nama: "Muh. Natsir",
    phone: "82255338590",
  },
  {
    no: "150",
    nama: "Rahel Simarmata",
    phone: "81313627659",
  },
  {
    no: "151",
    nama: "Dewi Anjani",
    phone: "82259715219",
  },
  {
    no: "152",
    nama: "Renita Anggun Winanti",
    phone: "81545817408",
  },
  {
    no: "153",
    nama: "Chika Pamula Matofani",
    phone: "81350353718",
  },
  {
    no: "154",
    nama: "irma rosiana",
    phone: "81226009922",
  },
  {
    no: "155",
    nama: "dwi novitasari",
    phone: "85250199155",
  },
  {
    no: "156",
    nama: "Angga",
    phone: "82149236558",
  },
  {
    no: `157`,
    nama: "Infantri Putra",
    phone: "811151986",
  },
  {
    no: `158`,
    nama: "Muhammad Ukhe Agung",
    phone: "85256670852",
  },
  {
    no: `159`,
    nama: "Ashabul Kahfi",
    phone: "85396691206",
  },
  {
    no: `160`,
    nama: "Ambo Lotong",
    phone: "82142898138",
  },
  {
    no: `161`,
    nama: "Ardin Yahya",
    phone: "82347241795",
  },
];

const Tabel = () => {
  return (
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
        {data.map((item) => (
          <TableRow key={item.no}>
            <TableCell>{item.no}</TableCell>
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
  );
};

export default Tabel;
