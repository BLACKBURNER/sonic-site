import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Lazy load pages
const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const CareersPage = lazy(() => import('../pages/careers/page'));
const CaseStudiesPage = lazy(() => import('../pages/case-studies/page'));
const CaseStudyDetailPage = lazy(() => import('../pages/case-studies/detail/page'));
const IndustriesPage = lazy(() => import('../pages/industries/page'));
const SRTPage = lazy(() => import('../pages/srt/page'));
const TeamPage = lazy(() => import('../pages/team/page'));
const LosungenPage = lazy(() => import('../pages/losungen/page'));
const SonicReelsPage = lazy(() => import('../pages/sonic-reels/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const BlogDetailPage = lazy(() => import('../pages/blog/detail/page'));
const LeistungenPage = lazy(() => import('../pages/leistungen/page'));
const ForecastingPage = lazy(() => import('../pages/leistungen/forecasting/page'));
const TalentpoolPage = lazy(() => import('../pages/leistungen/talentpool/page'));
const StaffAsAServicePage = lazy(() => import('../pages/leistungen/staff-as-a-service/page'));
const VideoPage = lazy(() => import('../pages/leistungen/video/page'));
const POSFullServicePage = lazy(() => import('../pages/leistungen/pos-full-service/page'));
const EventsMessenPage = lazy(() => import('../pages/leistungen/events-messen/page'));
const KreationContentPage = lazy(() => import('../pages/leistungen/kreation-content/page'));
const WarehouseLogistikPage = lazy(() => import('../pages/leistungen/warehouse-logistik/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const JobsPage = lazy(() => import('../pages/jobs/page'));
const JobDetailPage = lazy(() => import('../pages/jobs/[hash]/page'));
const ContentStudioPage = lazy(() => import('../pages/services/content-studio/page'));
const EventsServicePage = lazy(() => import('../pages/services/events/page'));
const MarketEntryPage = lazy(() => import('../pages/services/market-entry/page'));
const RetailPOSPage = lazy(() => import('../pages/services/retail-pos/page'));
const StaffingPage = lazy(() => import('../pages/services/staffing/page'));
const KontaktPage = lazy(() => import('../pages/kontakt/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/careers',
    element: <CareersPage />,
  },
  {
    path: '/case-studies',
    element: <CaseStudiesPage />,
  },
  {
    path: '/case-studies/:slug',
    element: <CaseStudyDetailPage />,
  },
  {
    path: '/industries',
    element: <IndustriesPage />,
  },
  {
    path: '/leistungen/live-video',
    element: <VideoPage />,
  },
  {
    path: '/srt',
    element: <SRTPage />,
  },
  {
    path: '/team',
    element: <TeamPage />,
  },
  {
    path: '/losungen',
    element: <LosungenPage />,
  },
  {
    path: '/sonic-reels',
    element: <SonicReelsPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/:id',
    element: <BlogDetailPage />,
  },
  {
    path: '/leistungen',
    element: <LeistungenPage />,
  },
  {
    path: '/leistungen/forecasting',
    element: <ForecastingPage />,
  },
  {
    path: '/leistungen/talentpool',
    element: <TalentpoolPage />,
  },
  {
    path: '/leistungen/staff-as-a-service',
    element: <StaffAsAServicePage />,
  },
  {
    path: '/leistungen/pos-full-service',
    element: <POSFullServicePage />,
  },
  {
    path: '/leistungen/events-messen',
    element: <EventsMessenPage />,
  },
  {
    path: '/leistungen/kreation-content',
    element: <KreationContentPage />,
  },
  {
    path: '/leistungen/warehouse-logistik',
    element: <WarehouseLogistikPage />,
  },
  {
    path: '/jobs',
    element: <JobsPage />,
  },
  {
    path: '/jobs/:hash',
    element: <JobDetailPage />,
  },
  {
    path: '/services/content-studio',
    element: <ContentStudioPage />,
  },
  {
    path: '/services/events',
    element: <EventsServicePage />,
  },
  {
    path: '/services/market-entry',
    element: <MarketEntryPage />,
  },
  {
    path: '/services/retail-pos',
    element: <RetailPOSPage />,
  },
  {
    path: '/services/staffing',
    element: <StaffingPage />,
  },
  {
    path: '/kontakt',
    element: <KontaktPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
