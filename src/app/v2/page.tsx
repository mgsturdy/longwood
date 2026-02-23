import Header from '@/components/v2/Header';
import Hero from '@/components/v2/Hero';
import Overview from '@/components/v2/Overview';
import Homes from '@/components/v2/Homes';
import Amenities from '@/components/v2/Amenities';
import Location from '@/components/v2/Location';
import Gallery from '@/components/v2/Gallery';
import RegistrationForm from '@/components/v2/RegistrationForm';
import BookShowing from '@/components/v2/BookShowing';
import Footer from '@/components/v2/Footer';

export const metadata = {
  title: 'Chelsea at Longwood — Modern Premium',
};

export default function V2Page() {
  return (
    <div className="theme-v2 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Homes />
        <Amenities />
        <Location />
        <Gallery />
        <RegistrationForm />
        <BookShowing />
      </main>
      <Footer />
    </div>
  );
}
