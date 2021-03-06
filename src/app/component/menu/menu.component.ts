import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuUtama = [
    {
      id: 1,
      nama_menu: 'Dashboard',
      link: 'dashboard',
      icon: 'fa fa-desktop'
    },
    {
      id_menu: '2',
      nama_menu: 'Penilaian',
      link: '',
      icon: 'fa fa-bar-chart-o',
      sub_menu:
        [
          {nama_sub: 'Pengetahuan', link: 'pengetahuan'},
          {nama_sub: 'Keterampilan', link: 'keterampilan'},
          {nama_sub: 'Sikap', link: 'sikap'}
        ]

    },
    {
      id_menu: '3',
      nama_menu: 'Master',
      link: '',
      icon: 'fa fa-tasks',
      sub_menu:
        [
          {nama_sub: 'Sekolah (belum ada tabel db)', link: 'data-sekolah'},
          {nama_sub: 'Data Tahun Ajar', link: 'data-tahun-ajar'},
          {nama_sub: 'Data Jabatan', link: 'data-jabatan'},
          {nama_sub: 'Data Pegawai', link: 'data-pegawai'},
          {nama_sub: 'Data Siswa', link: 'data-siswa'},
          {nama_sub: 'Data Mata Pelajaran', link: 'data-mata-pelajaran'},
          {nama_sub: 'Data Kelas', link: 'data-kelas'},
          {nama_sub: 'Data Tingkatan', link: 'data-tingkatan'}
        ]
    },
    {
      id_menu: '4',
      nama_menu: 'Pengaturan',
      link: '',
      icon: 'fa fa-gear',
      sub_menu:
        [
          {nama_sub: 'Kelas', link: 'pengaturan/kelas'},
          {nama_sub: 'Kurikulum', link: 'pengaturan/kurikulum'},
          {nama_sub: 'Keterampilan Umum', link: 'pengaturan/keterampilan-umum'},
          {nama_sub: 'Sikap Khusus', link: 'pengaturan/sikap-khusus'},
          {nama_sub: 'Kelas Perwalian', link: 'pengaturan/kelas-perwalian'},
          {nama_sub: 'Predikat Mata Pelajaran', link: 'pengaturan/predikat-mata-pelajaran'},
          {nama_sub: 'Jenis Penilaian Kompetensi', link: 'pengaturan/jenis-penilaian-kompetensi'},
          // {nama_sub: 'Penilaian Pengetahuan Jenis Kompetensi', link: 'pengaturan/penilaian-pengetahuan-jenis-kompetensi'}
          {nama_sub: 'Mata Pelajaran kelas', link: 'pengaturan/mata-pelajaran-kelas'},
          {nama_sub: 'Siswa Kelas', link: 'pengaturan/siswa-kelas'}
        ]
    }
  ];

  selectedMenu;

  onSelect(link): void {
    this.selectedMenu = link;
  }

  constructor() {
  }

  ngOnInit() {
  }

}

