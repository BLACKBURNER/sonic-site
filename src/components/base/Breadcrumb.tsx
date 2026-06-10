
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-gray-50/30 backdrop-blur-sm border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-6">
        <ol className="flex items-center gap-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-gray-400">
                  <i className="ri-arrow-right-s-line"></i>
                </span>
              )}
              {item.href ? (
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-[#C8D400] transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-sonic-dark font-semibold">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
