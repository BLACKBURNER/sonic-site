import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import SectionBadge from '@/components/base/SectionBadge';
import WoodenDivider from '@/components/base/WoodenDivider';

interface PubliiAuthor {
  name: string;
  avatar?: string;
}

interface PubliiItem {
  id: string;
  url: string;
  title: string;
  content_html: string;
  summary?: string;
  date_published: string;
  image?: string;
  tags?: string[];
  authors?: PubliiAuthor[];
}

export default function BlogPage() {
  useSEO({
    title: 'Blog | Sonic Group',
    description: 'Aktuelle Insights, News und Updates rund um Performance Marketing, Retail und POS-Activation von der Sonic Group.',
    keywords: 'Sonic Group Blog, Retail News, POS Activation, Performance Marketing, DACH',
    canonical: 'https://sonic-group.de/blog',
    ogTitle: 'Blog — Sonic Group',
    ogDescription: 'Insights und Erfolgsgeschichten aus der Welt des Performance Marketings.',
  });

  const [posts, setPosts] = useState<PubliiItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const gridRef = useRef<HTMLDivElement>(null);

  // Fetch Feed once on mount
  useEffect(() => {
    const fetchFeed = async () => {
      setLoading(true);
      setError(null);
      try {
        const feedUrl = import.meta.env.VITE_PUBLII_FEED_URL || '/feed.json';
        const response = await fetch(feedUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch feed: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        const items: PubliiItem[] = data.items || [];
        
        // Sort items by date_published descending
        items.sort((a, b) => new Date(b.date_published).getTime() - new Date(a.date_published).getTime());
        setPosts(items);

        // Dynamically extract unique tags/categories
        const tagsSet = new Set<string>();
        items.forEach((item) => {
          if (item.tags && Array.isArray(item.tags)) {
            item.tags.forEach((tag) => tagsSet.add(tag));
          }
        });
        setCategories(Array.from(tagsSet));
      } catch (err) {
        console.error(err);
        setError('Blogbeiträge konnten nicht geladen werden. Bitte versuche es später noch einmal.');
      } finally {
        setLoading(false);
      }
    };
    fetchFeed();
  }, []);

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // Smooth scroll back to grid top
    if (gridRef.current) {
      const yOffset = -100; // offset for fixed header
      const y = gridRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('de-DE', options);
  };

  const getSlugFromUrl = (url: string) => {
    const trimmed = url.replace(/\/$/, "");
    const parts = trimmed.split("/");
    return parts[parts.length - 1] || url;
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]+>/g, '');
  };

  // Filter posts based on active category (tag)
  const filteredPosts = activeCategory
    ? posts.filter((post) => post.tags && post.tags.includes(activeCategory))
    : posts;

  // Pagination calculations
  const postsPerPage = 9;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const displayedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-[#1a1a1a]" style={{ minHeight: 'clamp(320px, 40vw, 440px)' }}>
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://www.sonic-group.de/wp-content/uploads/2023/06/EVENT_NEU.jpg"
            alt="Blog Hero Background"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/80 to-[#1a1a1a]" />
        
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C8D400]/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8D400]/5 blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center h-full" style={{ minHeight: 'clamp(320px, 40vw, 440px)', paddingTop: '5rem', paddingBottom: '3rem' }}>
          <div className="inline-flex items-center gap-3 mb-4 md:mb-6">
            <div className="w-8 h-8 flex items-center justify-center bg-[#C8D400]/20">
              <i className="ri-article-line text-xl text-[#C8D400]"></i>
            </div>
            <span className="text-[#C8D400] text-xs font-black uppercase tracking-widest">Magazin & Insights</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.9] mb-4 md:mb-6 tracking-tight">
            SONIC<br />
            <span className="text-[#C8D400]">BLOG</span>
          </h1>
          <p className="text-lg md:text-xl font-bold text-white/80 max-w-2xl mx-auto leading-relaxed">
            Aktuelle News, Expertenwissen und Best Practices für erfolgreiche Retail-Aktivierung.
          </p>
        </div>
      </section>

      <WoodenDivider />

      {/* ── BLOG CONTENT ── */}
      <section className="py-16 md:py-24" ref={gridRef}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-6 mb-10 md:mb-16">
            <div className="flex justify-center md:justify-start">
              <SectionBadge text={activeCategory ? "Gefilterte Beiträge" : "Aktuelle Beiträge"} variant="dark" />
            </div>
            
            {/* Category Filters */}
            {categories.length > 0 && (
              <div className="flex flex-wrap items-center justify-center gap-3 w-full border-y border-black/5 py-8 mt-4">
                <button
                  onClick={() => handleCategoryClick(null)}
                  className={`px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 border ${
                    activeCategory === null
                      ? 'bg-[#C8D400] text-[#1a1a1a] border-[#C8D400] shadow-[0_4px_14px_rgba(200,212,0,0.4)]'
                      : 'bg-transparent text-gray-500 border-gray-300 hover:bg-[#1a1a1a] hover:border-[#1a1a1a] hover:text-[#C8D400] hover:shadow-[0_4px_14px_rgba(26,26,26,0.3)]'
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  Alle
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryClick(cat)}
                    className={`px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 border ${
                      activeCategory === cat
                        ? 'bg-[#C8D400] text-[#1a1a1a] border-[#C8D400] shadow-[0_4px_14px_rgba(200,212,0,0.4)]'
                        : 'bg-transparent text-gray-500 border-gray-300 hover:bg-[#1a1a1a] hover:border-[#1a1a1a] hover:text-[#C8D400] hover:shadow-[0_4px_14px_rgba(26,26,26,0.3)]'
                    }`}
                    style={{ borderRadius: 0 }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse bg-white border border-black/5 flex flex-col min-h-[400px]">
                  <div className="h-56 bg-gray-200"></div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="h-4 bg-gray-200 w-1/3 mb-4"></div>
                    <div className="h-6 bg-gray-200 w-full mb-2"></div>
                    <div className="h-6 bg-gray-200 w-2/3 mb-6"></div>
                    <div className="h-20 bg-gray-200 w-full mb-6"></div>
                    <div className="h-10 bg-gray-200 w-1/2 mt-auto"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="bg-white p-10 text-center border border-black/10 mb-16">
              <i className="ri-error-warning-line text-4xl text-red-500 mb-4 block"></i>
              <p className="text-black/60 font-bold">{error}</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="bg-white p-10 text-center border border-black/10 mb-16">
              <p className="text-black/60 font-bold">In dieser Kategorie wurden noch keine Beiträge veröffentlicht.</p>
            </div>
          ) : (
            <>
              {/* Blog Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {displayedPosts.map((post) => {
                  const imageUrl = post.image;
                  const category = post.tags?.[0] || 'News';
                  const excerpt = post.summary || (stripHtml(post.content_html).slice(0, 160) + '...');
                  
                  return (
                    <Link
                      key={post.id}
                      to={`/blog/${getSlugFromUrl(post.url)}`}
                      className="group bg-white border border-black/5 flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                    >
                      <div className="relative h-56 md:h-64 overflow-hidden bg-[#1a1a1a]">
                        {imageUrl ? (
                          <img 
                            src={imageUrl} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a]">
                            <i className="ri-image-line text-4xl text-white/20"></i>
                          </div>
                        )}
                        <div className="absolute top-4 left-4 bg-[#C8D400] text-[#1a1a1a] text-[10px] font-black uppercase tracking-widest px-3 py-1">
                          {category}
                        </div>
                      </div>
                      
                      <div className="p-6 md:p-8 flex-1 flex flex-col">
                        <div className="text-black/40 text-xs font-bold uppercase tracking-wider mb-3">
                          {formatDate(post.date_published)}
                        </div>
                        <h2 
                          className="text-xl md:text-2xl font-black text-sonic-dark mb-4 leading-tight tracking-tight group-hover:text-sonic-lime transition-colors line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: post.title }}
                        />
                        <div 
                          className="text-sm text-gray-600 leading-relaxed mb-8 line-clamp-3"
                          dangerouslySetInnerHTML={{ __html: excerpt }}
                        />
                        
                        <div className="mt-auto">
                          <span className="inline-flex items-center gap-2 text-sm font-black text-[#1a1a1a] uppercase tracking-wider group-hover:text-[#C8D400] transition-colors">
                            Weiterlesen
                            <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-16 md:mt-24">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`w-12 h-12 flex items-center justify-center transition-all duration-300 border ${
                      currentPage === 1 
                        ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-white' 
                        : 'border-black/20 text-[#1a1a1a] bg-white hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#C8D400] hover:shadow-[0_4px_14px_rgba(26,26,26,0.3)]'
                    }`}
                    style={{ borderRadius: 0 }}
                    aria-label="Vorherige Seite"
                  >
                    <i className="ri-arrow-left-line text-xl"></i>
                  </button>
                  
                  <div className="flex items-center gap-2 mx-4">
                    {(() => {
                      const getPaginationGroup = () => {
                        if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
                        if (currentPage <= 4) return [1, 2, 3, 4, 5, '...', totalPages];
                        if (currentPage >= totalPages - 3) return [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
                        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
                      };
                      
                      return getPaginationGroup().map((item, index) => {
                        if (item === '...') {
                          return <span key={`ellipsis-${index}`} className="w-12 text-center text-gray-400">...</span>;
                        }
                        
                        const pageNum = item as number;
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`w-12 h-12 flex items-center justify-center text-sm font-black transition-all duration-300 border ${
                              currentPage === pageNum
                                ? 'bg-[#C8D400] text-[#1a1a1a] border-[#C8D400] shadow-[0_4px_14px_rgba(200,212,0,0.4)]'
                                : 'bg-white text-gray-500 border-transparent hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#C8D400] hover:shadow-[0_4px_14px_rgba(26,26,26,0.3)]'
                            }`}
                            style={{ borderRadius: 0 }}
                            aria-label={`Seite ${pageNum}`}
                          >
                            {pageNum}
                          </button>
                        );
                      });
                    })()}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-12 h-12 flex items-center justify-center transition-all duration-300 border ${
                      currentPage === totalPages 
                        ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-white' 
                        : 'border-black/20 text-[#1a1a1a] bg-white hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#C8D400] hover:shadow-[0_4px_14px_rgba(26,26,26,0.3)]'
                    }`}
                    style={{ borderRadius: 0 }}
                    aria-label="Nächste Seite"
                  >
                    <i className="ri-arrow-right-line text-xl"></i>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
