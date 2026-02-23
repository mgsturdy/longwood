import Header from '@/components/v3/Header';
import Hero from '@/components/v3/Hero';
import Overview from '@/components/v3/Overview';
import Homes from '@/components/v3/Homes';
import Amenities from '@/components/v3/Amenities';
import Location from '@/components/v3/Location';
import Gallery from '@/components/v3/Gallery';
import CommunityPlaceholder from '@/components/v3/CommunityPlaceholder';
import RegistrationForm from '@/components/v3/RegistrationForm';
import BookShowing from '@/components/v3/BookShowing';
import Footer from '@/components/v3/Footer';

export const metadata = {
  title: 'Chelsea at Longwood — Warm Community',
};

export default function V3Page() {
  return (
    <div className="theme-v3 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Homes />
        <Amenities />
        <Location />
        <Gallery />
        <CommunityPlaceholder />
        <RegistrationForm />
        <BookShowing />
      </main>
      <Footer />
    </div>
  );
}
