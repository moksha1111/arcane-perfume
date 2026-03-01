import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import NotesPyramid from './components/NotesPyramid';
import Story from './components/Story';
import Ingredients from './components/Ingredients';
import Atelier from './components/Atelier';
import Testimonials from './components/Testimonials';
import Visit from './components/Visit';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection />
      <NotesPyramid />
      <Story />
      <Ingredients />
      <Atelier />
      <Testimonials />
      <Visit />
      <Footer />
    </>
  );
}
