export interface TeamMember {
  name: string;
  nim: string;
  batch: string;
  program: string;
  role: string;
  roleBadge: string;
  isLecturer: boolean;
  focus: string;
  isPlaceholder?: boolean;
  email?: string;
  instagram?: string;
  github?: string;
  phone?: string;
  location?: string;
  iconColor: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dhamar Firdaus Esa Mahendra',
    nim: '2405110008',
    batch: '2024',
    program: 'Teknik Komputer',
    role: 'Ketua Tim & Pengembang Sistem',
    roleBadge: 'Ketua Tim',
    isLecturer: false,
    focus: 'Arsitektur DSS, Evidence Classification Engine, Algoritma Decision Pipeline, & Antarmuka Interaktif',
    iconColor: 'bg-emerald-100 text-emerald-800',
    email: 'dhamar@students.unnes.ac.id',
    instagram: 'https://instagram.com',
    github: 'https://github.com',
  },
  {
    name: 'Aditya Kusuma Wardana',
    nim: '2505020081',
    batch: '2025',
    program: 'Teknik Sipil',
    role: 'Anggota Tim & Peneliti Material',
    roleBadge: 'Anggota Tim',
    isLecturer: false,
    focus: 'Karakterisasi Residu Geothermal, Analisis Mutu SNI 03-0691-1996, Formulasi Adukan Sementisius, & Neraca Massa',
    email: 'adityakusuma@students.unnes.ac.id',
    instagram: 'https://instagram.com',
    location: 'Banyumas / Semarang, Jawa Tengah',
    iconColor: 'bg-blue-100 text-blue-800',
  },
  {
    name: 'Nama Anggota Mahasiswa',
    nim: 'NIM: (Menyusul)',
    batch: '2024/2025',
    program: 'Fakultas Teknik (Menyusul)',
    role: 'Anggota Tim Mahasiswa',
    roleBadge: 'Anggota Tim',
    isLecturer: false,
    focus: 'Eksperimen Laboratorium, Pengujian Sifat Mekanis & Validasi Data Pozzolanik Residu Geothermal (Data Menyusul)',
    isPlaceholder: true,
    iconColor: 'bg-teal-100 text-teal-800',
    email: 'mahasiswa@students.unnes.ac.id',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Nama Dosen Pembimbing',
    nim: 'NIP / NIDN: (Menyusul)',
    batch: 'Dosen Pembimbing',
    program: 'Fakultas Teknik UNNES',
    role: 'Dosen Pembimbing Akademik',
    roleBadge: 'Dosen Pembimbing',
    isLecturer: true,
    focus: 'Supervisi Riset Ilmiah, Validasi Metodologi Material Konstruksi, Bimbingan Penulisan & Arah Kebijakan Inovasi (Data Menyusul)',
    isPlaceholder: false,
    iconColor: 'bg-amber-100 text-amber-900',
  },
];
