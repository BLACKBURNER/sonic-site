import { useState, useEffect } from 'react';
import { CONTACT_EMAIL } from '@/lib/contact';

export default function PromoCalculator() {
  const [locations, setLocations] = useState(10);
  const [footfall, setFootfall] = useState(500);
  const [staffCost, setStaffCost] = useState(150);
  const [duration, setDuration] = useState(30);

  const [inStoreCost, setInStoreCost] = useState(0);
  const [liveVideoCost] = useState(8500); // Flat studio fee
  const [savings, setSavings] = useState(0);
  const [reachMultiplier, setReachMultiplier] = useState(0);
  const [roiDelta, setRoiDelta] = useState(0);

  useEffect(() => {
    // Calculate in-store cost: locations × staff cost × duration
    const inStore = locations * staffCost * duration;
    setInStoreCost(inStore);

    // Calculate savings
    const saved = inStore - liveVideoCost;
    setSavings(saved);

    // Calculate reach multiplier (live video reaches all locations simultaneously)
    const reach = locations * 1.5; // 1.5x multiplier for digital reach
    setReachMultiplier(reach);

    // Calculate ROI delta percentage
    const roi = saved > 0 ? ((saved / liveVideoCost) * 100) : 0;
    setRoiDelta(roi);
  }, [locations, footfall, staffCost, duration, liveVideoCost]);

  return (
    <section className="py-14 md:py-24 px-4 md:px-6 bg-white relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C8D400]/6 blur-3xl pointer-events-none" style={{ borderRadius: 0 }}></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#a8b300]/4 blur-3xl pointer-events-none" style={{ borderRadius: 0 }}></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#C8D400]/20 border border-[#C8D400]/30 px-4 py-1.5 mb-6">
            <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
            <span className="text-xs font-black text-[#111] uppercase tracking-widest">Kostenrechner</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111] mb-4 md:mb-6 leading-tight tracking-tight">
            LIVE VIDEO VS. INSTORE-PROMO
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            See the real cost difference and ROI impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Input Controls */}
          <div className="bg-white p-6 md:p-8 border border-gray-200" style={{ borderRadius: 0 }}>
            <h3 className="text-xl md:text-2xl font-bold text-sonic-dark mb-6 md:mb-8">Campaign Parameters</h3>
            
            <div className="space-y-6 md:space-y-8">
              {/* Number of POS Locations */}
              <div>
                <label className="flex items-center justify-between mb-3">
                  <span className="text-sm md:text-base font-semibold text-gray-700">Number of POS Locations</span>
                  <span className="text-xl md:text-2xl font-black text-[#C8D400]">{locations}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={locations}
                  onChange={(e) => setLocations(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C8D400]"
                  style={{
                    background: `linear-gradient(to right, #C8D400 0%, #C8D400 ${locations}%, #e5e7eb ${locations}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>

              {/* Average Daily Footfall */}
              <div>
                <label className="flex items-center justify-between mb-3">
                  <span className="text-sm md:text-base font-semibold text-gray-700">Avg. Daily Footfall per Location</span>
                  <span className="text-xl md:text-2xl font-black text-[#C8D400]">{footfall}</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="50"
                  value={footfall}
                  onChange={(e) => setFootfall(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C8D400]"
                  style={{
                    background: `linear-gradient(to right, #C8D400 0%, #C8D400 ${((footfall - 100) / 1900) * 100}%, #e5e7eb ${((footfall - 100) / 1900) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>100</span>
                  <span>2,000</span>
                </div>
              </div>

              {/* Staff Cost per Day */}
              <div>
                <label className="flex items-center justify-between mb-3">
                  <span className="text-sm md:text-base font-semibold text-gray-700">Staff Cost per Day (€)</span>
                  <span className="text-xl md:text-2xl font-black text-[#C8D400]">€{staffCost}</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="10"
                  value={staffCost}
                  onChange={(e) => setStaffCost(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C8D400]"
                  style={{
                    background: `linear-gradient(to right, #C8D400 0%, #C8D400 ${((staffCost - 50) / 450) * 100}%, #e5e7eb ${((staffCost - 50) / 450) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>€50</span>
                  <span>€500</span>
                </div>
              </div>

              {/* Campaign Duration */}
              <div>
                <label className="flex items-center justify-between mb-3">
                  <span className="text-sm md:text-base font-semibold text-gray-700">Campaign Duration (Days)</span>
                  <span className="text-xl md:text-2xl font-black text-[#C8D400]">{duration}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="90"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C8D400]"
                  style={{
                    background: `linear-gradient(to right, #C8D400 0%, #C8D400 ${(duration / 90) * 100}%, #e5e7eb ${(duration / 90) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1 day</span>
                  <span>90 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Comparison */}
          <div className="space-y-4 md:space-y-6">
            {/* In-Store Cost */}
            <div className="bg-[#f5f5f5] p-6 md:p-8 border border-gray-200" style={{ borderRadius: 0 }}>
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <i className="ri-store-3-line text-2xl md:text-3xl text-gray-600"></i>
                <h4 className="text-lg md:text-xl font-bold text-gray-800">In-Store Promo</h4>
              </div>
              <div className="text-3xl md:text-5xl font-black text-gray-800 mb-3 md:mb-4">
                €{inStoreCost.toLocaleString()}
              </div>
              <div className="h-5 md:h-6 bg-gray-300 overflow-hidden" style={{ borderRadius: 0 }}>
                <div 
                  className="h-full bg-gray-600 transition-all duration-500"
                  style={{ width: '100%', borderRadius: 0 }}
                ></div>
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-3">
                {locations} locations × €{staffCost}/day × {duration} days
              </p>
            </div>

            {/* Live Video Cost */}
            <div className="bg-[#C8D400]/10 p-6 md:p-8 border-2 border-[#C8D400]" style={{ borderRadius: 0 }}>
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <i className="ri-video-chat-line text-2xl md:text-3xl text-[#C8D400]"></i>
                <h4 className="text-lg md:text-xl font-bold text-sonic-dark">Live Video Promo</h4>
              </div>
              <div className="text-3xl md:text-5xl font-black text-[#C8D400] mb-3 md:mb-4">
                €{liveVideoCost.toLocaleString()}
              </div>
              <div className="h-5 md:h-6 bg-gray-200 overflow-hidden" style={{ borderRadius: 0 }}>
                <div 
                  className="h-full bg-[#C8D400] transition-all duration-500"
                  style={{ width: `${(liveVideoCost / inStoreCost) * 100}%`, borderRadius: 0 }}
                ></div>
              </div>
              <p className="text-xs md:text-sm text-gray-700 mt-3">
                Flat studio fee for all {locations} locations
              </p>
            </div>

            {/* Savings & ROI */}
            <div className="bg-white p-5 md:p-8 border border-[#C8D400]/30" style={{ borderRadius: 0 }}>
              <div className="grid grid-cols-3 gap-3 md:gap-6">
                <div className="text-center">
                  <i className="ri-money-euro-circle-line text-3xl md:text-4xl text-[#C8D400] mb-2"></i>
                  <div className="text-lg md:text-2xl font-black text-sonic-dark">
                    €{savings > 0 ? savings.toLocaleString() : 0}
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-600 mt-1">Cost Savings</p>
                </div>
                <div className="text-center">
                  <i className="ri-global-line text-3xl md:text-4xl text-[#C8D400] mb-2"></i>
                  <div className="text-lg md:text-2xl font-black text-sonic-dark">
                    {reachMultiplier.toFixed(1)}x
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-600 mt-1">Reach Multiplier</p>
                </div>
                <div className="text-center">
                  <i className="ri-line-chart-line text-3xl md:text-4xl text-[#C8D400] mb-2"></i>
                  <div className="text-lg md:text-2xl font-black text-sonic-dark">
                    {roiDelta > 0 ? '+' : ''}{roiDelta.toFixed(0)}%
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-600 mt-1">ROI Delta</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-16 text-center">
          <p className="text-base md:text-lg text-gray-600 mb-5 md:mb-6">
            Ready to transform your retail presence?
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Live Video Promotion Anfrage`}
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#C8D400] text-[#111] font-black text-base md:text-lg hover:bg-white hover:text-[#111] transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-mail-line text-xl"></i>
            <span>Get Started with Live Video</span>
          </a>
        </div>
      </div>
    </section>
  );
}