import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import BlogPosts from "@/components/BlogPosts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation delay={100}>
        <About />
      </ScrollAnimation>
      <ScrollAnimation delay={200}>
        <Projects />
      </ScrollAnimation>
      <ScrollAnimation delay={300}>
        <BlogPosts />
      </ScrollAnimation>
      <ScrollAnimation delay={400}>
        <Contact />
      </ScrollAnimation>
      <Footer />
    </main>
  );
}
