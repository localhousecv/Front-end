import {PenilaianPengetahuanKompetensi} from './PenilaianPengetahuanKompetensi';

export interface PenilaianPengetahuan {
  uuid: string;
  uuidKurikulum: string;
  pindahGuru: string;
  uuidSiswa: string;
  uuidMataPelajaran: string;
  uuidPenilaianPengetahuan: PenilaianPengetahuanKompetensi[];
}
