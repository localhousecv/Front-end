import {PenilaianKeterampilanUmum} from './PenilaianKeterampilanUmum';

export interface PengaturanKeterampilan {
  uuid: string;
  uuidKurikulum: string;
  uuidGuru: string;
  uuidSiswa: string;
  uuidMataPelajaran: string;
  uuidPenilaianKeterampilan: PenilaianKeterampilanUmum[];
}
