import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { KontenDataSekolahComponent } from './component/data-sekolah/konten-data-sekolah.component';
import { MataPelajaranComponent } from './component/master/mata-pelajaran/mata-pelajaran.component';
import { TahunAjarComponent } from './component/master/tahun-ajar/tahun-ajar.component';
import { KelasTingkatanComponent } from './component/master/kelas-tingkatan/kelas-tingkatan.component';
import { KelasPembagianComponent } from './component/kelas-pembagian/kelas-pembagian.component';
import { KelasMasterComponent } from './component/master/kelas-master/kelas-master.component';
import { PenilaianPengetahuanComponent } from './component/penilaian-pengetahuan/penilaian-pengetahuan.component';
import  { DashboardComponent } from './component/dashboard/dashboard.component';
import { PenilaianKeterampilanComponent } from './component/penilaian-keterampilan/penilaian-keterampilan.component';
import { PenilaianSikapComponent } from './component/penilaian-sikap/penilaian-sikap.component';
import { PegawaiMasterComponent } from './component/master/pegawai-master/pegawai-master.component';
import { PegawaiJabatanComponent } from './component/master/pegawai-jabatan/pegawai-jabatan.component';
import { PengaturanKelasComponent } from './component/pengaturan/pengaturan-kelas/pengaturan-kelas.component';
import { SiswaMasterComponent } from './component/master/siswa-master/siswa-master.component';
import { KurikulumComponent } from './component/pengaturan/kurikulum/kurikulum.component';
import { KeterampilanUmumComponent} from './component/pengaturan/keterampilan-umum/keterampilan-umum.component';
import { SikapKhususComponent } from './component/pengaturan/sikap-khusus/sikap-khusus.component';
import { KelasPerwalianComponent } from './component/pengaturan/kelas-perwalian/kelas-perwalian.component';
import { PredikatMataPelajaranComponent } from './component/pengaturan/predikat-mata-pelajaran/predikat-mata-pelajaran.component';
import { JenisPenilaianKompetensiComponent } from './component/pengaturan/jenis-penilaian-kompetensi/jenis-penilaian-kompetensi.component';
import { PenilaianPengetahuanJenisKompetensiComponent } from './component/pengaturan/penilaian-pengetahuan-jenis-kompetensi/penilaian-pengetahuan-jenis-kompetensi.component';
import { MataPelajaranKelasComponent } from './component/pengaturan/mata-pelajaran-kelas/mata-pelajaran-kelas.component';
import { SiswaKelasComponent } from './component/pengaturan/siswa-kelas/siswa-kelas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    KontenDataSekolahComponent,
    MataPelajaranComponent,
    TahunAjarComponent,
    KelasTingkatanComponent,
    KelasPembagianComponent,
    KelasMasterComponent,
    PenilaianPengetahuanComponent,
    PenilaianKeterampilanComponent,
    PenilaianSikapComponent,
    PegawaiMasterComponent,
    PegawaiJabatanComponent,
    PengaturanKelasComponent,
    SiswaMasterComponent,
    KurikulumComponent,
    KeterampilanUmumComponent,
    SikapKhususComponent,
    KelasPerwalianComponent,
    PredikatMataPelajaranComponent,
    JenisPenilaianKompetensiComponent,
    PenilaianPengetahuanJenisKompetensiComponent,
    MataPelajaranKelasComponent,
    SiswaKelasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
