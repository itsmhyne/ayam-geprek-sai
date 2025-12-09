import heroBg from "@/public/img/hero.png";
import hero1 from "@/public/img/hero_1.png";
import Image from "next/image";
import food_1 from "@/public/img/food-1.png";
import food_2 from "@/public/img/food-2.png";
import food_3 from "@/public/img/food-3.png";
import category_1 from "@/public/img/category_1.png";
import category_2 from "@/public/img/category_2.png";
import category_3 from "@/public/img/category_3.png";
import category_4 from "@/public/img/category_4.png";
import visi_1 from "@/public/img/visi-1.png";
import visi_2 from "@/public/img/visi-2.png";
import sawi from "@/public/img/sawi.png";
import { CheckCircle, CheckLine, ChevronLeft } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-[371px] md:h-[90vh]">
        {/* Background image */}
        <Image
          src={heroBg}
          alt="Background Hero"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay (opsional) */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Konten */}
        <div className="relative z-10 grid grid-cols-1 items-center md:grid-cols-2 h-full justify-center px-10 lg:w-[1070px] lg:mx-auto">
          <div className="flex flex-col gap-2.5">
            <h3 className="heading3 title font-bold max-w-xl mt-10 md:mt-0 tracking-widest leading-10">
              Motto Kami
            </h3>
            <p className="text-white heading1 font-bold mt-1">
              <span className="text-chart-5">Ke</span>nikmatan dalam
              <br />
              Kesederhanaan.
            </p>
            <p className="bodysmall text-white font-thin mt-4 leading-2.5 md:leading-4 lg:leading-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              <br />
              Libero, ab quos. Quae eveniet rerum perspiciatis mollitia dolorem
              eius
            </p>

            {/* <button className="mt-6 bg-chart-5 text-white px-4 py-2 rounded-full buttontext w-fit hover:bg-chart-4">
              See Menu
            </button> */}
          </div>
          <Image src={hero1} alt={"image"} className="hidden lg:block" />
        </div>
      </section>
      <section className="content px-10 lg:w-[1070px] mx-auto flex flex-col items-center md:mt-[104px]">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="">
            <h1 className="title heading3 font-bold max-w-xl mt-10 md:mt-0 tracking-widest leading-10">
              Tentang Kami
            </h1>
            <p className="text-white heading1 font-bold mt-1">
              <span className="text-chart-5">Ka</span>mi Menciptakan Produk
              <br />
              Makanan Terbaik.
            </p>
            <p className="bodysmall text-white font-thin mt-4 leading-2.5 md:leading-4 lg:leading-6">
              Sa’i berarti ikhtiar. Kata Sa’i seakar dengan kata dasar Sa’a yang
              berarti usaha. Secara filosofi peristiwa menggambarkan seorang ibu
              yang gigih berusaha keras mencari air guna memberi minum anaknya
              dengan penuh keyakinan akan bantuan dari Alloh SWT.
            </p>
            <button className="mt-6 bg-chart-5 text-white px-4 py-2 rounded-full buttontext w-fit hover:bg-chart-4">
              Selengkapnya..
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-5 lg:mt-0">
            <div className="relative col-span-2 row-span-2 h-[200px] md:h-[200px]">
              <Image
                src={food_1}
                alt="Background Hero"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative h-[100px] md:h-[200px]">
              <Image
                src={food_2}
                alt="Background Hero"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="relative h-[100px] md:h-[200px]">
              <Image
                src={food_3}
                alt="Background Hero"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center md:mt-[104px]">
          <h1 className="title heading3 font-bold max-w-xl mt-10 md:mt-0 tracking-widest leading-10">
            Kategori Makanan
          </h1>
          <p className="text-white heading1 font-bold mt-1">
            <span className="text-chart-5">Pi</span>lih Kategori Produk
          </p>
          <Carousel className="mt-10">
            <CarouselPrevious />
            <CarouselContent className="gap-5">
              <Image src={category_1} alt="category" className="" />
              <Image src={category_2} alt="category" className="" />
              <Image src={category_3} alt="category" className="" />
              <Image src={category_4} alt="category" className="" />
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
        {/* Visi Misi */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <section className="relative hidden md:block w-full max-w-[535px] mx-auto py-10">
            {/* Container utama */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start justify-center gap-6">
              {/* GAMBAR KIRI */}
              <div className="relative">
                <Image
                  src={visi_1}
                  alt="Cutting food"
                  className="w-[424px] h-[523px]  rounded-xl object-cover"
                />
              </div>

              {/* GAMBAR KANAN (sedikit overlap) */}
              <div className="relative md:-ml-20 md:mt-16">
                <Image
                  src={visi_2}
                  alt="Salad"
                  className="w-[385px] h-[516px] rounded-xl object-cover"
                />
              </div>
            </div>
          </section>
          <div className="flex flex-col gap-2.5">
            <h3 className="heading3 title font-bold max-w-xl mt-10 md:mt-0 tracking-widest leading-10">
              Visi
            </h3>
            <p className="text-white heading1 font-bold mt-1">
              <span className="text-chart-5">PT.</span>Ukhuwah Berkah
              <br />
              Semesta.
            </p>
            <p className="bodysmall text-white font-thin mt-4 leading-2.5 md:leading-4 lg:leading-6">
              Menjadikan Usaha Berbasis Syari’at Islam dengan mengedepankan
              ukhuwah Islamiyah serta peduli permasalahan Dakwah, Sosial, dan
              Pendidikan.
            </p>
            <h3 className="heading3 title font-bold max-w-xl mt-10 md:mt-0 tracking-widest leading-10">
              Misi
            </h3>

            <ul className="mt-5 text-white bodysmall flex flex-col gap-2">
              <li className="flex gap-2">
                <CheckCircle size={15} className="shrink-0" /> Membentuk bisnis
                restoran yang halalan toyyiban dengan cita rasa yang bisa
                diterima semua umat dengan harga terjangkau
              </li>
              <li className="flex gap-2 ">
                <CheckCircle size={15} className="shrink-0" /> Wadah bersama
                (Jamaah) dalam pengumpulan Dana untuk membentuk suatu usaha yang
                dapat diharapkan menghasilkan keuntungan.
              </li>
              <li className="flex gap-2">
                <CheckCircle size={15} className="shrink-0" /> Sebagai sarana
                untuk mendapatkan Dana demi kegiatan Dakwah, Sosial, dan
                Pendidikan yang diprioritaskan untuk internal dengan
                mengalokasikan Dana Keuntungan maksimal 35%.
              </li>
              <li className="flex gap-2">
                <CheckCircle size={15} className="shrink-0" /> Menciptakan
                Lingkungan Kerja yang Islami untuk menuju arah sebagai Pesantren
                Kuliner.
              </li>
            </ul>
          </div>
        </div>
        {/* End Visi Misi */}
        {/* Kemitraan */}
        <div className="mt-10 flex flex-col items-center md:mt-[104px]">
          <h1 className="title heading3 font-bold max-w-xl mt-10 md:mt-0 tracking-widest leading-10">
            Partner & Client
          </h1>
          <p className="text-white heading1 font-bold mt-1 text-center">
            <span className="text-chart-5">Kita</span> bekerja dengan memberikan
            yang terbaik.
          </p>

          <ul className="mt-5 text-white bodysmall flex flex-col gap-2">
            <li className="flex gap-2">
              <CheckCircle size={15} className="shrink-0" />
              Berbasis Syariah
            </li>
            <li className="flex gap-2">
              <CheckCircle size={15} className="shrink-0" />
              Tidak diperkenankan ber-investasi menggunakan uang pinjaman bank
              dan sejenisnya.
            </li>
            <li className="flex gap-2">
              <CheckCircle size={15} className="shrink-0" />
              Bebas Franchise Fee dan Royality Fee,
            </li>
            <li className="flex gap-2">
              <CheckCircle size={15} className="shrink-0" />
              Dalam Sistem Kemitraan kami, diterapkan system bagi hasil Syariah,
              dimana pembagiannya ditentukan sesuai kesepakatan, seperti contoh
              30% untuk Manajemen dan 70% untuk Mitra
            </li>
            <li className="flex gap-2">
              <CheckCircle size={15} className="shrink-0" />
              Investasi Awal Kemitraan sebesar + 300 Juta-an diluar sewa lokasi
              (Bukan Harga Paket, tetapi sesuai Nota yang dikeluarkan).
            </li>
            <li className="flex gap-2">
              <CheckCircle size={15} className="shrink-0" />
              Luas Bangunan yang dibutuhkan + 100m2 dengan lebar bangunan yang
              di inginkan minimal 6m, dan ada area untuk parkir.
            </li>
            <li className="flex gap-2">
              <CheckCircle size={15} className="shrink-0" />
              Penentuan Lokasi disepakati kedua belah pihak
            </li>
            <li className="flex gap-2">
              <CheckCircle size={15} className="shrink-0" />
              Pelaksanaan Operational mengacu kepada SOP, Mitra dan Manajemen
              bisa menangani secara Bersama dengan aturan dan kebijakan
              Manajemen.
            </li>
            <li className="flex gap-2">
              <CheckCircle size={15} className="shrink-0" />
              Sangat Cocok untuk Bisnis Kemitraan sebagai Pasive-income
            </li>
          </ul>
        </div>
        {/* End Kemitraan */}
      </section>
    </>
  );
}
