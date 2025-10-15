import About from "@/component/about/about";
import Hero from "@/component/hero/hero";
import Navbar from "@/component/navbar/navbar";
import Programs from "@/component/programs/programs";
import Activites from "@/component/activities/activities";
import Contact from "@/component/contact/contact";  
import Footer from "@/component/footer/footer";


export default function Home() {
  return (
    <div >
    <Navbar />
    <Hero />
    <About />
    <Programs />
    <Activites />
    <Contact />
    <Footer />
    </div>
  );
}
