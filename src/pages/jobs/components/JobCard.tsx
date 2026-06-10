import { Link } from 'react-router-dom';
import { JobPosting } from '../page';

interface Props {
  job: JobPosting;
}

export default function JobCard({ job }: Props) {
  return (
    <Link
      to={`/jobs/${job.hash}`}
      className="group flex flex-col bg-white border border-gray-100 hover:border-[#C8D400]/60 transition-all duration-300 overflow-hidden cursor-pointer"
      style={{ borderRadius: 0, textDecoration: 'none' }}
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-[#f5f5f5] group-hover:bg-[#C8D400] transition-colors duration-300" />

      <div className="flex flex-col flex-1 p-5">
        {/* Meta row */}
        <div className="flex items-center gap-2 flex-wrap mb-3">
          {job.department && (
            <span className="px-2.5 py-1 bg-[#f5f5f5] text-[10px] font-black uppercase tracking-[0.15em] text-gray-500 truncate max-w-[140px]">
              {job.department}
            </span>
          )}
          {job.employmentType && (
            <span className="px-2.5 py-1 bg-[#C8D400]/15 text-[10px] font-black uppercase tracking-[0.15em] text-[#1a1a1a] truncate max-w-[140px]">
              {job.employmentType}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-base font-black text-[#1a1a1a] mb-2 leading-tight group-hover:text-[#1a1a1a] transition-colors line-clamp-2">
          {job.title}
        </h2>

        {/* Short description */}
        {job.shortDescription && (
          <p className="text-xs text-gray-500 line-clamp-2 mb-4 flex-1">
            {job.shortDescription}
          </p>
        )}

        <div className="flex-1" />

        {/* Location + CTA */}
        <div className="flex items-end justify-between gap-3 mt-4 pt-4 border-t border-gray-50 group-hover:border-[#C8D400]/20 transition-colors">
          <div className="flex items-center gap-1.5 min-w-0">
            <i className="ri-map-pin-line text-sm text-[#C8D400] flex-shrink-0" />
            <span className="text-xs font-bold text-gray-500 truncate">{job.location || 'Remote / DACH'}</span>
          </div>
          <span className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wide text-[#1a1a1a] group-hover:text-[#C8D400] transition-colors whitespace-nowrap flex-shrink-0">
            Details
            <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
