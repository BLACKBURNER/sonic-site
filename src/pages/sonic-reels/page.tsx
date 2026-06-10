import { useCallback, useEffect, useRef, useState } from 'react';
import Navigation from '../../components/feature/Navigation';
import EraNav from './components/EraNav';
import PhotoAlbum from './components/PhotoAlbum';
import { CONTACT_EMAIL } from '@/lib/contact';

export interface EraData {
  id: string;
  label: string;
  years: string;
  tagline: string;
  description: string;
  milestones: string[];
  yearTag: [string, string];
  heroImage?: string;
  accentImage?: string;
  gallery: { url: string; caption: string; wide?: boolean }[];
}

const eras: EraData[] = [
  {
    id: 'era-2007-2015',
    label: '2007–2015',
    years: '2007–2015',
    tagline: 'The Genesis',
    yearTag: ['0', '7'],
    description:
      "What started as a two-person operation in a Cologne backroom became the blueprint for modern retail activation in Germany. Sonic's founding philosophy was radical for 2007: don't just place staff at the shelf — place the right people, trained as brand experts, measured on results. The first three years were a proof of concept. By 2012, the concept had proved itself across three countries.",
    heroImage:
      'https://readdy.ai/api/search-image?query=moody%20cinematic%20photograph%20of%20young%20passionate%20entrepreneurs%20working%20late%20night%20in%20a%20small%20industrial%20loft%20startup%20office%20with%20exposed%20brick%20walls%20warm%20lamp%20light%20scattered%20papers%20and%20whiteboards%20covered%20in%20strategy%20notes%20photofilm%20grain%20aesthetic%20early%202000s%20Germany%20urban%20atmosphere%20gritty%20creative%20energy&width=1920&height=1080&seq=sonic-reels-hero-2007&orientation=landscape',
    accentImage:
      'https://readdy.ai/api/search-image?query=candid%20documentary%20photograph%20of%20first%20brand%20ambassador%20team%20standing%20together%20in%20front%20of%20electronics%20retail%20store%20entrance%20Cologne%20Germany%20early%20morning%20fresh%20uniforms%20proud%20expressions%20photojournalistic%20film%20photography%20style%20warm%20vintage%20tones%20shallow%20depth%20of%20field&width=800&height=600&seq=sonic-reels-accent-2007&orientation=landscape',
    milestones: ['Founded Cologne, 2007', 'Garmin — first major contract', 'Team grows to 50', 'MediaMarkt & Saturn network', 'First Austria deployment, 2013'],
    gallery: [
      { url: 'https://readdy.ai/api/search-image?query=early%202000s%20German%20electronics%20retail%20store%20interior%20with%20brand%20activation%20booth%20and%20two%20young%20enthusiastic%20sales%20promoters%20demonstrating%20products%20to%20curious%20shoppers%20film%20grain%20nostalgic%20documentary%20photography%20warm%20fluorescent%20lighting%20busy%20consumer%20electronics%20store&width=1200&height=800&seq=sonic-gallery-2007-1&orientation=landscape', caption: 'First retail activation — MediaMarkt Cologne, 2007', wide: true },
      { url: 'https://readdy.ai/api/search-image?query=small%20promotional%20team%20briefing%20in%20a%20modest%20meeting%20room%20with%20printouts%20pinned%20to%20walls%20a%20map%20of%20Germany%20with%20red%20pins%20early%20planning%20sessions%20vintage%20documentary%20photography%20warm%20tones%20intimate%20atmosphere%20mid-2000s%20professional%20setting&width=600&height=800&seq=sonic-gallery-2007-2&orientation=portrait', caption: 'Strategy sessions — HQ Cologne, 2008' },
      { url: 'https://readdy.ai/api/search-image?query=brand%20ambassador%20confidently%20demonstrating%20garmin%20GPS%20device%20to%20older%20German%20couple%20in%20premium%20electronics%20store%20interior%20clean%20display%20stands%20professional%20promotion%20photography%20cinematic%20lighting%20intimate%20retail%20moment%20early%202000s&width=600&height=800&seq=sonic-gallery-2007-3&orientation=portrait', caption: 'Garmin pilot activation, 2009' },
      { url: 'https://readdy.ai/api/search-image?query=wide%20shot%20of%20German%20trade%20show%20floor%20CEBIT%20Hannover%20brand%20promotion%20booths%20early%202010s%20busy%20consumer%20electronics%20exposition%20multiple%20branded%20stands%20corporate%20atmosphere%20photojournalistic%20grain%20wide%20angle%20lens&width=1200&height=700&seq=sonic-gallery-2007-4&orientation=landscape', caption: 'CEBIT Hannover — trade fair activation, 2011', wide: true },
      { url: 'https://readdy.ai/api/search-image?query=team%20celebration%20photo%20outdoors%20small%20group%20of%20young%20promotional%20staff%20in%20branded%20uniforms%20summer%20rooftop%20party%20candid%20laughter%20Cologne%20skyline%20background%20warm%20golden%20hour%20light%20authentic%20joyful%20moment&width=600&height=600&seq=sonic-gallery-2007-5&orientation=squarish', caption: 'Team summer celebration — 2013' },
      { url: 'https://readdy.ai/api/search-image?query=close-up%20documentary%20portrait%20of%20a%20skilled%20brand%20ambassador%20woman%20presenting%20a%20vacuum%20cleaner%20in%20department%20store%20Kaufhof%20professional%20expression%20confident%20retail%20demonstration%20clean%20bokeh%20background%20warm%20indoor%20lighting%20authentic%202010s%20photography&width=600&height=800&seq=sonic-gallery-2007-6&orientation=portrait', caption: 'Dyson pilot — 2014' },
    ],
  },
  {
    id: 'era-2015-2019',
    label: '2015–2019',
    years: '2015–2019',
    tagline: 'The Momentum',
    yearTag: ['1', '5'],
    description:
      "The mid-decade years brought Sonic's biggest brand wins — and the start of something structural. Samsung's DACH account transformed the business overnight: suddenly Sonic was coordinating 200+ specialists across three countries simultaneously. It forced us to build systems. Standardised training. Tiered certification. Real-time communication protocols. By 2019, those systems had become the agency's competitive moat.",
    heroImage:
      'https://readdy.ai/api/search-image?query=dramatic%20wide%20angle%20view%20of%20a%20large%20modern%20German%20consumer%20electronics%20store%20Samsung%20brand%20zone%20with%20multiple%20promoters%20working%20simultaneously%20confident%20professional%20atmosphere%20clean%20premium%20retail%20environment%20cinematic%20photography%202016%20era%20high%20energy%20commercial%20photography&width=1920&height=1080&seq=sonic-reels-hero-2015&orientation=landscape',
    accentImage:
      'https://readdy.ai/api/search-image?query=professional%20group%20photograph%20of%2015%20brand%20ambassadors%20in%20matching%20Samsung%20uniforms%20inside%20Mediamarkt%20store%20confident%20professional%20organized%20team%20photo%20polished%20corporate%20commercial%20photography%20vibrant%20energy&width=800&height=600&seq=sonic-reels-accent-2015&orientation=landscape',
    milestones: ['Samsung DACH partnership, 2015', 'Sonic Training Academy founded', 'Philips & Dyson contracts signed', '500+ active specialists', 'Switzerland coverage completed, 2018'],
    gallery: [
      { url: 'https://readdy.ai/api/search-image?query=cinematic%20wide%20Samsung%20Galaxy%20smartphone%20launch%20event%20retail%20activation%202016%20brand%20specialists%20demonstrating%20phone%20features%20to%20groups%20of%20customers%20premium%20display%20environment%20modern%20electronics%20store%20high%20contrast%20photography%20vibrant%20brand%20colors%20commercial&width=1200&height=800&seq=sonic-gallery-2015-1&orientation=landscape', caption: 'Samsung Galaxy S7 launch activation, 2016', wide: true },
      { url: 'https://readdy.ai/api/search-image?query=brand%20training%20academy%20large%20conference%20room%2030%20uniformed%20brand%20ambassadors%20seated%20attentive%20presentation%20on%20screen%20Sonic%20group%20branded%20materials%20professional%20corporate%20photography%20daytime%20natural%20light%20Germany%202017&width=600&height=800&seq=sonic-gallery-2015-2&orientation=portrait', caption: 'Sonic Training Academy launch, 2017' },
      { url: 'https://readdy.ai/api/search-image?query=Philips%20product%20launch%20retail%20event%20multiple%20promotion%20specialists%20demonstrating%20small%20domestic%20appliances%20in%20modern%20department%20store%20Austria%20Vienna%20display%20stands%20clean%20editorial%20photography%202017%20warm%20retail%20lighting%20professional&width=600&height=800&seq=sonic-gallery-2015-3&orientation=portrait', caption: 'Philips DACH rollout — Vienna, 2017' },
      { url: 'https://readdy.ai/api/search-image?query=aerial%20drone%20view%20of%20large%20consumer%20electronics%20trade%20fair%20IFA%20Berlin%202018%20massive%20exhibition%20hall%20Sonic%20branded%20booths%20visible%20brand%20ambassador%20teams%20in%20action%20birds%20eye%20perspective%20editorial%20commercial%20photography%20wide%20dramatic&width=1200&height=700&seq=sonic-gallery-2015-4&orientation=landscape', caption: 'IFA Berlin — largest activation to date, 2018', wide: true },
      { url: 'https://readdy.ai/api/search-image?query=Dyson%20luxury%20product%20demonstration%20zone%20premium%20retail%20Swiss%20department%20store%20Geneva%20brand%20specialist%20woman%20showing%20Dyson%20hairdryer%20to%20affluent%20customer%20clean%20minimalist%20display%202018%20elegant%20lifestyle%20photography&width=600&height=600&seq=sonic-gallery-2015-5&orientation=squarish', caption: 'Dyson luxury retail — Zurich, 2018' },
      { url: 'https://readdy.ai/api/search-image?query=milestone%20celebration%20dinner%20Sonic%20leadership%20team%20at%20restaurant%20Cologne%202019%20professional%20candid%20photography%20warm%20festive%20atmosphere%20team%20around%20table%20smiling%20glasses%20raised%20achievement%20corporate%20event%20photography&width=600&height=600&seq=sonic-gallery-2015-6&orientation=squarish', caption: '500 ambassadors milestone dinner, 2019' },
    ],
  },
  {
    id: 'era-2019-2022',
    label: '2019–2022',
    years: '2019–2022',
    tagline: 'The Resilience',
    yearTag: ['1', '9'],
    description:
      '2020 was meant to be our biggest year. Three new brand contracts signed. 300 more specialists in onboarding. Two trade fairs locked in. Then everything closed. The team spent 72 hours building a hybrid activation playbook from scratch. We deployed safe-retail protocols before most agencies had heard the term. When stores reopened, Sonic was already there — and the clients who stayed loyal have stayed ever since.',
    heroImage:
      'https://readdy.ai/api/search-image?query=dramatic%20moody%20photograph%20of%20an%20empty%20European%20retail%20shopping%20mall%20during%20lockdown%20single%20brand%20ambassador%20standing%20alone%20at%20clean%20product%20display%20station%20strong%20dramatic%20shadow%20cinematic%20lighting%20dark%20atmospheric%20stoic%20resilience%20documentary%20photography%202020&width=1920&height=1080&seq=sonic-reels-hero-2019&orientation=landscape',
    accentImage:
      'https://readdy.ai/api/search-image?query=brand%20specialist%20conducting%20hybrid%20digital%20product%20demonstration%20via%20tablet%20screen%20to%20customer%20in%20socially%20distanced%20retail%20setup%202020%20face%20shields%20plexiglass%20barriers%20documentary%20authentic%20retail%20photography%20warm%20tones%20human%20connection&width=800&height=600&seq=sonic-reels-accent-2019&orientation=landscape',
    milestones: ['Hybrid activation playbook built', 'PPE-safe retail protocols launched', 'PS5 launch — 200 locations, Dec 2020', 'Remote training system built', 'Zero clients lost in crisis year'],
    gallery: [
      { url: 'https://readdy.ai/api/search-image?query=documentary%20photograph%20empty%20German%20shopping%20street%20lockdown%202020%20single%20illuminated%20store%20window%20Sonic%20branded%20tablet%20demonstration%20to%20masked%20customer%20cinematic%20wide%20shot%20late%20evening%20dark%20atmospheric%20resilient%20human%20spirit%20commercial%20photography&width=1200&height=800&seq=sonic-gallery-2019-1&orientation=landscape', caption: 'Adapted retail formats during lockdown, 2020', wide: true },
      { url: 'https://readdy.ai/api/search-image?query=brand%20ambassador%20conducting%20virtual%20product%20demonstration%20on%20laptop%20Zoom%20call%20showing%20premium%20electronics%20features%20to%20online%20customer%20home%20office%20setup%202020%20warm%20lighting%20professional%20setup%20documentary%20photography%20authentic&width=600&height=800&seq=sonic-gallery-2019-2&orientation=portrait', caption: 'Launch of virtual product demos, 2020' },
      { url: 'https://readdy.ai/api/search-image?query=three%20brand%20specialists%20in%20transparent%20face%20shields%20and%20branded%20uniforms%20standing%20in%20clean%20retail%20zone%202021%20professional%20safety%20protocol%20polished%20editorial%20photography%20modern%20German%20retail%20store%20interior%20determined%20professional%20expressions&width=600&height=800&seq=sonic-gallery-2019-3&orientation=portrait', caption: 'Safe-activation protocol, 2021' },
      { url: 'https://readdy.ai/api/search-image?query=Sony%20PlayStation%205%20retail%20launch%20activation%20Christmas%202020%20Germany%20MediaMarkt%20specialist%20with%20gloves%20handling%20PS5%20console%20queue%20of%20excited%20customers%20editorial%20cinematic%20photography%20dramatic%20tension%20premiere%20product%20launch%20atmosphere&width=1200&height=700&seq=sonic-gallery-2019-4&orientation=landscape', caption: 'PS5 launch — Germany wide, Christmas 2020', wide: true },
      { url: 'https://readdy.ai/api/search-image?query=Sonic%20team%20video%20call%20remote%20training%20session%2020%20faces%20on%20screen%20all%20wearing%20matching%20branded%20polo%20shirts%20thumbs%20up%20celebration%20virtual%20meeting%20documentary%20authentic%202021%20Zoom%20corporate%20photography%20warm%20celebratory%20energy&width=600&height=600&seq=sonic-gallery-2019-5&orientation=squarish', caption: 'Remote training programme rollout, 2021' },
      { url: 'https://readdy.ai/api/search-image?query=first%20post-lockdown%20in-person%20team%20event%202021%20Germany%20outdoor%20terrace%20large%20group%20of%20Sonic%20brand%20ambassadors%20celebrating%20together%20relief%20joy%20candid%20photojournalistic%20style%20warm%20summer%20evening%20emotional%20authentic&width=600&height=600&seq=sonic-gallery-2019-6&orientation=squarish', caption: 'First in-person team reunion, Summer 2021' },
    ],
  },
  {
    id: 'era-2022-2023',
    label: '2022–2023',
    years: '2022–2023',
    tagline: 'The Acceleration',
    yearTag: ['2', '2'],
    description:
      "Post-pandemic demand hit all at once. Five global brands were running simultaneous campaigns — Sonic had to coordinate it all without a single metric missed. That pressure accelerated a project that had been in the background for two years: a proprietary reporting and performance-tracking platform. The first internal SRT prototype ran live in Q4 2023. The results made it clear this wasn't just a tool — it was a product.",
    heroImage:
      'https://readdy.ai/api/search-image?query=powerful%20cinematic%20wide%20shot%20of%20enormous%20IFA%20Berlin%202022%20consumer%20electronics%20trade%20fair%20massive%20Samsung%20brand%20activation%20pavilion%20hundreds%20of%20visitors%20engaging%20with%20product%20specialists%20dramatic%20wide%20angle%20high%20ceilings%20lights%20editorial%20commercial%20photography%20high%20energy%20spectacle&width=1920&height=1080&seq=sonic-reels-hero-2022&orientation=landscape',
    accentImage:
      'https://readdy.ai/api/search-image?query=wide%20shot%20of%2020%20uniformed%20Sonic%20brand%20specialists%20lined%20up%20professionally%20in%20front%20of%20large%20premium%20Bosch%20appliance%20display%20in%20German%20department%20store%20proud%20team%20photo%202022%20commercial%20corporate%20photography%20vibrant%20organized%20energy&width=800&height=600&seq=sonic-reels-accent-2022&orientation=landscape',
    milestones: ['1,000+ specialists active', 'Five concurrent brand campaigns', 'Groupe SEB partnership added', 'SRT prototype live, Q4 2023', '€2B+ cumulative sales activated'],
    gallery: [
      { url: 'https://readdy.ai/api/search-image?query=massive%20Samsung%20Galaxy%20S22%20product%20launch%20event%202022%20MediaMarkt%20Germany%20entire%20ground%20floor%20transformed%20into%20Samsung%20zone%20multiple%20brand%20specialists%20engaged%20with%20large%20crowds%20premier%20commercial%20photography%20vibrant%20electric%20atmosphere%20dramatic%20overhead%20lighting&width=1200&height=800&seq=sonic-gallery-2022-1&orientation=landscape', caption: 'Samsung Galaxy S22 nationwide launch, 2022', wide: true },
      { url: 'https://readdy.ai/api/search-image?query=Groupe%20SEB%20multi-brand%20activation%20zone%20showing%20Tefal%20Krups%20WMF%20Rowenta%20products%20simultaneously%20in%20large%20German%20department%20store%20four%20brand%20specialists%20working%20different%20categories%20editorial%20commercial%20photography%20organized%20premium%202022&width=600&height=800&seq=sonic-gallery-2022-2&orientation=portrait', caption: 'Groupe SEB multi-brand rollout, 2022' },
      { url: 'https://readdy.ai/api/search-image?query=Dyson%20premium%20hair%20care%20launch%20event%202022%20luxury%20boutique%20setting%20Stuttgart%20specialist%20demonstrating%20Dyson%20Airwrap%20to%20affluent%20female%20customer%20intimate%20premium%20lighting%20editorial%20fashion%20lifestyle%20photography%20clean%20elegant&width=600&height=800&seq=sonic-gallery-2022-3&orientation=portrait', caption: 'Dyson Airwrap premium activation — Stuttgart, 2022' },
      { url: 'https://readdy.ai/api/search-image?query=Bosch%20home%20appliances%20showcase%202023%20large%20German%20Euronics%20store%20multiple%20Bosch%20specialists%20conducting%20simultaneous%20kitchen%20appliance%20demonstrations%20to%20separate%20customer%20groups%20professional%20commercial%20photography%20dramatic%20wide%20angle%20organized%20energy&width=1200&height=700&seq=sonic-gallery-2022-4&orientation=landscape', caption: 'Bosch nationwide POS rollout — 180 locations, 2023', wide: true },
      { url: 'https://readdy.ai/api/search-image?query=Sonic%20promotional%20team%20award%20ceremony%20gala%20dinner%202023%20Cologne%20large%20banquet%20room%20applause%20celebration%20brand%20ambassador%20of%20the%20year%20award%20Sonic%20leadership%20presenting%20trophy%20candid%20festive%20corporate%20photography%20warm%20golden%20tones&width=600&height=600&seq=sonic-gallery-2022-5&orientation=squarish', caption: 'First Sonic Ambassador Awards Gala, 2023' },
      { url: 'https://readdy.ai/api/search-image?query=data%20analytics%20dashboard%20screen%20closeup%20showing%20Sonic%20retail%20performance%20metrics%20live%20tracking%20charts%20bar%20graphs%20green%20numbers%20glowing%20monitor%20warm%20dark%20office%20background%20tech%20company%20editorial%20photography%202023&width=600&height=600&seq=sonic-gallery-2022-6&orientation=squarish', caption: 'SRT prototype goes live — internal testing, 2023' },
    ],
  },
  {
    id: 'era-2024',
    label: '2024',
    years: '2024',
    tagline: 'The Edge',
    yearTag: ['2', '4'],
    description:
      'SRT launched commercially in March 2024 and changed the conversation entirely. For the first time, clients could log in and see exactly what their investment was generating — conversion rates per store, specialist performance rankings, live coverage maps. The data confirmed what the team already knew: the best-trained people, backed by the best data, produce results no competitor can replicate. Philips hit #1 in the German personal care category. Garmin grew DACH revenue by 130%.',
    heroImage:
      'https://readdy.ai/api/search-image?query=sleek%20futuristic%20modern%20tech%20office%20with%20large%20curved%20monitors%20showing%20retail%20analytics%20dashboards%20glowing%20data%20visualisations%20warm%20accent%20lighting%20minimalist%20interior%20design%20Sonic%20brand%20team%20reviewing%20live%20campaign%20data%20editorial%20corporate%20tech%20photography%202024%20premium%20atmosphere&width=1920&height=1080&seq=sonic-reels-hero-2024&orientation=landscape',
    accentImage:
      'https://readdy.ai/api/search-image?query=brand%20ambassador%20using%20slim%20tablet%20device%20showing%20Sonic%20SRT%20analytics%20app%20in%20retail%20store%20aisle%20real-time%20sales%20data%20displayed%20modern%20interface%20confident%20professional%202024%20commercial%20photography%20clean%20warm%20lighting%20tech%20forward%20human%20connection&width=800&height=600&seq=sonic-reels-accent-2024&orientation=landscape',
    milestones: ['SRT commercial launch, March 2024', 'Philips achieves #1 in Germany', 'Garmin +130% DACH revenue', '122-store Garmin network active', 'IFA Berlin — 8 simultaneous brands'],
    gallery: [
      { url: 'https://readdy.ai/api/search-image?query=SRT%20Sonic%20Retail%20Technology%20platform%20launch%20event%202024%20sleek%20modern%20conference%20room%20Cologne%20group%20of%20clients%20and%20Sonic%20team%20around%20large%20table%20with%20glowing%20screens%20presenting%20live%20retail%20analytics%20system%20premium%20corporate%20editorial%20photography%20warm%20dramatic&width=1200&height=800&seq=sonic-gallery-2024-1&orientation=landscape', caption: 'SRT platform commercial launch event, 2024', wide: true },
      { url: 'https://readdy.ai/api/search-image?query=Garmin%20brand%20activation%20specialist%20demonstrating%20premium%20smartwatch%20in%20MediaMarkt%202024%20modern%20clean%20retail%20stand%20high-resolution%20product%20display%20digital%20menu%20boards%20professional%20commercial%20photography%20confident%20skilled%20ambassador%20close%20up&width=600&height=800&seq=sonic-gallery-2024-2&orientation=portrait', caption: 'Garmin 122-location network launch, 2024' },
      { url: 'https://readdy.ai/api/search-image?query=Philips%20market%20research%20presentation%20Sonic%20leadership%20team%20applauding%20number%20one%20market%20position%20Germany%20chart%20showing%20market%20share%20growth%20dark%20premium%20boardroom%20editorial%20photography%20achievement%20celebration%202024%20dramatic&width=600&height=800&seq=sonic-gallery-2024-3&orientation=portrait', caption: 'Philips secures #1 in Germany, 2024' },
      { url: 'https://readdy.ai/api/search-image?query=Sonic%20brand%20ambassador%20team%20working%20IFA%20Berlin%202024%20latest%20technology%20pavilion%20massive%20Samsung%20and%20Bosch%20zones%20data%20tracking%20devices%20in%20hand%20real-time%20analytics%20cinematic%20wide%20angle%20photography%20electric%20atmosphere%20professional%20showroom&width=1200&height=700&seq=sonic-gallery-2024-4&orientation=landscape', caption: 'IFA Berlin — SRT-tracked activation, 2024', wide: true },
      { url: 'https://readdy.ai/api/search-image?query=Sonic%20company%20milestone%20photograph%20senior%20management%20Cologne%20rooftop%20golden%20hour%20professional%20achievement%20celebration%20celebratory%20moment%202024%20premium%20lifestyle%20corporate%20photography%20warm%20tones%20confident%20relaxed%20leadership%20team&width=600&height=600&seq=sonic-gallery-2024-5&orientation=squarish', caption: '€2B+ lifetime sales milestone, 2024' },
      { url: 'https://readdy.ai/api/search-image?query=close%20up%20of%20Sonic%20SRT%20mobile%20app%20showing%20real-time%20conversion%20rate%20per%20store%20location%20heatmap%20of%20Germany%20with%20glowing%20dots%20representing%20active%20promoters%20clean%20UI%20design%20dark%20mode%20professional%20tech%20product%20photography%202024&width=600&height=600&seq=sonic-gallery-2024-6&orientation=squarish', caption: 'SRT live performance map — DACH coverage' },
    ],
  },
  {
    id: 'era-2025',
    label: '2025',
    years: '2025',
    tagline: 'The Peak',
    yearTag: ['2', '5'],
    description:
      "By every metric Sonic tracks, 2025 is the best year in the company's history. 2,000+ active specialists. 150+ concurrent campaigns running across DACH. A 98% client retention rate that no agency in the sector comes close to matching. The POPAI Germany award for Best Promotions Agency arrived in September — voted by the brands themselves. The team celebrated for exactly one evening. Then started planning 2026.",
    heroImage:
      'https://readdy.ai/api/search-image?query=cinematic%20aerial%20drone%20photograph%20of%20Sonic%20Promotions%20largest%20ever%20team%20event%20outdoor%20arena%20Cologne%20summer%202025%20thousands%20of%20brand%20ambassadors%20on%20a%20large%20field%20branded%20shirts%20visible%20from%20above%20geometric%20patterns%20golden%20hour%20light%20epic%20scale%20commercial%20photography%20dramatic&width=1920&height=1080&seq=sonic-reels-hero-2025&orientation=landscape',
    accentImage:
      'https://readdy.ai/api/search-image?query=professional%20polished%20photograph%20of%20Sonic%20executive%20leadership%20team%20three%20people%20in%20modern%20glass-walled%20Cologne%20office%20confident%20smiling%20premium%20corporate%20portrait%20photography%202025%20natural%20light%20minimalist%20interior%20branded%20subtle&width=800&height=600&seq=sonic-reels-accent-2025&orientation=landscape',
    milestones: ['POPAI Best Agency — Germany', '2,000+ active specialists', '150+ concurrent campaigns', '98% client retention rate', 'Six flagship brand partnerships'],
    gallery: [
      { url: 'https://readdy.ai/api/search-image?query=massive%20Sonic%20brand%20promoters%20team%20photo%20outdoors%202025%20Germany%20hundreds%20of%20uniformed%20ambassadors%20in%20lime%20green%20and%20black%20colours%20arranged%20in%20formation%20corporate%20wide%20shot%20editorial%20photography%20proud%20unified%20team%20achievement&width=1200&height=800&seq=sonic-gallery-2025-1&orientation=landscape', caption: 'Sonic team — 2,000+ active ambassadors, 2025', wide: true },
      { url: 'https://readdy.ai/api/search-image?query=Samsung%20latest%20flagship%20smartphone%20premium%20launch%202025%20MediaMarkt%20Germany%20Sonic%20specialist%20conducting%20elegant%20demonstration%20with%20latest%20Galaxy%20device%20premium%20retail%20experience%20clean%20modern%20display%20editorial%20commercial%20photography%20high%20production%20value&width=600&height=800&seq=sonic-gallery-2025-2&orientation=portrait', caption: 'Samsung Galaxy flagship launch, 2025' },
      { url: 'https://readdy.ai/api/search-image?query=Philips%20personal%20care%20premium%20product%20launch%20in%20Galeria%20Kaufhof%202025%20elegant%20professional%20brand%20specialist%20demonstrating%20luxury%20grooming%20products%20to%20interested%20customers%20premium%20retail%20atmosphere%20clean%20minimalist%20display%20editorial%20photography&width=600&height=800&seq=sonic-gallery-2025-3&orientation=portrait', caption: 'Philips luxury activation — Galeria, 2025' },
      { url: 'https://readdy.ai/api/search-image?query=Sonic%20promotional%20agency%20awards%20ceremony%20gala%202025%20Cologne%20prestigious%20event%20hall%20champagne%20glasses%20stage%20multiple%20industry%20awards%20displayed%20lighting%20dramatic%20editorial%20photography%20achievement%20celebration%20luxury%20ambience&width=1200&height=700&seq=sonic-gallery-2025-4&orientation=landscape', caption: 'Sonic wins POPAI Best Agency — Germany, 2025', wide: true },
      { url: 'https://readdy.ai/api/search-image?query=Sonic%20new%20modern%20headquarters%20interior%202025%20Cologne%20open%20plan%20workspace%20large%20windows%20city%20view%20brand%20ambassadors%20and%20management%20in%20bright%20collaborative%20space%20premium%20interior%20design%20editorial%20corporate%20photography%20warm%20contemporary&width=600&height=600&seq=sonic-gallery-2025-5&orientation=squarish', caption: 'New HQ — Cologne, 2025' },
      { url: 'https://readdy.ai/api/search-image?query=Sonic%20team%20celebration%20rooftop%20party%20night%20sky%20Cologne%20skyline%20bottles%20of%20champagne%20popping%20confetti%20large%20group%20candid%20photojournalistic%20style%20vibrant%20celebration%20energy%202025%20authentic%20joy&width=600&height=600&seq=sonic-gallery-2025-6&orientation=squarish', caption: 'Year-end celebration, December 2025' },
    ],
  },
  {
    id: 'era-2026',
    label: '2026',
    years: '2026',
    tagline: 'The Horizon',
    yearTag: ['2', '6'],
    description:
      "The DACH market is won. The next question is: what does European retail activation look like when Sonic is the one defining it? SRT 2.0 goes into development with AI-powered performance prediction built in. The first international deployments are being scoped — Paris, Amsterdam, Warsaw. A new brand category is entering the portfolio. The decade ahead starts here.",
    heroImage:
      'https://readdy.ai/api/search-image?query=bold%20visionary%20architectural%20concept%20photograph%20of%20futuristic%20retail%20experience%20zone%20with%20advanced%20holographic%20product%20display%20digital%20signage%20ambient%20lighting%20premium%20brand%20activation%20space%20ultramodern%20design%20aesthetic%20editorial%20photography%20aspirational%202026%20forward-looking%20technology%20and%20human%20connection&width=1920&height=1080&seq=sonic-reels-hero-2026&orientation=landscape',
    accentImage:
      'https://readdy.ai/api/search-image?query=young%20Sonic%20brand%20ambassador%20woman%20using%20advanced%20augmented%20reality%20product%20demonstration%20glasses%20in%20modern%20retail%20environment%20future%20technology%20premium%20aspirational%20editorial%20photography%202026%20confident%20forward-looking%20warm%20lifestyle%20commercial&width=800&height=600&seq=sonic-reels-accent-2026&orientation=landscape',
    milestones: ['SRT 2.0 in development', 'Paris & Amsterdam pilots scoped', 'AI performance prediction layer', 'Health & Wellness brand category', 'European expansion roadmap active'],
    gallery: [
      { url: 'https://readdy.ai/api/search-image?query=architectural%20render%20concept%20modern%20Sonic%20Promotions%20flagship%20retail%20activation%20concept%20zone%20in%20Paris%20France%20cutting-edge%20holographic%20display%20technology%20digital%20brand%20experience%20premium%20futuristic%20interior%20design%20editorial%202026%20aspirational%20concept%20photography&width=1200&height=800&seq=sonic-gallery-2026-1&orientation=landscape', caption: 'Next chapter: Paris expansion concept, 2026', wide: true },
      { url: 'https://readdy.ai/api/search-image?query=SRT%202.0%20software%20interface%20design%20concept%20dark%20screen%20showing%20AI-powered%20sales%20prediction%20retail%20heat%20map%20real-time%20ambassador%20performance%20scoring%20next-generation%20analytics%20clean%20modern%20UI%20concept%20visual%20editorial%20photography%202026%20tech&width=600&height=800&seq=sonic-gallery-2026-2&orientation=portrait', caption: 'SRT 2.0 — AI-powered performance layer' },
      { url: 'https://readdy.ai/api/search-image?query=Sonic%20promotional%20company%20strategic%20planning%20session%202026%20senior%20team%20around%20large%20table%20with%20European%20expansion%20map%20holographic%20projection%20concept%20visual%20ambitious%20professional%20boardroom%20atmosphere%20premium%20editorial%20photography%20warm%20light&width=600&height=800&seq=sonic-gallery-2026-3&orientation=portrait', caption: 'European expansion strategy — 2026' },
      { url: 'https://readdy.ai/api/search-image?query=futuristic%20concept%20of%20brand%20ambassador%20using%20mixed%20reality%20headset%20to%20demonstrate%20product%20features%20to%20customer%20in%20sleek%20retail%20store%20digital%20product%20exploded%20view%20visible%20in%20AR%20space%20aspirational%20editorial%20commercial%20photography%202026&width=1200&height=700&seq=sonic-gallery-2026-4&orientation=landscape', caption: 'AR-enhanced product demonstration concept', wide: true },
      { url: 'https://readdy.ai/api/search-image?query=Sonic%20international%20team%20photo%20diverse%20promotional%20specialists%20from%20Germany%20France%20Spain%20Netherlands%20smiling%20together%20modern%20glass%20office%20building%20entrance%20editorial%20corporate%20photography%202026%20diverse%20professional%20team%20European%20expansion&width=600&height=600&seq=sonic-gallery-2026-5&orientation=squarish', caption: 'First international ambassador cohort' },
      { url: 'https://readdy.ai/api/search-image?query=close-up%20of%20Sonic%20company%20mission%20statement%20printed%20elegantly%20on%20dark%20wall%20of%20modern%20Cologne%20headquarters%20with%20subtle%20lime%20yellow%20accent%20light%20warm%20bokeh%20background%20premium%20interior%20brand%20photography%202026&width=600&height=600&seq=sonic-gallery-2026-6&orientation=squarish', caption: 'The mission continues.' },
    ],
  },
];

const eraNavItems = eras.map((e) => ({ id: e.id, label: e.label }));

// ── Film countdown splash ──────────────────────────────────────────────────
function FilmCountdown({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(4);
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    if (count <= 0) { onDone(); return; }
    const flickerT = setTimeout(() => setFlicker(true), 60);
    const flickerOff = setTimeout(() => setFlicker(false), 160);
    const next = setTimeout(() => setCount((c) => c - 1), 700);
    return () => { clearTimeout(flickerT); clearTimeout(flickerOff); clearTimeout(next); };
  }, [count, onDone]);

  return (
    <div
      className="fixed inset-0 z-system flex items-center justify-center overflow-hidden"
      style={{ background: flicker ? '#1a1a00' : '#0a0a0a' }}
    >
      {/* Film grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: flicker ? 0.12 : 0.05,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
        }}
      />
      {/* Sprocket holes left */}
      <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-around items-center py-4" style={{ background: '#1a1a1a' }}>
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className="rounded-[1px] border border-white/20" style={{ width: 14, height: 10, background: 'rgba(0,0,0,0.7)' }} />
        ))}
      </div>
      {/* Sprocket holes right */}
      <div className="absolute right-0 top-0 bottom-0 w-10 flex flex-col justify-around items-center py-4" style={{ background: '#1a1a1a' }}>
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className="rounded-[1px] border border-white/20" style={{ width: 14, height: 10, background: 'rgba(0,0,0,0.7)' }} />
        ))}
      </div>
      {/* Center countdown */}
      <div className="relative flex flex-col items-center gap-6">
        {/* Circle */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: 180,
            height: 180,
            border: '2px solid rgba(200,212,0,0.3)',
          }}
        >
          {/* Cross hairs */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-full h-px" style={{ background: 'rgba(200,212,0,0.15)' }} />
            <div className="absolute h-full w-px" style={{ background: 'rgba(200,212,0,0.15)' }} />
          </div>
          {/* Corner marks */}
          {[[-1,-1],[1,-1],[-1,1],[1,1]].map(([sx,sy], i) => (
            <div key={i} className="absolute" style={{ top: sy === -1 ? 8 : 'auto', bottom: sy === 1 ? 8 : 'auto', left: sx === -1 ? 8 : 'auto', right: sx === 1 ? 8 : 'auto' }}>
              <div style={{ width: 12, height: 12, borderTop: sy === -1 ? '2px solid rgba(200,212,0,0.6)' : 'none', borderBottom: sy === 1 ? '2px solid rgba(200,212,0,0.6)' : 'none', borderLeft: sx === -1 ? '2px solid rgba(200,212,0,0.6)' : 'none', borderRight: sx === 1 ? '2px solid rgba(200,212,0,0.6)' : 'none' }} />
            </div>
          ))}
          {count > 0 ? (
            <span
              key={count}
              className="font-black"
              style={{
                fontSize: '7rem',
                color: flicker ? '#C8D400' : 'rgba(255,255,255,0.9)',
                fontFamily: '"Bebas Neue", Impact, sans-serif',
                lineHeight: 1,
                animation: 'countPop 0.3s ease-out',
              }}
            >
              {count}
            </span>
          ) : (
            <i className="ri-film-line text-[#C8D400]" style={{ fontSize: '4rem' }} />
          )}
        </div>
        <span
          className="font-black uppercase tracking-[0.5em]"
          style={{ fontSize: '0.6rem', color: 'rgba(200,212,0,0.5)', fontFamily: 'monospace' }}
        >
          SONIC REELS · ARCHIV
        </span>
      </div>
      <style>{`
        @keyframes countPop {
          from { transform: scale(1.3); opacity: 0.5; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default function SonicReelsPage() {
  const [showCountdown, setShowCountdown] = useState(true);
  const [splashVisible, setSplashVisible] = useState(false);
  const [activeEraIndex, setActiveEraIndex] = useState(0);
  const [showHighlights, setShowHighlights] = useState(false);

  const handleCountdownDone = useCallback(() => {
    setShowCountdown(false);
    setTimeout(() => setSplashVisible(true), 100);
  }, []);

  const handleEraChange = useCallback((index: number) => {
    setActiveEraIndex(index);
  }, []);

  const handleEraNavClick = (id: string) => {
    const idx = eras.findIndex((e) => e.id === id);
    if (idx >= 0) setActiveEraIndex(idx);
  };

  const activeEraId = eras[activeEraIndex]?.id ?? eras[0].id;

  return (
    <div className="bg-[#111] overflow-x-hidden">
      {showCountdown && <FilmCountdown onDone={handleCountdownDone} />}

      <Navigation />

      {/* ── SPLASH HERO ── */}
      <div
        className="relative flex flex-col items-center justify-center overflow-hidden"
        style={{ background: '#111', minHeight: '320px', padding: '48px 0' }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(200,212,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,212,0,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Film grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px',
          }}
        />
        {/* Big BG text */}
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden" aria-hidden="true">
          <span className="font-black text-white/[0.025] leading-none" style={{ fontSize: 'clamp(5rem, 16vw, 16rem)' }}>SONIC</span>
        </div>

        <div
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
          style={{ opacity: splashVisible ? 1 : 0, transform: splashVisible ? 'none' : 'translateY(24px)', transition: 'all 1s ease' }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-[#C8D400]/50" />
            <span className="text-[#C8D400] text-xs font-black uppercase tracking-[0.4em]">2007 — Present</span>
            <div className="h-px w-10 bg-[#C8D400]/50" />
          </div>
          <h1 className="font-black text-white leading-none uppercase" style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)' }}>Sonic</h1>
          <h1 className="font-black leading-none uppercase" style={{ fontSize: 'clamp(2.8rem, 8vw, 7rem)', color: '#C8D400' }}>Reels</h1>
          <p className="text-white/50 text-base font-medium max-w-xl mx-auto mt-6 leading-relaxed">
            Nearly two decades of retail activation across Europe —<br />told through the moments that defined us.
          </p>
          <button
            onClick={() => setSplashVisible(false)}
            className="mt-14 group flex flex-col items-center gap-2 cursor-pointer mx-auto"
            style={{ opacity: splashVisible ? 1 : 0, transition: 'opacity 0.5s ease 0.8s' }}
          >
            <span className="text-white/40 text-xs font-black uppercase tracking-widest">Scroll to begin</span>
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-[#C8D400] transition-colors">
              <i className="ri-arrow-down-line text-white/50 group-hover:text-[#C8D400] transition-colors animate-bounce" />
            </div>
          </button>
        </div>


      </div>

      {/* ── ERA NAV ── */}
      <EraNav
        eras={eraNavItems}
        activeEra={activeEraId}
        activeIndex={activeEraIndex}
        totalEras={eras.length}
        onEraClick={handleEraNavClick}
        onHighlightsClick={() => setShowHighlights(true)}
      />

      {/* ── PHOTO ALBUM — single fullscreen experience ── */}
      <PhotoAlbum
        eras={eras}
        activeEraIndex={activeEraIndex}
        onEraChange={handleEraChange}
        showHighlights={showHighlights}
        onHighlightsClose={() => setShowHighlights(false)}
      />

      {/* ── END CARD ── */}
      <div className="py-32 px-6 text-center relative overflow-hidden" style={{ background: '#111' }}>
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <span className="font-black text-white/[0.025] leading-none" style={{ fontSize: 'clamp(5rem, 18vw, 18rem)' }}>2007+</span>
        </div>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px',
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-[#C8D400]/30" />
            <span className="text-[#C8D400] text-xs font-black uppercase tracking-[0.4em]">The story continues</span>
            <div className="h-px w-16 bg-[#C8D400]/30" />
          </div>
          <p className="text-white/50 text-lg leading-relaxed font-medium mb-10">
            Every era added a chapter. Every campaign wrote a sentence.<br />The next line starts with you.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#C8D400] text-[#111] font-black uppercase tracking-wider hover:bg-white hover:text-[#111] transition-all duration-300 cursor-pointer whitespace-nowrap"
          >
            Start the Next Chapter
            <i className="ri-arrow-right-line text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
}
