import { useState, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import { submitContactForm } from '@/lib/contact';
import Navigation from '../../components/feature/Navigation';
import ClientProof from '../../components/feature/ClientProof';
import WoodenDivider from '../../components/base/WoodenDivider';
import { CONTACT_EMAIL } from '@/lib/contact';

/* ─────────────────────────────────────────
   SOLUTION DATA — exact content from brief
───────────────────────────────────────── */
const SOLUTIONS = {
  markteintritt: {
    id: 'markteintritt',
    label: 'Markteintritt',
    icon: 'ri-rocket-line',
    title: 'Neu im Markt. Maximale Sichtbarkeit',
    subtitle: 'Wir machen Erklärungsbedürftiges erlebbar',
    description:
      'Dein Produkt ist kaufbereit, aber noch unbekannt? Wir ändern das und bereichern deine Go-to-Market-Strategie: Mit Menschen, die deine Marke verstehen und sie am Point of Sale, per Video und bei Events zum Leben erwecken. Datenbasiert geplant, live reportet, messbar erfolgreich.',
    challenges: [
      {
        icon: 'ri-shield-cross-line',
        title: 'Kein Vertrauen',
        desc: 'Konsumenten greifen zu dem, was sie kennen. Neue Marken müssen Vertrauen erst aufbauen: persönlich, erklärend, überzeugend.',
      },
      {
        icon: 'ri-eye-off-line',
        title: 'Kein Regalplatz im Kopf',
        desc: 'Sichtbarkeit im Regal garantiert keinen Abverkauf. Neue Marken und Produkte sind nicht im Relevant Set der Konsumenten. Noch nicht.',
      },
      {
        icon: 'ri-feedback-line',
        title: 'Keine Feedback-Schleife',
        desc: 'Wer beim Launch am POS nicht misst, welche Argumentationen in welchen Outlets und bei welchen Käufergruppen funktionieren, arbeitet im Blindflug.',
      },
    ],
    deliverables: [
      { icon: 'ri-user-star-line', title: 'Brand Ambassadors am POS', desc: 'Geschulte Markenbotschafter aus unserem Talentepool. Festangestellt, keine Freelancer. Trainiert auf dein Produkt, leidenschaftlich im Kundenkontakt.', img: '/images/losungen/ambassador.png' },
      { icon: 'ri-presentation-line', title: 'Verkäuferschulungen', desc: 'Deine Handelspartner sollen Fans deiner Marke werden. Wir begeistern sie mit Schulungen, die im Gedächtnis bleiben.', img: 'https://readdy.ai/api/search-image?query=professional%20sales%20training%20workshop%20group%20of%20retail%20staff%20learning%20product%20knowledge%20in%20modern%20conference%20room%20presenter%20at%20whiteboard%20engaged%20audience%20corporate%20training&width=800&height=500&seq=deliv-mkt-2&orientation=landscape' },
      { icon: 'ri-calendar-event-line', title: 'Launch-Events & Promotions', desc: 'Wir inszenieren deinen Auftritt: Roadshows, Instore-Events, Produkt-Demos. Dort, wo deine Zielgruppe einkauft. Konzept, Personal, Logistik: alles aus einer Hand.', img: 'https://readdy.ai/api/search-image?query=exciting%20product%20launch%20event%20in%20retail%20store%20with%20branded%20displays%20crowd%20of%20shoppers%20promotional%20staff%20demonstrating%20new%20product%20vibrant%20atmosphere%20professional%20event%20setup&width=800&height=500&seq=deliv-mkt-3&orientation=landscape' },
      { icon: 'ri-video-line', title: 'Videocontent & Live-Beratung', desc: 'Erklärvideos, Social Content und Live-Video-Calls. Damit dein Produkt auch digital erlebbar ist. Vom Unboxing bis zur persönlichen Kaufberatung.', img: '/images/losungen/video.png' },
      { icon: 'ri-store-2-line', title: 'POS-Design & Aufbau', desc: 'Displays, Shop-in-Shops, Collateral, Give-aways: Wir gestalten und bestücken deine Fläche. End-to-end. Inklusive Lagerung in unserem eigenen Warehouse.', img: 'https://readdy.ai/api/search-image?query=premium%20retail%20point%20of%20sale%20display%20design%20shop%20in%20shop%20setup%20elegant%20branded%20display%20stand%20with%20products%20modern%20retail%20interior%20professional%20merchandising%20clean%20design&width=800&height=500&seq=deliv-mkt-5&orientation=landscape' },
      { icon: 'ri-bar-chart-box-line', title: 'Datenbasierte Planung', desc: 'Über das Sonic Reporting Tool (SRT) identifizieren wir Märkte und Standorte mit dem größten Potenzial für deinen Launch. Keine Bauchentscheidungen, sondern Daten.', img: '/images/losungen/dashboard.png' },
      { icon: 'ri-dashboard-line', title: 'Live-Reporting', desc: 'Vom ersten Einsatztag an siehst du in Echtzeit, was passiert: Kontakte, Verkäufe, Feedback, Zielerreichung, Wunsch-KPIs. In deinem persönlichen Dashboard.', img: 'https://readdy.ai/api/search-image?query=real%20time%20reporting%20dashboard%20on%20tablet%20and%20laptop%20showing%20live%20sales%20metrics%20KPI%20charts%20performance%20data%20modern%20business%20analytics%20interface%20clean%20design&width=800&height=500&seq=deliv-mkt-7&orientation=landscape' },
    ],
    steps: [
      { num: '01', title: 'Briefing & Markenverständnis', desc: 'Wir lernen dein Produkt kennen, als wäre es unseres: Positionierung, Zielgruppe, Wettbewerbsumfeld, Retail-Landschaft. Wir verstehen, was dein Produkt besonders macht und warum es gekauft werden soll.', img: 'https://readdy.ai/api/search-image?query=professional%20business%20briefing%20meeting%20team%20around%20table%20with%20brand%20strategy%20documents%20product%20samples%20whiteboard%20notes%20collaborative%20workshop%20modern%20office%20bright%20natural%20light&width=900&height=500&seq=step-mkt-1&orientation=landscape' },
      { num: '02', title: 'Standort- & Einsatzplanung', desc: 'Das SRT liefert die Datenbasis: Wo ist das Potenzial am größten? Welche Handelspartner passen? Welche Zeitfenster? Welche Personalstärke? Du bekommst einen datenbasierten Rollout-Plan.', img: 'https://readdy.ai/api/search-image?query=strategic%20location%20planning%20map%20on%20large%20screen%20with%20data%20overlays%20retail%20store%20locations%20marked%20team%20analyzing%20deployment%20strategy%20modern%20office%20setting%20professional%20planning%20session&width=900&height=500&seq=step-mkt-2&orientation=landscape' },
      { num: '03', title: 'Team-Aufbau & Schulung', desc: 'Wir rekrutieren und schulen dein Launch-Team aus unserem Pool von 2.000 Talenten. Festangestellt, motiviert und mit Intensivtraining auf dein Produkt.', img: 'https://readdy.ai/api/search-image?query=brand%20ambassador%20team%20training%20session%20group%20of%20young%20professionals%20learning%20product%20knowledge%20enthusiastic%20trainer%20modern%20training%20room%20corporate%20environment%20engaged%20participants&width=900&height=500&seq=step-mkt-3&orientation=landscape' },
      { num: '04', title: 'Launch & Aktivierung', desc: 'POS-Aufbau, Promotions, Events, Videoproduktion: Dein Markteintritt, orchestriert über alle Retail-Touchpoints. Koordiniert. Durchgetaktet. Sichtbar.', img: 'https://readdy.ai/api/search-image?query=product%20launch%20activation%20at%20retail%20store%20multiple%20brand%20ambassadors%20at%20branded%20display%20stands%20customers%20engaging%20with%20products%20busy%20retail%20environment%20professional%20execution&width=900&height=500&seq=step-mkt-4&orientation=landscape' },
      { num: '05', title: 'Tracking & Optimierung', desc: 'Live-Dashboards ab Tag 1. Was funktioniert, wird skaliert. Was nicht performt, wird angepasst. Du bekommst laufende Reviews und Handlungsempfehlungen. Nicht erst am Projektende.', img: 'https://readdy.ai/api/search-image?query=performance%20review%20meeting%20team%20analyzing%20live%20dashboard%20data%20on%20large%20screen%20discussing%20optimization%20strategies%20modern%20office%20professional%20business%20review%20session%20charts%20metrics&width=900&height=500&seq=step-mkt-5&orientation=landscape' },
    ],
    stats: [
      { value: '>120', label: 'Produktlaunches begleitet' },
      { value: '>2.000', label: 'Talente im Pool' },
      { value: '>30', label: 'Marken erfolgreich eingeführt' },
      { value: '100 %', label: 'Live-Transparenz ab Tag 1' },
    ],
    testimonial: {
      quote: 'Seit 2021 verbindet GARMIN und SONIC eine erfolgreiche Partnerschaft im Bereich Verkaufsunterstützung am POS. Wir empfehlen Sonic uneingeschränkt weiter.',
      author: 'Dana Eichinger',
      role: 'Director Marketing DACH, Garmin Deutschland GmbH',
      brand: 'Garmin',
      img: 'https://readdy.ai/api/search-image?query=Garmin%20GPS%20smartwatch%20fitness%20tracker%20retail%20display%20in%20modern%20electronics%20store%20professional%20brand%20ambassador%20demonstrating%20device%20features%20to%20customer%20premium%20retail%20environment%20bright%20lighting&width=1200&height=700&seq=testimonial-garmin-v2&orientation=landscape',
    },
    finalCta: 'Bereit für deinen Markteintritt? Lass uns in 30 Minuten klären, wie dein Launch aussehen kann.',
    ctaLabel: 'Markteintritt planen',
    link: '/services/market-entry',
  },
  absatz: {
    id: 'absatz',
    label: 'Absatz steigern',
    icon: 'ri-line-chart-line',
    title: 'Produkt im Regal. Sell-out über Plan',
    subtitle: 'Profitabel Verkaufsziele erreichen.',
    description:
      'Unsere Field-Force-Teams sind deine verlängerte Vertriebsmannschaft am POS: Sie beraten, überzeugen und verkaufen. Daten- und ROI-getrieben geplant, lückenlos reportet. Du weißt vorher, was du erwarten kannst. Und siehst in Echtzeit, was passiert.',
    challenges: [
      {
        icon: 'ri-store-line',
        title: 'Fläche ohne Wirkung',
        desc: 'Unterbesetzte Flächen, Mitbewerber mit mehr Präsenz, Handelspartner, die dein Produkt nicht priorisieren. Präsenz allein verkauft nicht.',
      },
      {
        icon: 'ri-eye-off-line',
        title: 'Blindflug ohne Daten',
        desc: 'Quartalsberichte kommen zu spät. Saisonale Schwankungen erkennt man erst im Rückspiegel. Was heute auf der Fläche passiert, erfährst du in Wochen.',
      },
      {
        icon: 'ri-money-euro-circle-line',
        title: 'WKZ ohne ROI',
        desc: 'Budget fließt in Werbekostenzuschüsse und Promotions. Aber was kommt dabei raus? Ohne Echtzeit-Tracking kennt man die ROI-Zahlen zu spät.',
      },
    ],
    deliverables: [
      { icon: 'ri-user-star-line', title: 'Menschen auf der Fläche', desc: 'Festangestellte Promoter, die dein Produkt kennen und lieben. Echte Markenbotschafter, mit Motivation, Produktwissen und Live-Einblick in ihre eigene Zielerreichung.', img: '/images/losungen/ambassador.png' },
      { icon: 'ri-bar-chart-2-line', title: 'Daten in der Planung', desc: 'Mit dem Sonic Reporting Tool (SRT) analysieren wir Marktpotenziale, Standort-Performance und historische Sell-out-Daten. Einsätze werden dort geplant, wo sie den größten ROI liefern.', img: '/images/losungen/dashboard.png' },
      { icon: 'ri-dashboard-line', title: 'Transparenz im Dashboard', desc: 'Du siehst jederzeit: Wo sind unsere Leute, mit GPS-genauem Standort. Was haben sie heute verkauft. Wie performen sie gegen dein Ziel. Live. Ohne Excel. Ohne Warten auf Reports.', img: 'https://readdy.ai/api/search-image?query=live%20GPS%20tracking%20dashboard%20showing%20field%20force%20locations%20on%20city%20map%20real%20time%20sales%20performance%20metrics%20modern%20business%20intelligence%20interface%20tablet%20and%20desktop%20view&width=800&height=500&seq=deliv-abs-3&orientation=landscape' },
      { icon: 'ri-search-eye-line', title: 'Forecasting', desc: 'Auf Basis unserer historischen Daten prognostizieren wir Sell-out-Ergebnisse. Bevor der erste Einsatz startet. Du weißt vorher, was du erwarten kannst.', img: 'https://readdy.ai/api/search-image?query=sales%20forecasting%20model%20on%20screen%20showing%20predicted%20revenue%20curves%20trend%20analysis%20charts%20professional%20business%20forecasting%20software%20modern%20office%20data%20science%20team&width=800&height=500&seq=deliv-abs-4&orientation=landscape' },
      { icon: 'ri-map-pin-2-line', title: 'Einsatzplanung', desc: 'Standorte, Zeitfenster, Personalstärke: Alles datenbasiert optimiert. Skalierbar von 10 auf 500 Einsätze pro Woche. Das SRT berücksichtigt Saisonalität, Standort-Historie und Team-Performance.', img: 'https://readdy.ai/api/search-image?query=field%20force%20deployment%20planning%20map%20with%20store%20locations%20staffing%20schedule%20calendar%20view%20professional%20operations%20planning%20software%20retail%20coverage%20optimization%20modern%20interface&width=800&height=500&seq=deliv-abs-5&orientation=landscape' },
      { icon: 'ri-file-chart-line', title: 'Performance-Tracking', desc: 'Jeder Einsatz wird im SRT dokumentiert: Kontakte, Verkäufe, Zielerreichung. Tagesaktuell. Als Live-Dashboard, auf das du jederzeit zugreifen kannst.', img: 'https://readdy.ai/api/search-image?query=daily%20performance%20tracking%20report%20on%20tablet%20showing%20sales%20contacts%20achieved%20targets%20green%20metrics%20live%20data%20retail%20field%20force%20performance%20dashboard%20clean%20modern%20design&width=800&height=500&seq=deliv-abs-6&orientation=landscape' },
      { icon: 'ri-store-2-line', title: 'Sell-in-Support', desc: 'Unsere Teams unterstützen auch im Sell-in: Schulungen für Handelspersonal, Regalpflege, Zweitplatzierungen, Warenpräsentation. Damit dein Produkt nicht nur im Regal steht, sondern auch verkauft wird.', img: 'https://readdy.ai/api/search-image?query=retail%20shelf%20merchandising%20professional%20arranging%20products%20on%20store%20shelf%20secondary%20placement%20display%20optimization%20trade%20partner%20training%20modern%20supermarket%20electronics%20store&width=800&height=500&seq=deliv-abs-7&orientation=landscape' },
      { icon: 'ri-refresh-line', title: 'Kontinuierliche Optimierung', desc: 'Laufende Reviews, Schwachstellen-Analyse, Team-Rotation, Standort-Shifts: Wir optimieren laufend, nicht erst am Quartalsende.', img: 'https://readdy.ai/api/search-image?query=continuous%20improvement%20review%20meeting%20team%20analyzing%20performance%20data%20whiteboard%20with%20optimization%20strategies%20professional%20business%20review%20modern%20office%20setting&width=900&height=500&seq=deliv-abs-8&orientation=landscape' },
    ],
    steps: [
      { num: '01', title: 'Analyse & Zielsetzung', desc: 'Wir analysieren deine aktuelle Retail-Situation: Wo stehst du? Wo willst du hin? Gemeinsam definieren wir messbare Ziele wie Sell-out-Stückzahlen, Umsatz, ROI.', img: 'https://readdy.ai/api/search-image?query=retail%20situation%20analysis%20workshop%20team%20reviewing%20current%20market%20position%20data%20charts%20on%20screen%20defining%20measurable%20sales%20goals%20professional%20strategy%20session%20modern%20office&width=900&height=500&seq=step-abs-1&orientation=landscape' },
      { num: '02', title: 'Forecasting & Planung', desc: 'Das SRT liefert die Prognose: Welche Standorte versprechen den größten Hebel? Wie viele Einsätze brauchst du? Welche Personalstärke? Du bekommst einen belastbaren Plan mit erwartbarem Ergebnis.', img: 'https://readdy.ai/api/search-image?query=sales%20forecast%20planning%20session%20with%20data%20model%20on%20screen%20showing%20location%20potential%20ROI%20projections%20staffing%20requirements%20professional%20planning%20meeting%20modern%20office%20environment&width=900&height=500&seq=step-abs-2&orientation=landscape' },
      { num: '03', title: 'Team-Aufstellung & Training', desc: 'Wir stellen dein Team aus unserem Pool zusammen. Festangestellte Talente, trainiert auf dein Produkt, gebrieft auf deine Ziele. Inklusive Onboarding, Produktschulung und laufendem Coaching.', img: 'https://readdy.ai/api/search-image?query=field%20force%20team%20assembly%20and%20product%20training%20session%20group%20of%20motivated%20sales%20promoters%20learning%20brand%20knowledge%20professional%20trainer%20modern%20training%20facility%20corporate%20environment&width=900&height=500&seq=step-abs-3&orientation=landscape' },
      { num: '04', title: 'Rollout & Aktivierung', desc: 'Deine Field Force geht auf die Fläche. Koordiniert über das SRT, getrackt in Echtzeit. Sell-out, Sell-in, Schulungen, Regalpflege – je nach Projektscope.', img: 'https://readdy.ai/api/search-image?query=field%20force%20rollout%20multiple%20brand%20promoters%20at%20different%20retail%20locations%20coordinated%20activation%20sell-out%20campaign%20busy%20retail%20stores%20professional%20execution%20nationwide%20coverage&width=900&height=500&seq=step-abs-4&orientation=landscape' },
      { num: '05', title: 'Live-Tracking & Skalierung', desc: 'Ab Tag 1 läuft das Reporting. Was funktioniert, wird skaliert. Optimierungspotenziale werden erkannt und können genutzt werden. Reviews sorgen für kontinuierliche Verbesserung.', img: 'https://readdy.ai/api/search-image?query=live%20performance%20tracking%20and%20scaling%20review%20meeting%20team%20analyzing%20real%20time%20dashboard%20data%20identifying%20optimization%20opportunities%20professional%20business%20review%20modern%20office%20data%20driven%20decisions&width=900&height=500&seq=step-abs-5&orientation=landscape' },
    ],
    stats: [
      { value: '>3,7 Mio.', label: 'Produkte verkauft' },
      { value: '>2 Mrd. €', label: 'Umsatz generiert' },
      { value: '>1,35 Mio.', label: 'Einsätze durchgeführt' },
      { value: '100 %', label: 'Live-Transparenz via SRT' },
    ],
    testimonial: {
      quote: 'The Sonic team didn\'t just meet our ambitious targets — they redefined what\'s possible in retail activation. Exceptional execution across every channel.',
      author: 'Dr. Sarah Mitchell',
      role: 'Director of Retail Strategy EMEA, Samsung Electronics',
      brand: 'Samsung',
      img: 'https://readdy.ai/api/search-image?query=Samsung%20premium%20smartphone%20display%20in%20modern%20electronics%20retail%20store%20professional%20brand%20ambassador%20demonstrating%20latest%20mobile%20device%20to%20customer%20sleek%20display%20tables%20bright%20lighting%20contemporary%20retail%20environment&width=1200&height=700&seq=testimonial-samsung-v2&orientation=landscape',
    },
    finalCta: 'Bereit, deinen Absatz zu steigern? Lass uns in 30 Minuten klären, wie dein Projekt aussehen kann.',
    ctaLabel: 'Absatz steigern planen',
    link: '/services/retail-pos',
  },
  omnichannel: {
    id: 'omnichannel',
    label: 'Omnichannel',
    icon: 'ri-global-line',
    title: 'Human Power in allen Kanälen',
    subtitle: 'Conversions steigern. Retouren vermeiden. Kunden begeistern.',
    description:
      'Die größte Schwachstelle im Omnichannel? Beratung. Unsere Lösung: (Live-)Video-Kaufberatung, erreichbar im Online-Shop oder per QR-Code auf der Verpackung am POS-Display. Echte Menschen. Echte Beratung. Auch in Echtzeit.',
    challenges: [
      {
        icon: 'ri-chat-off-line',
        title: 'Online fehlt das Gespräch',
        desc: 'Produkttexte und Rezensionen ersetzen kein Verkaufsgespräch. Ein Gegenüber, das Fragen live beantwortet, erleichtert den Kauf.',
      },
      {
        icon: 'ri-user-unfollow-line',
        title: 'Am POS fehlt das Personal',
        desc: 'Nicht jeder Markt hat geschultes Fachpersonal. In vielen Outlets steht kein Berater für dein Produkt. Die Kaufentscheidung fällt ohne dich.',
      },
      {
        icon: 'ri-arrow-go-back-line',
        title: 'Retouren fressen die Marge',
        desc: 'Wer online ohne Beratung kauft, kauft öfter falsch. Die Folge: Retouren, Unzufriedenheit, Margenverlust. Beratung managt Erwartungen.',
      },
    ],
    deliverables: [
      { icon: 'ri-shopping-cart-line', title: 'Im Online-Shop', desc: 'Ein Button oder Widget im Shop startet die Live-Video-Beratung oder Verkaufsvideos. Wie im Laden, nur digital. Die Conversion steigt, die Retourenquote sinkt. Plus Cross- und Upselling-Potenzial.', img: '/images/losungen/video.png' },
      { icon: 'ri-qr-code-line', title: 'Auf der Verpackung', desc: 'QR-Code scannen, Live-Video-Call mit einem Produktexperten starten. Beratung genau dort, wo die Kaufentscheidung fällt. Der direkteste Weg von der Verpackung zum Verkaufsgespräch.', img: 'https://readdy.ai/api/search-image?query=customer%20scanning%20QR%20code%20on%20product%20packaging%20with%20smartphone%20connecting%20to%20live%20video%20advisor%20product%20expert%20consultation%20at%20point%20of%20purchase%20modern%20retail%20packaging%20design&width=800&height=500&seq=deliv-omni-2&orientation=landscape' },
      { icon: 'ri-tablet-line', title: 'Am POS-Display', desc: 'Kein Berater vor Ort? Kein Problem. Über Displays, Tablets oder QR-Codes am Regal verbinden sich Kunden live mit unseren Video-Experten. Fachberatung auf Knopfdruck.', img: 'https://readdy.ai/api/search-image?query=interactive%20tablet%20display%20at%20retail%20shelf%20customer%20using%20touchscreen%20to%20connect%20with%20live%20video%20product%20expert%20modern%20retail%20technology%20digital%20advisory%20kiosk%20in%20store&width=800&height=500&seq=deliv-omni-3&orientation=landscape' },
      { icon: 'ri-user-star-line', title: 'Geschulte Video-Berater', desc: 'Aus unserem Talentepool, trainiert auf dein Produkt, dein Branding. Festangestellt, keine Freelancer.', img: '/images/losungen/video.png' },
      { icon: 'ri-customer-service-2-line', title: 'Multitalente', desc: 'Unsere Talente können nicht nur beraten und verkaufen, sie können auch Kundensupport. Eine Video-Hotline, viele Funktionen: Pre-Sales, After-Sales, Service, Troubleshooting.', img: 'https://readdy.ai/api/search-image?query=versatile%20customer%20service%20team%20handling%20multiple%20video%20calls%20pre-sales%20after-sales%20support%20troubleshooting%20modern%20call%20center%20with%20video%20capabilities%20professional%20branded%20environment&width=800&height=500&seq=deliv-omni-5&orientation=landscape' },
      { icon: 'ri-settings-3-line', title: 'Technische Integration', desc: 'QR-Codes, Shop-Widgets, POS-Displays, Einbettung in deine bestehende Infrastruktur: Wir liefern die Anbindung. Keine IT-Projekte auf deiner Seite.', img: 'https://readdy.ai/api/search-image?query=seamless%20technical%20integration%20diagram%20showing%20QR%20code%20shop%20widget%20POS%20display%20connections%20to%20existing%20infrastructure%20clean%20technology%20architecture%20visualization%20modern%20digital%20ecosystem&width=800&height=500&seq=deliv-omni-6&orientation=landscape' },
      { icon: 'ri-bar-chart-line', title: 'Reporting', desc: 'Jeder Call wird getrackt: Dauer, Ergebnis, Kundenzufriedenheit, Kaufabschluss. In deinem persönlichen Dashboard im SRT.', img: '/images/losungen/dashboard.png' },
      { icon: 'ri-scales-line', title: 'Skalierbarkeit', desc: 'Von 100 auf 10.000 Calls pro Monat. Wir skalieren das Team, die Schichtpläne und die Technik mit deinem Bedarf. Saisonal, kampagnengetrieben oder dauerhaft.', img: 'https://readdy.ai/api/search-image?query=scalable%20video%20advisory%20team%20growing%20from%20small%20to%20large%20operation%20multiple%20advisors%20in%20modern%20studio%20environment%20flexible%20staffing%20seasonal%20scaling%20professional%20setup&width=800&height=500&seq=deliv-omni-8&orientation=landscape' },
    ],
    steps: [
      { num: '01', title: 'Pilotkonzept & Produktschulung', desc: 'Wir definieren gemeinsam den Scope: Welche Produkte? Welche Zielgruppen? Welches Volumen? Statische Videos, Live-Video oder beides? Dann schulen wir unser Team auf dein Produkt, dein Branding und deine Tonalität.', img: 'https://readdy.ai/api/search-image?query=pilot%20concept%20workshop%20team%20defining%20video%20advisory%20scope%20product%20selection%20target%20audience%20volume%20planning%20modern%20meeting%20room%20collaborative%20strategy%20session%20professional%20environment&width=900&height=500&seq=step-omni-1&orientation=landscape' },
      { num: '02', title: 'Technische Integration', desc: 'QR-Codes für Verpackungen, Widget für den Online-Shop, Anbindung an POS-Displays: Wir richten die Technik ein. Schnelle Integration, kein Overhead auf deiner Seite.', img: 'https://readdy.ai/api/search-image?query=technical%20integration%20setup%20QR%20code%20generation%20shop%20widget%20installation%20POS%20display%20configuration%20fast%20seamless%20technology%20deployment%20professional%20IT%20setup%20modern%20digital%20infrastructure&width=900&height=500&seq=step-omni-2&orientation=landscape' },
      { num: '03', title: 'Go-Live & Pilotphase', desc: 'Dein Live-Video-Kanal geht live. Wir starten mit einem definierten Pilotumfang, sammeln Daten, messen Performance und optimieren in den ersten Wochen.', img: 'https://readdy.ai/api/search-image?query=live%20video%20advisory%20channel%20launch%20first%20customer%20calls%20going%20live%20team%20monitoring%20performance%20data%20pilot%20phase%20launch%20day%20excitement%20professional%20video%20studio%20environment&width=900&height=500&seq=step-omni-3&orientation=landscape' },
      { num: '04', title: 'Tracking, Optimierung & Skalierung', desc: 'Live-Dashboards ab Tag 1. Was funktioniert, wird skaliert. Alles andere wird optimiert.', img: 'https://readdy.ai/api/search-image?query=video%20advisory%20performance%20optimization%20team%20analyzing%20call%20metrics%20scaling%20successful%20channels%20improving%20underperforming%20ones%20live%20dashboard%20review%20modern%20office%20data%20driven%20decisions&width=900&height=500&seq=step-omni-4&orientation=landscape' },
    ],
    stats: [
      { value: '>50.000', label: '1:1 Live Video Calls absolviert' },
      { value: 'Ø 12 Min.', label: 'Durchschnittliche Beratungsdauer' },
      { value: '4,7/5', label: 'Kundenzufriedenheit' },
      { value: '100 %', label: 'Managed Service – du brauchst nichts Eigenes' },
    ],
    testimonial: {
      quote: 'Sonic transformed our live video advisory experience. Their team delivered measurable conversion uplift from day one — exactly what we needed.',
      author: 'Head of E-Commerce',
      role: 'Avoury – Tea Experience Brand',
      brand: 'Avoury',
      img: 'https://readdy.ai/api/search-image?query=premium%20tea%20brand%20live%20video%20consultation%20customer%20connecting%20with%20tea%20expert%20advisor%20elegant%20product%20display%20sophisticated%20lifestyle%20brand%20experience%20modern%20digital%20advisory%20setup&width=1200&height=700&seq=testimonial-avoury-v2&orientation=landscape',
    },
    finalCta: 'Bereit, deine Omnichannel-Lücke zu schließen? Lass uns in 30 Minuten klären, wie Video deine Conversion steigert.',
    ctaLabel: 'Omnichannel-Strategie planen',
    link: '/leistungen/live-video',
  },
};

type SolutionKey = keyof typeof SOLUTIONS;
const KEYS: SolutionKey[] = ['markteintritt', 'absatz', 'omnichannel'];

/* ─────────────────────────────────────────
   EXPANDED PANEL
───────────────────────────────────────── */
function ExpandedPanel({ sKey, onClose, carouselRef }: { sKey: SolutionKey; onClose: () => void; carouselRef: React.RefObject<HTMLDivElement> }) {
  const s = SOLUTIONS[sKey];
  const [activeDeliverable, setActiveDeliverable] = useState(0);
  const [delivFade, setDelivFade] = useState(true);

  const heroImages: Record<SolutionKey, string> = {
    markteintritt:
      'https://readdy.ai/api/search-image?query=dynamic%20brand%20launch%20event%20at%20modern%20retail%20store%20multiple%20brand%20ambassadors%20engaging%20customers%20with%20new%20product%20displays%20vibrant%20energy%20professional%20activation%20team%20in%20action%20contemporary%20retail%20environment%20dramatic%20lighting%20cinematic%20atmosphere&width=1920&height=800&seq=hero-mkt-expanded-v2&orientation=landscape',
    absatz:
      'https://readdy.ai/api/search-image?query=confident%20field%20force%20sales%20team%20at%20retail%20point%20of%20sale%20professional%20promoters%20at%20product%20display%20stands%20busy%20electronics%20store%20customers%20engaging%20with%20products%20high%20energy%20retail%20activation%20dramatic%20overhead%20lighting%20modern%20store%20environment&width=1920&height=800&seq=hero-abs-expanded-v2&orientation=landscape',
    omnichannel:
      'https://readdy.ai/api/search-image?query=seamless%20omnichannel%20retail%20experience%20customer%20on%20smartphone%20video%20call%20with%20product%20advisor%20while%20standing%20in%20store%20QR%20code%20on%20packaging%20digital%20and%20physical%20retail%20convergence%20modern%20technology%20lifestyle%20dramatic%20cinematic%20lighting&width=1920&height=800&seq=hero-omni-expanded-v2&orientation=landscape',
  };

  const handleDeliverableChange = (idx: number) => {
    setDelivFade(false);
    setTimeout(() => {
      setActiveDeliverable(idx);
      setDelivFade(true);
    }, 200);
  };

  const scrollToCarousel = () => {
    onClose();
    setTimeout(() => {
      carouselRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div style={{ animation: 'expandIn 0.5s ease-out' }}>

      {/* ── FULL-WIDTH DARK HERO BANNER — exact Case Studies style ── */}
      <div className="relative bg-[#111] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://readdy.ai/api/search-image?query=extremely%20ancient%20century%20old%20reclaimed%20barn%20wood%20plank%20texture%20rich%20dark%20brown%20walnut%20color%20with%20severe%20weathering%20massive%20deep%20cracks%20heavy%20splits%20wormholes%20rot%20marks%20thick%20oxidation%20layers%20extreme%20patina%20warm%20brown%20tones%20with%20dark%20decay%20marks%20heavily%20distressed%20vintage%20surface&width=1920&height=400&seq=expanded-hero-wood-bg&orientation=landscape"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-1/3 w-96 h-48 bg-[#C8D400]/8 rounded-none blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-14">
          {/* Top nav */}
          <div className="flex items-center justify-between mb-6 md:mb-10">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-white/70 hover:text-[#C8D400] transition-colors font-bold text-sm cursor-pointer"
            >
              <i className="ri-arrow-up-line text-lg"></i>
              <span className="hidden sm:inline">Zurück zur Übersicht</span>
              <span className="sm:hidden">Zurück</span>
            </button>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
              style={{ borderRadius: 0 }}
            >
              <i className="ri-close-line text-xl text-white"></i>
            </button>
          </div>

          {/* Hero content */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-[#C8D400]/20" style={{ borderRadius: 0 }}>
                  <i className={`${s.icon} text-xl text-[#C8D400]`}></i>
                </div>
                <div>
                  <p className="text-white font-black text-sm">{s.label}</p>
                  <p className="text-white/60 text-xs font-medium">Sonic Lösung</p>
                </div>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3 md:mb-4">
                {s.title}
              </h2>
              <p className="text-base md:text-xl text-white/75 font-bold leading-relaxed mb-3 md:mb-6">{s.subtitle}</p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed">{s.description}</p>
            </div>

            {/* Hero stats grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {s.stats.map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 md:p-5 border border-white/20" style={{ borderRadius: 0 }}>
                  <div className="text-xl md:text-3xl font-black text-sonic-lime font-sans tabular-nums mb-1">{stat.value}</div>
                  <div className="text-white/70 text-[10px] md:text-xs font-bold uppercase tracking-wide leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── STORY BODY ── */}
      <div className="bg-white">

        {/* ── Herausforderungen ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="mb-8 md:mb-12">
            <p className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Deine Herausforderung</p>
            <h3 className="text-2xl md:text-4xl font-black text-[#111]">
              {sKey === 'markteintritt' ? 'Drei typische Markteintritts-Hürden' :
               sKey === 'absatz' ? 'Der Retail-Alltag frisst Potenzial' :
               'Die Lücke, die kein Algorithmus schließt'}
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {s.challenges.map((ch, i) => (
              <div key={i} className="bg-white p-6 md:p-10 border border-gray-100 hover:border-[#C8D400]/30 hover:-translate-y-1 transition-all duration-300 group" style={{ borderRadius: 0 }}>
                <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-[#C8D400]/10 border border-[#C8D400]/20 mb-4 md:mb-6 group-hover:bg-[#C8D400]/20 transition-colors" style={{ borderRadius: 0 }}>
                  <i className={`${ch.icon} text-xl md:text-2xl text-[#C8D400]`}></i>
                </div>
                <h4 className="font-black text-lg md:text-xl text-[#111] mb-2 md:mb-4">{ch.title}</h4>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mid CTA ── */}
        <div className="bg-[#111] py-10 md:py-14 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 text-center md:text-left">
            <div>
              <p className="text-white font-black text-xl md:text-2xl">Bereit für messbaren Erfolg?</p>
              <p className="text-white/50 text-sm md:text-base mt-1">Starte dein Projekt in 60 Sekunden</p>
            </div>
            <a
              href="mailto:${CONTACT_EMAIL}`?subject=Beratungsgespräch%20anfragen"
              className="inline-flex items-center gap-3 bg-[#C8D400] text-[#111] px-8 md:px-10 py-3.5 md:py-4 font-black hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm md:text-base"
              style={{ borderRadius: 0 }}
            >
              <i className="ri-calendar-line"></i>
              Beratungsgespräch buchen
            </a>
          </div>
        </div>

        <WoodenDivider />

        {/* ── Deliverables ── */}
        <div className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-12">
            <p className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-widest mb-2">
              {sKey === 'omnichannel' ? 'Unsere Antwort' : 'Unser Komplettpaket'}
            </p>
            <h3 className="text-2xl md:text-4xl font-black text-[#111]">
              {sKey === 'markteintritt' ? 'Wir machen deinen Markteintritt messbar erlebbar' :
               sKey === 'absatz' ? 'Sell-out-Steigerung als System' :
               'Video: drei Touchpoints, ein Studio'}
            </h3>
          </div>

          {/* Editorial split: left list + right image */}
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-[360px_1fr] border border-gray-100" style={{ minHeight: '520px' }}>

              {/* Left: vertical selector list */}
              <div className="lg:border-r border-gray-100 divide-y divide-gray-100 flex flex-col">
                {s.deliverables.map((d, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDeliverableChange(idx)}
                    className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-all duration-200 cursor-pointer group border-l-4 ${
                      activeDeliverable === idx
                        ? 'bg-[#111] border-[#C8D400]'
                        : 'bg-white border-transparent hover:bg-[#f5f5f5] hover:border-[#C8D400]/30'
                    }`}
                    style={{ borderRadius: 0 }}
                  >
                    <span className={`text-[10px] font-black tabular-nums flex-shrink-0 w-5 ${
                      activeDeliverable === idx ? 'text-[#C8D400]' : 'text-gray-300 group-hover:text-[#C8D400]/50'
                    }`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div
                      className={`w-7 h-7 flex items-center justify-center flex-shrink-0 transition-colors ${
                        activeDeliverable === idx ? 'bg-[#C8D400]/20' : 'bg-gray-100 group-hover:bg-[#C8D400]/10'
                      }`}
                      style={{ borderRadius: 0 }}
                    >
                      <i className={`${d.icon} text-xs ${
                        activeDeliverable === idx ? 'text-[#C8D400]' : 'text-gray-400'
                      }`}></i>
                    </div>
                    <span className={`text-xs font-bold leading-snug flex-1 min-w-0 ${
                      activeDeliverable === idx ? 'text-white' : 'text-[#111]'
                    }`}>
                      {d.title}
                    </span>
                    {activeDeliverable === idx && (
                      <i className="ri-arrow-right-s-line text-[#C8D400] text-sm flex-shrink-0"></i>
                    )}
                  </button>
                ))}
              </div>

              {/* Right: image + content panel */}
              <div
                className="relative overflow-hidden"
                style={{ minHeight: 'clamp(320px, 40vw, 580px)', transition: 'opacity 0.2s', opacity: delivFade ? 1 : 0 }}
              >
                <img
                  src={s.deliverables[activeDeliverable].img}
                  alt={s.deliverables[activeDeliverable].title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
                <div
                  className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10"
                  style={{ minHeight: 'clamp(320px, 40vw, 580px)' }}
                >
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    <div
                      className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center bg-[#C8D400]/20 border border-[#C8D400]/40"
                      style={{ borderRadius: 0 }}
                    >
                      <i className={`${s.deliverables[activeDeliverable].icon} text-lg md:text-xl text-[#C8D400]`}></i>
                    </div>
                    <h4 className="text-xl md:text-3xl font-black text-white drop-shadow-lg">
                      {s.deliverables[activeDeliverable].title}
                    </h4>
                  </div>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-2xl">
                    {s.deliverables[activeDeliverable].desc}
                  </p>
                  {/* Progress indicator */}
                  <div className="flex items-center gap-1.5 mt-5">
                    {s.deliverables.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDeliverableChange(idx)}
                        className={`h-1 transition-all duration-300 cursor-pointer ${
                          activeDeliverable === idx ? 'bg-[#C8D400] w-6' : 'bg-white/30 w-3 hover:bg-white/60'
                        }`}
                        style={{ borderRadius: 0 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <WoodenDivider />

        {/* ── Process Steps ── */}
        <div className="bg-[#f5f5f5] py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 md:mb-14">
              <p className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Der Weg zum Erfolg</p>
              <h3 className="text-2xl md:text-4xl font-black text-[#111]">
                {sKey === 'markteintritt' ? 'So läuft dein Markteintritt mit Sonic' :
                 sKey === 'absatz' ? 'Das Sonic-System mit fünf Schritten' :
                 'So führen wir Video ein'}
              </h3>
            </div>

            {/* Alternating editorial grid */}
            <div className="space-y-0 border border-gray-200">
              {s.steps.map((st, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className="group grid md:grid-cols-2 border-b border-gray-200 last:border-b-0 hover:border-b-gray-200 transition-colors"
                    style={{ borderRadius: 0 }}
                  >
                    {/* Image panel */}
                    <div className={`relative overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}
                      style={{ minHeight: 'clamp(200px, 25vw, 340px)' }}
                    >
                      <img
                        src={st.img}
                        alt={st.title}
                        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-transparent" />
                      {/* Step number watermark */}
                      <div className="absolute top-3 left-4 md:top-5 md:left-6">
                        <span
                          className="text-6xl md:text-8xl font-black leading-none select-none"
                          style={{ color: 'rgba(200,212,0,0.55)', textShadow: '0 2px 20px rgba(0,0,0,0.6)' }}
                        >
                          {st.num}
                        </span>
                      </div>
                    </div>

                    {/* Content panel */}
                    <div
                      className={`flex flex-col justify-center px-7 py-8 md:px-10 md:py-12 bg-white group-hover:bg-[#111] transition-colors duration-300 ${
                        isEven ? 'md:order-2' : 'md:order-1'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-black text-gray-300 group-hover:text-[#C8D400]/50 uppercase tracking-widest transition-colors">
                          {st.num}
                        </span>
                        <div className="h-px flex-1 bg-gray-100 group-hover:bg-white/10 transition-colors" />
                      </div>
                      <h4 className="font-black text-xl md:text-2xl text-[#111] group-hover:text-white transition-colors duration-300 mb-3 leading-snug">
                        {st.title}
                      </h4>
                      <p className="text-gray-500 group-hover:text-white/75 leading-relaxed text-sm md:text-base transition-colors duration-300">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <WoodenDivider />

        {/* ── Stats / Die Bilanz ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="mb-8 md:mb-12">
            <p className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Die Bilanz</p>
            <h3 className="text-2xl md:text-4xl font-black text-[#111]">
              {sKey === 'markteintritt' ? 'Markteintritt mit Sonic in Zahlen' :
               sKey === 'absatz' ? 'Absatz steigern mit Sonic in Zahlen' :
               'Omnichannel mit Sonic'}
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {s.stats.map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#C8D400]/15 to-[#C8D400]/5 p-5 md:p-10 border-2 border-[#C8D400]/30 text-center hover:border-[#C8D400] hover:-translate-y-1 transition-all duration-300" style={{ borderRadius: 0 }}>
                <div className="text-2xl md:text-4xl font-black text-sonic-lime font-sans tabular-nums mb-2 md:mb-3 leading-tight">{stat.value}</div>
                <div className="text-[#111] font-bold text-xs md:text-sm uppercase tracking-wide leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <WoodenDivider />

        {/* ── Testimonial + Calendly dual-sided ── */}
        <div className="bg-white py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 md:mb-8">
              <p className="text-xs md:text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Erfolgsgeschichte</p>
              <h3 className="text-2xl md:text-3xl font-black text-[#111]">{s.testimonial.brand}</h3>
            </div>

            <div className="grid lg:grid-cols-5 gap-6 items-stretch">
              {/* Left: Testimonial card — ClientProof style but slightly bigger */}
              <div className="lg:col-span-3">
                <div className="relative bg-white p-6 md:p-8 border border-gray-100 h-full flex flex-col" style={{ borderRadius: 0 }}>
                  {/* Wavy SVG border */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 600 340">
                    <defs>
                      <linearGradient id="exp-test-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C8D400" stopOpacity="0.65" />
                        <stop offset="50%" stopColor="#a8b300" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#C8D400" stopOpacity="0.65" />
                      </linearGradient>
                    </defs>
                    <path d="M 16,3 Q 40,8 60,3 Q 90,-2 120,3 Q 150,8 180,3 Q 210,-2 240,3 Q 270,8 300,3 Q 330,-2 360,3 Q 390,8 420,3 Q 450,-2 480,3 Q 510,8 540,3 Q 570,-2 584,3 Q 597,8 597,16 Q 592,60 597,100 Q 602,140 597,180 Q 592,220 597,260 Q 602,300 597,324 Q 592,340 584,337 Q 570,332 540,337 Q 510,342 480,337 Q 450,332 420,337 Q 390,342 360,337 Q 330,332 300,337 Q 270,342 240,337 Q 210,332 180,337 Q 150,342 120,337 Q 90,332 60,337 Q 30,342 16,337 Q 3,332 3,324 Q 8,300 3,260 Q -2,220 3,180 Q 8,140 3,100 Q -2,60 3,16 Z"
                      fill="none" stroke="url(#exp-test-grad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                      style={{ filter: 'drop-shadow(0 0 5px rgba(200,212,0,0.4))' }} />
                  </svg>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Quote icon */}
                    <i className="ri-double-quotes-l text-3xl text-[#C8D400]/40 block mb-3"></i>
                    
                    {/* Quote text */}
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base italic mb-5 flex-1">
                      &ldquo;{s.testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 flex items-center justify-center bg-[#C8D400]/15 flex-shrink-0" style={{ borderRadius: 0 }}>
                        <i className="ri-user-star-line text-lg text-[#C8D400]"></i>
                      </div>
                      <div>
                        <p className="font-black text-[#111] text-sm">{s.testimonial.author}</p>
                        <p className="text-xs text-gray-500">{s.testimonial.role}</p>
                      </div>
                    </div>

                    <Link to="/case-studies" className="mt-4 inline-flex items-center gap-2 text-[#111] font-black text-xs uppercase tracking-widest hover:text-[#C8D400] transition-colors cursor-pointer">
                      Fallstudie lesen <i className="ri-arrow-right-line"></i>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: Calendly-style booking card */}
              <div className="lg:col-span-2">
                <div className="relative bg-[#111] p-6 md:p-8 h-full flex flex-col justify-center overflow-hidden" style={{ borderRadius: 0 }}>
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-12 h-[2px] bg-gradient-to-r from-[#C8D400] to-transparent" />
                  <div className="absolute top-0 left-0 w-[2px] h-12 bg-gradient-to-b from-[#C8D400] to-transparent" />
                  <div className="absolute bottom-0 right-0 w-12 h-[2px] bg-gradient-to-l from-[#C8D400] to-transparent" />
                  <div className="absolute bottom-0 right-0 w-[2px] h-12 bg-gradient-to-t from-[#C8D400] to-transparent" />

                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#C8D400]/15 border border-[#C8D400]/30 mx-auto mb-4" style={{ borderRadius: 0 }}>
                      <i className="ri-calendar-line text-xl text-[#C8D400]"></i>
                    </div>
                    <h4 className="text-lg font-black text-white mb-2">Beratungsgespräch</h4>
                    <p className="text-white/50 text-xs leading-relaxed mb-5">
                      Ähnliche Ergebnisse für dein Projekt? Lass uns in 30 Minuten unverbindlich sprechen.
                    </p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}?subject=Beratungsgespr%C3%A4ch%20anfragen`}
                      className="inline-flex items-center gap-2 bg-[#C8D400] text-[#111] px-6 py-3 font-black text-xs uppercase tracking-wider hover:bg-white hover:text-[#111] transition-all duration-300 cursor-pointer whitespace-nowrap"
                      style={{ borderRadius: 0 }}
                    >
                      <i className="ri-calendar-line text-sm"></i>
                      Jetzt Termin buchen
                    </a>
                    <p className="text-white/20 text-[10px] mt-3">Kostenlos & unverbindlich</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div className="bg-[#111] py-12 md:py-20 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white font-black text-xl md:text-3xl mb-2 md:mb-3">{s.finalCta}</p>
            <p className="text-white/50 text-sm md:text-base mb-7 md:mb-10">Kein Commitment. Nur ein Gespräch.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
              <Link
                to={s.link}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C8D400] text-[#111] px-8 md:px-12 py-4 md:py-5 font-black hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-sm md:text-base"
                style={{ borderRadius: 0 }}
              >
                {s.ctaLabel} <i className="ri-arrow-right-line"></i>
              </Link>
              <button
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 md:px-10 py-4 md:py-5 font-black hover:bg-white/20 transition-all duration-300 whitespace-nowrap cursor-pointer text-sm md:text-base border border-white/20"
                style={{ borderRadius: 0 }}
              >
                <i className="ri-arrow-up-line"></i> Zurück zur Übersicht
              </button>
            </div>
          </div>
        </div>

        {/* ── ZURÜCK NACH OBEN BUTTON ── */}
        <div className="bg-white py-10 flex justify-center">
          <button
            onClick={scrollToCarousel}
            className="group flex items-center gap-3 px-10 py-4 bg-white border-2 border-[#C8D400] text-[#111] font-black hover:bg-[#C8D400] transition-all duration-300 cursor-pointer whitespace-nowrap"
            style={{ borderRadius: 0 }}
          >
            <span className="w-8 h-8 flex items-center justify-center bg-[#C8D400] group-hover:bg-white transition-colors duration-300" style={{ borderRadius: 0 }}>
              <i className="ri-arrow-up-line text-[#111] text-base"></i>
            </span>
            Zurück nach oben
          </button>
        </div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────── */
function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const message = (form.elements.namedItem('nachricht') as HTMLTextAreaElement)?.value || '';
    if (message.length > 500) return;

    setFormStatus('sending');

    try {
      const formEl = e.currentTarget;
      const fd = new FormData(formEl);
      const data: Record<string, string> = {};
      fd.forEach((val, key) => { data[key] = val as string; });
      data['_subject'] = `Lösungen Kontaktanfrage von ${data.vorname || ''} ${data.nachname || ''}`;

      await submitContactForm(data);
      setFormStatus('success');
      formEl.reset();
      setCharCount(0);
    } catch {
      setFormStatus('error');
    }
  };

  if (formStatus === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 flex items-center justify-center bg-[#C8D400]/20 rounded-full mx-auto mb-5">
          <i className="ri-check-double-line text-3xl text-[#C8D400]"></i>
        </div>
        <h3 className="text-2xl font-black text-[#111] mb-2 uppercase">Nachricht gesendet!</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          Vielen Dank für deine Anfrage. Wir melden uns innerhalb von 24 Stunden bei dir.
        </p>
        <button
          onClick={() => setFormStatus('idle')}
          className="mt-6 text-[#C8D400] font-black text-sm hover:underline cursor-pointer"
        >
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form
      id="losungen-kontakt-form"
      data-readdy-form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5">Vorname *</label>
          <input
            type="text"
            name="vorname"
            required
            placeholder="Max"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm text-[#111] focus:outline-none focus:border-[#C8D400] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5">Nachname *</label>
          <input
            type="text"
            name="nachname"
            required
            placeholder="Mustermann"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm text-[#111] focus:outline-none focus:border-[#C8D400] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5">E-Mail *</label>
        <input
          type="email"
          name="email"
          required
          placeholder="max@unternehmen.de"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm text-[#111] focus:outline-none focus:border-[#C8D400] transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5">Unternehmen</label>
        <input
          type="text"
          name="unternehmen"
          placeholder="Dein Unternehmen GmbH"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm text-[#111] focus:outline-none focus:border-[#C8D400] transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5">Ich interessiere mich für</label>
        <select
          name="interesse"
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm text-[#111] focus:outline-none focus:border-[#C8D400] transition-colors bg-white cursor-pointer"
        >
          <option value="">Bitte wählen...</option>
          <option value="Markteintritt">Markteintritt</option>
          <option value="Absatz steigern">Absatz steigern</option>
          <option value="Omnichannel / Live-Video">Omnichannel / Live-Video</option>
          <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-black text-gray-500 uppercase tracking-widest mb-1.5">
          Deine Nachricht *
          <span className={`ml-2 font-normal normal-case ${charCount > 480 ? 'text-red-400' : 'text-gray-400'}`}>
            {charCount}/500
          </span>
        </label>
        <textarea
          name="nachricht"
          required
          rows={4}
          maxLength={500}
          placeholder="Beschreibe kurz dein Projekt oder deine Frage..."
          onChange={(e) => setCharCount(e.target.value.length)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-sm text-[#111] focus:outline-none focus:border-[#C8D400] transition-colors resize-none"
        />
      </div>

      {formStatus === 'error' && (
        <p className="text-red-500 text-sm font-semibold">
          Etwas ist schiefgelaufen. Bitte versuche es erneut.
        </p>
      )}

      <button
        type="submit"
        disabled={formStatus === 'sending' || charCount > 500}
        className="w-full flex items-center justify-center gap-3 bg-[#C8D400] text-[#111] py-4 font-black hover:bg-[#111] hover:text-white transition-all duration-300 cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        {formStatus === 'sending' ? (
          <>
            <i className="ri-loader-4-line animate-spin text-lg"></i>
            Wird gesendet...
          </>
        ) : (
          <>
            <i className="ri-send-plane-line text-lg"></i>
            Anfrage absenden
          </>
        )}
      </button>

      <p className="text-gray-400 text-xs text-center">
        Mit dem Absenden stimmst du unserer Datenschutzerklärung zu.
      </p>
    </form>
  );
}

/* ─────────────────────────────────────────
   WOOD CARD
───────────────────────────────────────── */
function WoodCard({
  sKey,
  isExpanded,
  onToggle,
}: {
  sKey: SolutionKey;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const s = SOLUTIONS[sKey];
  const idx = KEYS.indexOf(sKey);
  const cardRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 900, height: 300 });

  useEffect(() => {
    if (!cardRef.current) return;
    const update = () => {
      if (cardRef.current) {
        setDims({ width: cardRef.current.offsetWidth, height: cardRef.current.offsetHeight });
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(cardRef.current);
    return () => ro.disconnect();
  }, []);

  const generateWavyPath = (inset: number, amp: number, freq: number) => {
    const w = dims.width;
    const h = dims.height;
    const segsH = Math.max(Math.floor((w - 2 * inset) / 30), 14);
    const segsV = Math.max(Math.floor((h - 2 * inset) / 30), 10);
    let path = `M ${inset},${inset}`;
    for (let i = 1; i <= segsH; i++) {
      const x = inset + ((w - 2 * inset) * i / segsH);
      const wave = Math.sin(i * freq) * amp;
      const prevX = inset + ((w - 2 * inset) * (i - 1) / segsH);
      const cpWave = Math.sin((i - 0.5) * freq) * amp * 1.2;
      path += ` Q ${(prevX + x) / 2},${inset + cpWave} ${x},${inset + wave}`;
    }
    for (let i = 1; i <= segsV; i++) {
      const y = inset + ((h - 2 * inset) * i / segsV);
      const wave = Math.sin(i * freq + 1) * amp;
      const prevY = inset + ((h - 2 * inset) * (i - 1) / segsV);
      const cpWave = Math.sin((i - 0.5) * freq + 1) * amp * 1.2;
      path += ` Q ${w - inset + cpWave},${(prevY + y) / 2} ${w - inset + wave},${y}`;
    }
    for (let i = 1; i <= segsH; i++) {
      const x = w - inset - ((w - 2 * inset) * i / segsH);
      const wave = Math.sin(i * freq + 2) * amp;
      const prevX = w - inset - ((w - 2 * inset) * (i - 1) / segsH);
      const cpWave = Math.sin((i - 0.5) * freq + 2) * amp * 1.2;
      path += ` Q ${(prevX + x) / 2},${h - inset + cpWave} ${x},${h - inset + wave}`;
    }
    for (let i = 1; i <= segsV; i++) {
      const y = h - inset - ((h - 2 * inset) * i / segsV);
      const wave = Math.sin(i * freq + 3) * amp;
      const prevY = h - inset - ((h - 2 * inset) * (i - 1) / segsV);
      const cpWave = Math.sin((i - 0.5) * freq + 3) * amp * 1.2;
      path += ` Q ${inset + cpWave},${(prevY + y) / 2} ${inset + wave},${y}`;
    }
    path += ' Z';
    return path;
  };

  return (
    <div ref={cardRef} className="w-full relative overflow-hidden" style={{ borderRadius: 0, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
      {/* Wood texture */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=extremely%20ancient%20century%20old%20reclaimed%20barn%20wood%20plank%20texture%20rich%20dark%20brown%20walnut%20color%20with%20severe%20weathering%20massive%20deep%20cracks%20heavy%20splits%20wormholes%20rot%20marks%20thick%20oxidation%20layers%20extreme%20patina%20warm%20brown%20tones%20with%20dark%20decay%20marks%20heavily%20distressed%20vintage%20surface%20archaeological%20relic%20quality%20museum%20artifact%20aged%20timber%20with%20peeling%20finish&width=1920&height=600&seq=wood-card-losungen-clean-v8&orientation=landscape"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Wavy border — matches ClientProof review card style */}
      <svg
        className="absolute inset-0 pointer-events-none overflow-visible"
        viewBox={`0 0 ${dims.width} ${dims.height}`}
        width={dims.width}
        height={dims.height}
        style={{ zIndex: 1 }}
      >
        <defs>
          <linearGradient id={`wb-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8D400" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#a8b300" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#C8D400" stopOpacity="0.95" />
          </linearGradient>
        </defs>
        <path
          d={generateWavyPath(2, 3.5, 0.42)}
          fill="none"
          stroke={`url(#wb-${idx})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'drop-shadow(0 0 10px rgba(200,212,0,0.55)) drop-shadow(0 0 3px rgba(200,212,0,0.30))' }}
        />
      </svg>

      {/* Content */}
      <div className="relative px-5 py-6 md:px-12 md:py-10" style={{ zIndex: 2 }}>
        {/* Mobile layout: stacked */}
        <div className="flex flex-col gap-5 md:hidden">
          {/* Header row */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-[#C8D400]/20 border border-[#C8D400]/50 flex-shrink-0">
                <i className={`${s.icon} text-xl text-[#C8D400]`}></i>
              </div>
              <div>
                <p className="text-[#C8D400] text-[10px] font-black uppercase tracking-widest">Sonic Lösung</p>
                <h2 className="text-base font-black text-white leading-tight">{s.label}</h2>
              </div>
            </div>
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest flex-shrink-0">{idx + 1}/{KEYS.length}</p>
          </div>

          {/* Title */}
          <p className="text-white font-black text-lg leading-snug drop-shadow">{s.title}</p>

          {/* Description */}
          <div className="border-l-2 border-[#C8D400]/60 pl-4">
            <p className="text-white/75 text-sm leading-relaxed">{s.description}</p>
          </div>

          {/* Challenges */}
          <div>
            <p className="text-[#C8D400] text-[10px] font-black uppercase tracking-widest mb-2">Typische Herausforderungen</p>
            <ul className="space-y-2">
              {s.challenges.map((c, ci) => (
                <li key={ci} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 flex items-center justify-center bg-white/10 flex-shrink-0 mt-0.5" style={{ borderRadius: 0 }}>
                    <i className={`${c.icon} text-xs text-[#C8D400]`}></i>
                  </div>
                  <span className="text-white/70 text-sm leading-snug">{c.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button
            onClick={onToggle}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#C8D400] text-[#111] font-black uppercase tracking-wider hover:bg-white hover:text-[#111] transition-all duration-300 cursor-pointer whitespace-nowrap text-xs"
            style={{ borderRadius: 0 }}
          >
            {isExpanded ? 'Schließen' : 'Mehr dazu'}
            <i className={`ri-arrow-down-line text-sm transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}></i>
          </button>
        </div>

        {/* Desktop layout: 12-col grid */}
        <div className="hidden md:grid grid-cols-12 gap-10 items-start">
          {/* LEFT — identity */}
          <div className="col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-[#C8D400]/20 border border-[#C8D400]/50 flex-shrink-0">
                <i className={`${s.icon} text-2xl text-[#C8D400]`}></i>
              </div>
              <div>
                <p className="text-[#C8D400] text-xs font-black uppercase tracking-widest">Sonic Lösung</p>
                <h2 className="text-xl font-black text-white leading-tight">{s.label}</h2>
              </div>
            </div>
            <div
              className="select-none font-black leading-none"
              style={{ fontSize: '7rem', color: 'rgba(200,212,0,0.12)', letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              {String(idx + 1).padStart(2, '0')}
            </div>
            <p className="text-white font-black text-lg leading-snug drop-shadow">{s.title}</p>
          </div>

          {/* MIDDLE — description + challenges */}
          <div className="col-span-5 flex flex-col gap-5">
            <div className="border-l-2 border-[#C8D400]/60 pl-5">
              <p className="text-white/80 text-sm leading-relaxed italic">{s.description}</p>
            </div>
            <div>
              <p className="text-[#C8D400] text-xs font-black uppercase tracking-widest mb-3">Typische Herausforderungen</p>
              <ul className="space-y-2.5">
                {s.challenges.map((c, ci) => (
                  <li key={ci} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-white/10 flex-shrink-0 mt-0.5" style={{ borderRadius: 0 }}>
                      <i className={`${c.icon} text-sm text-[#C8D400]`}></i>
                    </div>
                    <span className="text-white/75 text-sm leading-snug">{c.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — CTA */}
          <div className="col-span-3 flex flex-col items-end justify-between h-full gap-6">
            <div className="text-right">
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest">
                {idx + 1} / {KEYS.length}
              </p>
            </div>
            <button
              onClick={onToggle}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#C8D400] text-[#111] font-black uppercase tracking-wider hover:bg-white hover:text-[#111] transition-all duration-300 cursor-pointer whitespace-nowrap text-xs"
              style={{ borderRadius: 0 }}
            >
              {isExpanded ? 'Schließen' : 'Mehr dazu'}
              <i className={`ri-arrow-down-line text-sm transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function LosungenPage() {
  useSEO({
    title: 'Lösungen | Sonic Group — Markteintritt, Absatz & Omnichannel DACH',
    description: 'Drei Retail-Lösungen von Sonic Group: Markteintritt im DACH-Raum, Absatzsteigerung am POS und Omnichannel-Strategie mit Live Video. Datenbasiert, messbar, skalierbar.',
    keywords: 'Markteintritt DACH, Absatz steigern Retail, Omnichannel Strategie, Retail Lösungen Deutschland',
    canonical: 'https://sonic-group.de/losungen',
    ogTitle: 'Lösungen — Sonic Group DACH',
    ogDescription: 'Markteintritt, Absatzsteigerung & Omnichannel: Drei datenbasierte Retail-Lösungen für den DACH-Markt.',
  });
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<SolutionKey>('markteintritt');
  const [expandedKey, setExpandedKey] = useState<SolutionKey | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [surveyDone, setSurveyDone] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const expandedRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openParam = searchParams.get('open') as SolutionKey | null;
    if (openParam && KEYS.includes(openParam)) {
      setActiveTab(openParam);
      setExpandedKey(openParam);
      setTimeout(() => {
        carouselRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }, [searchParams]);

  const handleTabClick = (key: SolutionKey) => {
    setActiveTab(key);
    setExpandedKey(null);
  };

  const handleToggle = (key: SolutionKey) => {
    const next = expandedKey === key ? null : key;
    setExpandedKey(next);
    if (next) {
      setTimeout(() => {
        expandedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  };

  const surveyQuestions = [
    { question: 'In welcher Branche bist du aktiv?', options: ['Consumer Electronics', 'Haushaltsgeräte', 'Sport & Outdoor', 'Kosmetik', 'Food & Beverages'] },
    { question: 'Was ist dein primäres Ziel?', options: ['Markteintritt', 'Absatzsteigerung', 'Omnichannel-Strategie', 'Markenbekanntheit', 'Kundenbindung'] },
    { question: 'Wie viele POS-Standorte planst du?', options: ['1–10', '11–50', '51–100', '100+', 'Noch unklar'] },
    { question: 'Wann möchtest du starten?', options: ['Sofort', 'In 1–3 Monaten', 'In 3–6 Monaten', 'In 6+ Monaten', 'Noch in Planung'] },
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSurveyDone(true);
    }
  };

  const faqItems = [
    {
      question: 'Für welche Branchen arbeitet Sonic?',
      answer: 'Wir sind spezialisiert auf erklärungsbedürftige Produkte im Retail: Consumer Electronics, Haushaltsgeräte, Sport & Outdoor, Kosmetik, Pharma, Food & Beverages und B2B. Unsere Markenbotschafter sind in allen großen Handelsketten Deutschlands im Einsatz – von MediaMarkt und Saturn über Douglas und dm bis hin zu Fachhandel und Sportfachgeschäften. Wir haben in über 15 Jahren Erfahrung aufgebaut, wie man komplexe Produkte am POS erklärt, Vertrauen aufbaut und Kaufentscheidungen beschleunigt. Egal ob du ein globaler Konzern oder ein aufstrebendes Scale-up bist – wenn dein Produkt erklärt werden muss, sind wir die richtige Wahl.',
    },
    {
      question: 'Was unterscheidet Sonic von anderen Vertriebsagenturen?',
      answer: 'Vier Dinge: Erstens arbeiten unsere Promoter festangestellt – keine Freelancer, keine Zeitarbeit. Das bedeutet höhere Motivation, bessere Schulbarkeit und echte Markenbotschafter statt austauschbarer Gesichter. Zweitens planen wir datenbasiert: Unser eigenes ERP-System, das Sonic Reporting Tool (SRT), liefert Forecasts, bevor der erste Einsatz startet. Du weißt vorher, was du erwarten kannst. Drittens bekommst du Live-Transparenz: Du siehst in Echtzeit, was auf der Fläche passiert – Verkäufe, Kontakte, Standort-Performance. Keine Quartalsberichte, kein Excel-Blindflug. Viertens kennt unser Agenturteam auch die Kundenseite: Wir verstehen Konzernstrukturen, Budgetprozesse und die Anforderungen von Marketing- und Vertriebsverantwortlichen aus eigener Erfahrung.',
    },
    {
      question: 'Was ist das Sonic Reporting Tool (SRT)?',
      answer: 'Das SRT ist unsere selbst entwickelte Software – das Herzstück unserer Arbeit. Es vereint Marktforschung, Forecasting, Einsatzplanung, Einsatztracking, Zielerreichung, Abrechnung und Dashboards in einem System. Es dockt an deine bestehende Software an und gibt dir jederzeit vollen Einblick in die Performance deiner Projekte. Unsere Promoter nutzen das SRT täglich: Sie checken ein, dokumentieren Verkäufe und Kontakte, sehen ihre eigene Zielerreichung in Echtzeit und erhalten Coaching-Impulse direkt im Tool. Für dich als Auftraggeber bedeutet das: Du hast ein persönliches Dashboard, das du jederzeit aufrufen kannst – ohne auf Reports warten zu müssen.',
    },
    {
      question: 'Wie groß ist der Talentepool?',
      answer: 'Aktuell umfasst unser Pool rund 2.000 Talente deutschlandweit, die wir projektbezogen fest anstellen. Alle sind handverlesen, geschult und haben Live-Zugriff auf ihre eigene Zielerreichung im SRT. Für neue Projekte rekrutieren und trainieren wir gezielt aus diesem Pool oder bauen ihn für dich aus. Unsere Talente sind keine Studenten, die nebenbei jobben – sie sind Profis, die Retail lieben, Produkte verstehen und Kunden begeistern können. Viele arbeiten seit Jahren exklusiv für Sonic und kennen die Handelsflächen, die Händler und die Kaufmuster in ihren Regionen wie ihre Westentasche.',
    },
    {
      question: 'Wie funktioniert die Live-Video-Beratung?',
      answer: 'Kunden klicken einen Button im Shop, aktivieren den Videochat am POS-Display oder scannen einen QR-Code auf einem Aufsteller oder der Produktverpackung. Dann werden sie sofort mit einem geschulten Video-Berater verbunden. Der Berater kennt dein Produkt, trägt dein Branding und berät in Echtzeit – genau wie ein Verkäufer im Laden, nur digital. Jeder Call wird getrackt: Dauer, Ergebnis, Kundenzufriedenheit, Kaufabschluss. Du brauchst keine eigene Infrastruktur, keine eigene Technik, keine eigenen Berater. Wir liefern alles: die Technologie, die Integration in deinen Shop oder dein POS-System, die geschulten Berater und das Reporting. Skalierbar von 100 bis 10.000 Calls pro Monat.',
    },
    {
      question: 'Was kostet eine Zusammenarbeit mit Sonic?',
      answer: 'Unsere Projekte werden individuell kalkuliert, abhängig von Umfang, Laufzeit, Anzahl der Einsätze und gewünschten Leistungen. Es gibt kein Einheitspaket – weil jede Marke, jedes Produkt und jeder Markt anders ist. Was wir dir im Erstgespräch immer liefern: eine transparente Kostenstruktur und eine ROI-Prognose auf Basis unserer Daten. Du weißt also nicht nur, was es kostet, sondern auch, was es bringt – bevor du unterschreibst. Viele unserer Kunden starten mit einem Pilotprojekt, um die Zusammenarbeit kennenzulernen und erste Daten zu sammeln. Danach skalieren wir gemeinsam.',
    },
    {
      question: 'Wie messe ich den Erfolg?',
      answer: 'Über das SRT hast du Zugriff auf Echtzeit-Dashboards mit allen relevanten KPIs: Verkäufe, Kontakte, Zielerreichung, Standort-Performance, Mitarbeiter-Performance. Wir definieren zu Projektbeginn gemeinsam, welche KPIs für dich entscheidend sind – und messen genau diese. Keine Bauchgefühl-Reports, keine nachträglichen Interpretationen. Tagesaktuell. Und wir starten jedes Projekt mit einem gemeinsam definierten Ziel, gegen das wir messen. Wenn etwas nicht performt, sehen wir es sofort und können gegensteuern – nicht erst am Quartalsende.',
    },
    {
      question: 'Wie schnell kann ein Projekt starten?',
      answer: 'Das hängt vom Umfang ab. Kleinere Projekte mit bestehendem Talentepool können innerhalb von 2–3 Wochen live gehen. Größere Rollouts mit Recruiting, intensivem Training und POS-Aufbau brauchen in der Regel 4–8 Wochen Vorlaufzeit. Im Erstgespräch klären wir deinen Zeitplan und geben dir eine realistische Einschätzung. Wir sind bekannt dafür, schnell zu sein – aber nie auf Kosten der Qualität.',
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: '480px' }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=dramatic%20wide%20angle%20shot%20of%20modern%20retail%20environment%20sleek%20product%20display%20stands%20brand%20activation%20professionals%20confident%20poses%20cinematic%20moody%20lighting%20deep%20contrast%20dark%20shadows%20warm%20amber%20highlights%20premium%20commercial%20photography%20editorial%20style%20highly%20stylized%20dramatic%20atmosphere%20retail%20marketing%20agency&width=1920&height=1080&seq=losungen-hero-editorial-v3&orientation=landscape"
            alt="Lösungen Hero"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        </div>

        {/* Lime ambient glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#C8D400]/6 blur-[100px] pointer-events-none" />

        {/* Content — left-aligned, bottom-anchored */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-0">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-7">
              <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
              <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Lösungen</span>
            </div>

            {/* Main headline — editorial split type */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
              DREI WEGE<br />
              <span className="text-[#C8D400]">DURCH DIE</span><br />
              RETAIL-SCHALLMAUER.
            </h1>

            {/* Divider + subtitle */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-1 h-14 bg-[#C8D400] flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-black text-base md:text-lg mb-1">
                  Die richtige Lösung für jede Phase deiner Retail-Strategie.
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  Markteintritt, Absatzsteigerung oder Omnichannel — Wir haben die Menschen, die Daten
                  und die Erfolgslösungen für den DACH-Markt.
                </p>
              </div>
            </div>

            {/* Three solution nav buttons */}
            <div className="flex flex-wrap gap-2 md:gap-3">
              {KEYS.map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setExpandedKey(null);
                    setTimeout(() => {
                      carouselRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                  }}
                  className="inline-flex items-center gap-2 border border-white/25 text-white px-5 py-2.5 font-black text-xs uppercase tracking-wider hover:border-[#C8D400] hover:text-[#C8D400] transition-all duration-300 cursor-pointer whitespace-nowrap group"
                >
                  <i className={`${SOLUTIONS[key].icon} text-sm`} />
                  {SOLUTIONS[key].label}
                  <i className="ri-arrow-right-line text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
      </section>

      {/* ── WOODEN CAROUSEL ── */}
      <section ref={carouselRef} id="losungen-carousel" className="relative py-16 bg-white overflow-visible">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#C8D400]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#C8D400]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 px-6 max-w-7xl mx-auto">
          {/* Tab switcher */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8 flex-wrap">
            {KEYS.map((key) => (
              <button
                key={key}
                onClick={() => handleTabClick(key)}
                className={`px-5 md:px-8 py-2 md:py-2.5 font-black uppercase tracking-wider text-xs md:text-sm transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === key
                    ? 'bg-[#111] text-[#C8D400] border-2 border-[#111]'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#C8D400]/60 hover:text-[#111]'
                }`}
                style={{ borderRadius: 0 }}
              >
                {SOLUTIONS[key].label}
              </button>
            ))}
          </div>

          {/* Wood card */}
          <WoodCard
            sKey={activeTab}
            isExpanded={expandedKey === activeTab}
            onToggle={() => handleToggle(activeTab)}
          />

          {/* Nav dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {KEYS.map((key, i) => (
              <button
                key={i}
                onClick={() => handleTabClick(key)}
                className={`h-2 rounded-full transition-all cursor-pointer hover:scale-110 ${
                  activeTab === key ? 'bg-[#C8D400] w-6 shadow-lg' : 'bg-gray-300 w-2 hover:bg-[#C8D400]/60'
                }`}
                aria-label={`View ${SOLUTIONS[key].label}`}
              />
            ))}
          </div>

          {/* Expanded panel — break out of max-w-7xl to be truly full-width */}
          <div ref={expandedRef}>
            {expandedKey && expandedKey === activeTab && (
              <div
                style={{
                  marginLeft: 'calc(-50vw + 50%)',
                  marginRight: 'calc(-50vw + 50%)',
                  width: '100vw',
                }}
              >
                <ExpandedPanel sKey={expandedKey} onClose={() => setExpandedKey(null)} carouselRef={carouselRef} />
              </div>
            )}
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* ── THREE PILLARS ── */}
      <section className="py-14 md:py-20 px-4 md:px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs font-black text-[#C8D400]/60 uppercase tracking-widest mb-3">Was immer gilt</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 uppercase">Ganz gleich wo du stehst</h2>
            <p className="text-base md:text-xl text-white/50 font-semibold">Du bekommst immer</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: 'ri-team-line', title: 'Festangestellte Talente', desc: 'Aus unserem Pool von 2.000 Markenbotschaftern. Geschult, motiviert, zuverlässig.' },
              { icon: 'ri-bar-chart-box-line', title: 'Datenbasierte Planung', desc: 'Das Sonic Reporting Tool (SRT) liefert Forecasts, Standortanalysen und ROI-Prognosen.' },
              { icon: 'ri-dashboard-line', title: 'Live-Reporting via SRT', desc: 'Echtzeit-Dashboards, angedockt an deine Software. Volle Transparenz.' },
            ].map((item, i) => (
              <div key={i} className="relative bg-white/5 border border-white/10 hover:border-[#C8D400]/50 hover:bg-white/8 hover:-translate-y-1 transition-all duration-300 group overflow-hidden" style={{ borderRadius: 0 }}>
                {/* lime corner accent */}
                <div className="absolute top-0 left-0 w-16 h-[2px] bg-gradient-to-r from-[#C8D400] to-transparent" />
                <div className="absolute top-0 left-0 w-[2px] h-16 bg-gradient-to-b from-[#C8D400] to-transparent" />
                <div className="pt-10 pb-8 px-8 text-center">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#C8D400]/15 border border-[#C8D400]/30 mx-auto mb-5 group-hover:bg-[#C8D400]/25 transition-colors" style={{ borderRadius: 0 }}>
                    <i className={`${item.icon} text-2xl text-[#C8D400]`}></i>
                  </div>
                  <h3 className="text-lg font-black text-white mb-3">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* ── SURVEY ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Premium dark survey card */}
          <div className="relative bg-[#111] overflow-hidden" style={{ borderRadius: 0 }}>
            {/* Wood texture overlay */}
            <div className="absolute inset-0 opacity-10">
              <img
                src="https://readdy.ai/api/search-image?query=extremely%20ancient%20century%20old%20reclaimed%20barn%20wood%20plank%20texture%20rich%20dark%20brown%20walnut%20color%20with%20severe%20weathering%20massive%20deep%20cracks%20heavy%20splits%20wormholes%20rot%20marks%20thick%20oxidation%20layers%20extreme%20patina%20warm%20brown%20tones%20with%20dark%20decay%20marks%20heavily%20distressed%20vintage%20surface&width=900&height=600&seq=survey-wood-bg&orientation=landscape"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-20 h-[2px] bg-gradient-to-r from-[#C8D400] to-transparent" />
            <div className="absolute top-0 left-0 w-[2px] h-20 bg-gradient-to-b from-[#C8D400] to-transparent" />
            <div className="absolute bottom-0 right-0 w-20 h-[2px] bg-gradient-to-l from-[#C8D400] to-transparent" />
            <div className="absolute bottom-0 right-0 w-[2px] h-20 bg-gradient-to-t from-[#C8D400] to-transparent" />

            <div className="relative z-10 p-8 md:p-12">
              {!surveyDone ? (
                <>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-[#C8D400]/15 border border-[#C8D400]/30 px-4 py-1.5 mb-5">
                      <div className="w-1.5 h-1.5 bg-[#C8D400] animate-pulse" />
                      <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">Schnell-Check</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white mb-2 uppercase">Bereit für messbaren Erfolg?</h2>
                    <p className="text-white/50 font-semibold text-sm">Starte dein Projekt in 60 Sekunden</p>
                  </div>

                  {/* Progress */}
                  <div className="flex items-center gap-3 mb-8">
                    <p className="text-xs font-black text-[#C8D400]/70 uppercase tracking-widest whitespace-nowrap">
                      {currentQuestion + 1} / {surveyQuestions.length}
                    </p>
                    <div className="flex-1 h-px bg-white/10">
                      <div
                        className="h-full bg-[#C8D400] transition-all duration-500"
                        style={{ width: `${((currentQuestion + 1) / surveyQuestions.length) * 100}%` }}
                      />
                    </div>
                    <div className="flex gap-1.5">
                      {surveyQuestions.map((_, qi) => (
                        <div
                          key={qi}
                          className="h-1 transition-all duration-300"
                          style={{ width: qi <= currentQuestion ? '24px' : '8px', background: qi <= currentQuestion ? '#C8D400' : 'rgba(255,255,255,0.15)' }}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-black text-white mb-5 leading-snug">{surveyQuestions[currentQuestion].question}</h3>

                  <div className="space-y-2.5">
                    {surveyQuestions[currentQuestion].options.map((opt, oi) => (
                      <button
                        key={oi}
                        onClick={() => handleAnswer(opt)}
                        className="w-full flex items-center gap-4 px-5 py-4 bg-white/5 border border-white/10 text-left font-semibold text-white/80 hover:bg-[#C8D400]/15 hover:border-[#C8D400]/50 hover:text-white transition-all duration-200 cursor-pointer text-sm group"
                        style={{ borderRadius: 0 }}
                      >
                        <span className="w-6 h-6 flex items-center justify-center border border-white/20 group-hover:border-[#C8D400]/60 group-hover:bg-[#C8D400]/15 transition-all flex-shrink-0 text-[10px] font-black text-white/40 group-hover:text-[#C8D400]">
                          {String.fromCharCode(65 + oi)}
                        </span>
                        {opt}
                        <i className="ri-arrow-right-line ml-auto opacity-0 group-hover:opacity-80 transition-all text-sm text-[#C8D400]" />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#C8D400]/20 border border-[#C8D400]/40 mx-auto mb-5" style={{ borderRadius: 0 }}>
                    <i className="ri-check-double-line text-3xl text-[#C8D400]"></i>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase">Vielen Dank!</h3>
                  <p className="text-white/50 mb-8 text-sm">Wir melden uns in Kürze bei dir mit einem maßgeschneiderten Angebot.</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Beratungsgespr%C3%A4ch%20anfragen`}
                    className="inline-flex items-center gap-2 bg-[#C8D400] text-[#111] px-8 py-4 font-black hover:bg-white hover:text-[#111] transition-all duration-300 cursor-pointer whitespace-nowrap"
                    style={{ borderRadius: 0 }}
                  >
                    <i className="ri-calendar-line"></i>
                    Beratungsgespräch buchen
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <WoodenDivider />

      {/* ── CLIENT PROOF ── */}
      <ClientProof />

      <WoodenDivider />

      {/* ── FAQ ── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#C8D400]/20 border border-[#C8D400]/40 px-5 py-2 mb-6" style={{ borderRadius: 0 }}>
              <i className="ri-question-line text-[#C8D400] text-sm"></i>
              <span className="text-xs font-black text-[#C8D400] uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#111] mb-4">Häufig gestellte Fragen</h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">Alles, was du über unsere Lösungen, unsere Arbeitsweise und den Start einer Zusammenarbeit wissen musst.</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-2 overflow-hidden transition-all duration-300"
                style={{
                  borderRadius: 0,
                  borderColor: openFaq === index ? '#C8D400' : '#e5e7eb',
                  boxShadow: openFaq === index ? '0 6px 30px rgba(200,212,0,0.12)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer bg-white hover:bg-[#f5f5f5] transition-colors duration-200"
                >
                  <span className="text-lg font-black text-[#111] pr-6">{item.question}</span>
                  <div className={`w-9 h-9 flex-shrink-0 flex items-center justify-center transition-all duration-300 ${openFaq === index ? 'bg-[#C8D400]' : 'bg-gray-100'}`} style={{ borderRadius: 0 }}>
                    <i className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-[#111]' : 'text-gray-500'}`} />
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{ maxHeight: openFaq === index ? '600px' : '0' }}
                >
                  <div className="px-8 pb-7 bg-white border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed text-base pt-5">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 relative bg-[#111] p-10 overflow-hidden" style={{ borderRadius: 0 }}>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-14 h-[2px] bg-gradient-to-r from-[#C8D400] to-transparent" />
            <div className="absolute top-0 left-0 w-[2px] h-14 bg-gradient-to-b from-[#C8D400] to-transparent" />
            <div className="absolute bottom-0 right-0 w-14 h-[2px] bg-gradient-to-l from-[#C8D400] to-transparent" />
            <div className="absolute bottom-0 right-0 w-[2px] h-14 bg-gradient-to-t from-[#C8D400] to-transparent" />
            <div className="relative z-10 text-center">
              <p className="text-xl font-black text-white mb-2">Noch Fragen offen?</p>
              <p className="text-white/50 text-sm mb-6">Wir beantworten sie gerne persönlich – in einem kostenlosen 30-Minuten-Gespräch.</p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Frage%20zu%20Sonic%20L%C3%B6sungen`}
                className="inline-flex items-center gap-2 bg-[#C8D400] text-[#111] px-10 py-4 font-black hover:bg-white hover:text-[#111] transition-all duration-300 whitespace-nowrap cursor-pointer text-base"
                style={{ borderRadius: 0 }}
              >
                <i className="ri-mail-line text-base"></i>
                Jetzt Frage stellen
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes expandIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
