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
    KurikulumComponent
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
