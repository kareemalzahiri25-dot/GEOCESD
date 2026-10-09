import React from 'react';
import { GraduationCap, Mail, Phone } from 'lucide-react';
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
  );
};
