import {PenilaianPengetahuanJenisKompetensi} from './PenilaianPengetahuanJenisKompetensi';

export interface PenilaianPengetahuanKompetensi {
  uuid: string;
  uuidKomptensi: string;
  uuidPenilaianPengetahuanJenisKompetensi: PenilaianPengetahuanJenisKompetensi[];
}
