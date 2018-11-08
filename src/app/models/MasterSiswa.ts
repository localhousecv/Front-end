import {MasterTingkatan} from './MasterTingkatan';

export interface MasterSiswa {
  uuid: string;
  namaSiswa: string;
  nomorInduk: string;
  tempatLahir: string;
  tanggalLahir: string;
  jenisKelamin: string[];
  agama: string[];
  statusDiKeluarga: string;
  anakKe: number;
  nomorTelepon: string;
  asalSekolah: string;
  diterimaPadaTanggal: string;
  namaAyah: string;
  namaIbu: string;
  pekerjaanAyah: string;
  PekerjaanIbu: string;
  namaWali: string;
  nomorTeleponWali: string;
  pekerjaanWali: string;
  alamatSiswa: string;
  diterimaDikelas: MasterTingkatan;
}
