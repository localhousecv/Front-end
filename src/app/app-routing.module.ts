import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {KontenDataSekolahComponent} from './component/data-sekolah/konten-data-sekolah.component';
import {KelasMasterComponent} from './component/master/kelas-master/kelas-master.component';
import {PegawaiMasterComponent} from './component/master/pegawai-master/pegawai-master.component';
import {PegawaiJabatanComponent} from './component/master/pegawai-jabatan/pegawai-jabatan.component';
import {MataPelajaranComponent} from './component/master/mata-pelajaran/mata-pelajaran.component';
import {PengaturanKelasComponent} from './component/pengaturan/pengaturan-kelas/pengaturan-kelas.component';
import {KelasTingkatanComponent} from './component/master/kelas-tingkatan/kelas-tingkatan.component';
import {SiswaMasterComponent} from './component/master/siswa-master/siswa-master.component';
import {TahunAjarComponent} from './component/master/tahun-ajar/tahun-ajar.component';
import {KurikulumComponent} from './component/pengaturan/kurikulum/kurikulum.component';
import {KeterampilanUmumComponent} from './component/pengaturan/keterampilan-umum/keterampilan-umum.component';
import {SikapKhususComponent} from './component/pengaturan/sikap-khusus/sikap-khusus.component';
import {KelasPerwalianComponent} from './component/pengaturan/kelas-perwalian/kelas-perwalian.component';
import {PredikatMataPelajaranComponent} from './component/pengaturan/predikat-mata-pelajaran/predikat-mata-pelajaran.component';
import {JenisPenilaianKompetensiComponent} from './component/pengaturan/jenis-penilaian-kompetensi/jenis-penilaian-kompetensi.component';
import {PenilaianPengetahuanJenisKompetensiComponent} from './component/pengaturan/penilaian-pengetahuan-jenis-kompetensi/penilaian-pengetahuan-jenis-kompetensi.component';
import {MataPelajaranKelasComponent} from './component/pengaturan/mata-pelajaran-kelas/mata-pelajaran-kelas.component';
import {SiswaKelasComponent} from './component/pengaturan/siswa-kelas/siswa-kelas.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'data-sekolah', component: KontenDataSekolahComponent},
  {path: 'data-pegawai', component: PegawaiMasterComponent},
  {path: 'data-jabatan', component: PegawaiJabatanComponent},
  {path: 'data-kelas', component: KelasMasterComponent},
  {path: 'data-tingkatan', component: KelasTingkatanComponent},
  {path: 'data-mata-pelajaran', component: MataPelajaranComponent},
  {path: 'data-siswa', component: SiswaMasterComponent},
  {path: 'data-tahun-ajar', component: TahunAjarComponent},
  {path: 'pengaturan/kurikulum', component: KurikulumComponent},
  {path: 'pengaturan/kelas', component: PengaturanKelasComponent},
  {path: 'pengaturan/keterampilan-umum', component: KeterampilanUmumComponent},
  {path: 'pengaturan/sikap-khusus', component: SikapKhususComponent},
  {path: 'pengaturan/kelas-perwalian', component: KelasPerwalianComponent},
  {path: 'pengaturan/predikat-mata-pelajaran', component: PredikatMataPelajaranComponent},
  {path: 'pengaturan/jenis-penilaian-kompetensi', component: JenisPenilaianKompetensiComponent},
  {path: 'pengaturan/penilaian-pengetahuan-jenis-kompetensi', component: PenilaianPengetahuanJenisKompetensiComponent},
  {path: 'pengaturan/mata-pelajaran-kelas', component: MataPelajaranKelasComponent},
  {path: 'pengaturan/siswa-kelas', component: SiswaKelasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
