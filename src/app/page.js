import Footer from "@/components/Footer/Footer";
import Home1About from "@/components/about/Home1About";
import Home1AwardSection from "@/components/award-section/home1-award-section";
import Home1BannerSection from "@/components/banner-section/home1-banner-section";
import Home1BlogSection from "@/components/blog-section/home1-blog-section";
import Home1ContactSection from "@/components/contact-section/home1-contact-section";
import Header from "@/components/header/Header";
import Home1ProcessSection from "@/components/process-section/home1-process-section";
import Home1solutionSection from "@/components/solution-section/Home1solution-section";
import Home1TestimonialSection from "@/components/testimonial-section/home1-testimonial-section";
import HomeworkSection from "@/components/work-section/Homework-section";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
export default function Home() {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="line_wrap">
          <div className="line_item first-line" />
          <div className="line_item center-line" />
          <div className="line_item last-line" />
        </div>
        <Home1BannerSection />
        <Home1About />
        <Home1solutionSection style="pb-130" />
        <HomeworkSection />
        <Home1ProcessSection />
        <Home1TestimonialSection />
        <Home1AwardSection />
        <Home1BlogSection />
        <Home1ContactSection />
      </main>
      <Footer />
    </>
  );
}
