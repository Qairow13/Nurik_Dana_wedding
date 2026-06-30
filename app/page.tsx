import MusicPlayer from '@/components/MusicPlayer';
import Hero from '@/components/Hero';
import Greeting from '@/components/Greeting';
import EventDetails from '@/components/EventDetails';
import Countdown from '@/components/Countdown';
import CalendarBlock from '@/components/CalendarBlock';
import LocationBlock from '@/components/LocationBlock';
import HostsBlock from '@/components/HostsBlock';
import RsvpForm from '@/components/RsvpForm';

export default function Home() {
  return (
    <main className="relative">
      <MusicPlayer />
      <Hero />
      <Greeting />
      <EventDetails />
      <Countdown />
      <CalendarBlock />
      <LocationBlock />
      <HostsBlock />
      <RsvpForm />

      <footer className="bg-cream-50 px-6 py-8 text-center text-xs text-gold-400">
        Нұрқанат &amp; Дана — 2026
      </footer>
    </main>
  );
}
