import {PenilaianPengetahuanKompetensi} from './PenilaianPengetahuanKompetensi';
import {PengaturanPredikatMataPelajaran} from './PengaturanPredikatMataPelajaran';

export interface PengaturanMataPelajaran{
  uuid: string;
  uuidKurikulum: string;
  uuidMataPelajaran: string;
  kkm: number;
  uuidPengaturanMataPelajaranUntukKompetensi: PenilaianPengetahuanKompetensi[];
  uuidPengaturanMataPelajaranUntukKeterampilan: string;
  uuidPengaturanMataPelajaranUntukPredikat: PengaturanPredikatMataPelajaran[];
  uuidPengaturanMataPelajaranUntukSikap: string;
}
