import {PengaturanMataPelajaranGuru} from './PengaturanMataPelajaranGuru';
import {PengaturanKurikulum} from './PengaturanKurikulum';

export interface PengaturanGuru {
  uuid: string;
  uuidKurikulum: PengaturanKurikulum;
  uuidPegawai: string;
  uuidMataPelajaranGuru: PengaturanMataPelajaranGuru[];
}
