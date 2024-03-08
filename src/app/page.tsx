import Image from 'next/image';
import Navbar from './components/Navbar';
import Hero from './components/home/Hero';
import AboutUs from './components/home/AboutUs';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
    </main>
  );
}
