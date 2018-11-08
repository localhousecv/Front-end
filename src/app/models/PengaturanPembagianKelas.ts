import {PengaturanSiswaKelas} from './PengaturanSiswaKelas';

export interface PengaturanPembagianKelas {
  uuid: string;
  uuidKurikulum: string;
  uuidKelas: string;
  uuidPembagianKelasUntukPerwalian: string;
  uuidPembagianKelasUntukSiswa: PengaturanSiswaKelas[];
  deskripsiPembagianKelas: string;
}
