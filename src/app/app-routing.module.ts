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
  {path: 'pengaturan/kelas', component: PengaturanKelasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
