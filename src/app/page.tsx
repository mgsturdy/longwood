import Header from '@/components/v1/Header';
import Hero from '@/components/v1/Hero';
import Overview from '@/components/v1/Overview';
import Homes from '@/components/v1/Homes';
import Location from '@/components/v1/Location';
import Gallery from '@/components/v1/Gallery';
import RegistrationForm from '@/components/v1/RegistrationForm';
import BookShowing from '@/components/v1/BookShowing';
import Footer from '@/components/v1/Footer';

export const metadata = {
  title: 'Chelsea at Longwood — Luxury Rental Living for Your Next Chapter',
};

export default function Page() {
  return (
    <div className="theme-v1 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Overview />
        <Homes />
        <Location />
        <Gallery />
        <RegistrationForm />
        <BookShowing />
      </main>
      <Footer />
    </div>
  );
}
