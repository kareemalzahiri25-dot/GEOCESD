import React from 'react';
import { UserCheck, Award, GraduationCap, MapPin, Mail, Phone, Code, Building2 } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const teamMembers = [
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
      phone: '0851 2905 6595',
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
      isPlaceholder: true,
      iconColor: 'bg-amber-100 text-amber-900',
    },
  ];

  return (
    <section id="tim-kami" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kolaborasi Interdisipliner Teknik Komputer & Teknik Sipil
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Tim peneliti mahasiswa dan dosen pembimbing Fakultas Teknik Universitas Negeri Semarang (UNNES).
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${member.iconColor} flex items-center justify-center font-extrabold text-xl shadow-xs`}>
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-bold text-slate-900 leading-snug">
                          {member.name}
                        </h3>
                        {member.isPlaceholder && (
                          <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                            Menyusul
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 font-medium">
                        {member.isLecturer ? member.nim : (member.isPlaceholder ? `${member.nim} · Angkatan ${member.batch}` : `NIM: ${member.nim} · Angkatan ${member.batch}`)}
                      </div>
                    </div>
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border shrink-0 ${
                    member.isLecturer
                      ? 'text-amber-900 bg-amber-50 border-amber-200'
                      : 'text-emerald-800 bg-emerald-50 border-emerald-200'
                  }`}>
                    {member.roleBadge || member.role.split('&')[0]}
                  </span>
                </div>

                <div className="mt-5 space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-slate-700">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>
                      {member.isLecturer ? 'Afiliasi Fakultas: ' : 'Program Studi '}
                      <strong className="text-slate-900">{member.program}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-700">
                    <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Universitas Negeri Semarang (UNNES)</span>
                  </div>

                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                      Fokus Kontribusi Inovasi:
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200/70">
                      {member.focus}
                    </p>
                  </div>
                </div>
              </div>

              {/* Optional Contact Meta for Member 2 as in essay */}
              {member.email && (
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    {member.email}
                  </span>
                  {member.phone && (
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      {member.phone}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
