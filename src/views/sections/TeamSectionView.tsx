import React from 'react';
import { GraduationCap, Instagram, Github, Mail } from 'lucide-react';
import { TEAM_MEMBERS } from '../../models/team.model';

export const TeamSectionView: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Team Cards Grid (2x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TEAM_MEMBERS.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${member.iconColor} flex items-center justify-center font-extrabold text-xl shadow-xs`}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {member.name}
                    </h3>
                    <div className="text-xs text-slate-500 mt-0.5 font-medium">
                      {member.isLecturer
                        ? member.nim
                        : member.isPlaceholder
                        ? `${member.nim} · Angkatan ${member.batch}`
                        : `NIM: ${member.nim} · Angkatan ${member.batch}`}
                    </div>
                  </div>
                </div>
                <span
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border shrink-0 ${
                    member.isLecturer
                      ? 'text-amber-900 bg-amber-50 border-amber-200'
                      : 'text-emerald-800 bg-emerald-50 border-emerald-200'
                  }`}
                >
                  {member.roleBadge}
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
              </div>
            </div>

            {/* Social & Contact Icons Strip */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
              {/* Instagram (Untuk semua anggota) */}
              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-500 hover:text-pink-600 hover:bg-pink-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-label={`Instagram ${member.name}`}
                  title={`Instagram ${member.name}`}
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}

              {/* GitHub (Khusus Dhamar) */}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-label={`GitHub ${member.name}`}
                  title={`GitHub ${member.name}`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {/* Google Email (Untuk semua anggota) */}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-label={`Email ${member.name}`}
                  title={`Google Email: ${member.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
