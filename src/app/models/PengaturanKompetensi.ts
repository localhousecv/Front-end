import {PengaturanJenisPenilaianKompetensi} from './PengaturanJenisPenilaianKompetensi';

export interface PengaturanKompetensi{
  uuid: string;
  namaKompetensi: string;
  uuidKompetensi: PengaturanJenisPenilaianKompetensi[];
  deskripsiKompetensi: string;
}
