import {PenilaianSikapUmum} from './PenilaianSikapUmum';

export interface PenilaianSIkap {
  uuid: string;
  uuidKurikulum: string;
  uuidGuru: string;
  uuidSiswa: string;
  uuidMataPelajaran: string;
  uuidPenilaianSikap : PenilaianSikapUmum[];
}
