import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import akshay from "../assets/Akshay_pic.png";
import manoj from "../assets/manoj_pic.png";
import vaibhava from "../assets/Vaibhav_pic.png";
const Team = () => {
  const executives = [{
    name: "Akshay Kumar Ankalagi",
    role: "Chief Executive Officer",
    bio: "Akshay Kumar Ankalagi is the visionary CEO of CascadeTech Solutions, bringing extensive experience in technology leadership and business transformation. His strategic insights and forward-thinking approach have positioned CascadeTech as a leader in digital innovation. Akshay specializes in identifying market opportunities and developing solutions that create lasting value for clients across industries.",
    image: akshay,
    links: {
      linkedin: "https://www.linkedin.com/in/akshaykumar-ankalagi-10b37933a",
      email: "akshay@cascadetech.com"
    }
  }, {
    name: "Manoj Relekar",
    role: "Chief Operating Officer",
    bio: "Manoj Relekar serves as the operational backbone of CascadeTech Solutions, bringing exceptional organizational leadership and process optimization expertise. With a background spanning technology and business operations, Manoj ensures that our service delivery consistently exceeds client expectations. His methodical approach to scaling operations has been instrumental in CascadeTech's sustainable growth trajectory.",
    image: manoj,
    links: {
      linkedin: "https://www.linkedin.com/in/manojrelekar3/",
      email: "manoj@cascadetech.com"
    }
  }, {
    name: "Vaibhava BG",
    role: "Chief Technology Officer",
    bio: "Vaibhava BG leads CascadeTech's technical innovation as CTO, combining deep technical expertise with creative problem-solving abilities. His passion for emerging technologies like AI, blockchain, and cloud architecture drives our product development roadmap. Vaibhava's leadership in building scalable, secure digital platforms has been crucial in delivering transformative solutions for our clients' most complex challenges.",
    image: vaibhava,
    links: {
      linkedin: "https://www.linkedin.com/in/vaibhav-b-g-284b63346",
      email: "vaibhava@cascadetech.com"
    }
  }];
  const coreValues = [{
    title: "Innovation",
    description: "Constantly exploring new technologies and approaches to deliver better solutions.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
  }, {
    title: "Excellence",
    description: "Committed to exceeding expectations with precision and attention to detail.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
        </svg>
  }, {
    title: "Integrity",
    description: "Building trust through honest, transparent, and ethical business practices.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
  }, {
    title: "Collaboration",
    description: "Working together across disciplines to create comprehensive solutions.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
  }];
  return <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-cascade-50 border border-cascade-100 text-cascade-700 text-sm font-medium animate-fade-in">
              Our Leadership
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 animate-fade-in [animation-delay:150ms]">
              The Team Behind CascadeTech Solutions
            </h1>
            <p className="mt-6 text-xl text-slate-600 animate-fade-in [animation-delay:300ms]">
              Meet our visionary leaders who are transforming how businesses leverage technology 
              for growth and innovation.
            </p>
          </div>
        </Container>
      </section>

      {/* Executive Team Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-cascade-50 border border-cascade-100 text-cascade-700 text-sm font-medium">
              Executive Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Meet Our Executives
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The visionaries steering our company toward excellence and innovation.
            </p>
          </div>

          <div className="space-y-16">
            {executives.map((exec, index) => <div key={exec.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`animate-slide-in ${index % 2 === 1 ? 'order-1 lg:order-2' : 'order-1'}`}>
                  <div className="aspect-w-4 aspect-h-3 rounded-2xl bg-slate-100 overflow-hidden shadow-lg">
                    <img src={exec.image} alt={exec.name} className="w-full h-full object-cover object-center" />
                  </div>
                </div>
                <div className={`animate-slide-in [animation-delay:300ms] ${index % 2 === 1 ? 'order-2 lg:order-1' : 'order-2'}`}>
                  <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-cascade-50 border border-cascade-100 text-cascade-700 text-sm font-medium">
                    {exec.role}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    {exec.name}
                  </h3>
                  <p className="mt-4 text-lg text-slate-600">
                    {exec.bio}
                  </p>
                  <div className="mt-6 flex space-x-4">
                    <a href={exec.links.linkedin} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-slate-200 text-slate-600 hover:text-cascade-600 transition-colors" aria-label={`LinkedIn profile of ${exec.name}`}>
                      <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${exec.links.email}`} className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-slate-200 text-slate-600 hover:text-cascade-600 transition-colors" aria-label={`Email ${exec.name}`}>
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>)}
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-white border border-slate-200 text-cascade-700 text-sm font-medium">
              Our Core Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What Guides Our Team
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The principles that shape our approach to every project and client relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => <div key={value.title} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-scale-in" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className="h-14 w-14 rounded-xl bg-cascade-50 flex items-center justify-center text-cascade-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-slate-600">
                  {value.description}
                </p>
              </div>)}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="bg-gradient-to-r from-cascade-600 to-cascade-800 rounded-2xl p-10 md:p-16 text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-grid-white/10 opacity-20"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Our team is ready to help you achieve your digital transformation goals.
                Let's start a conversation today.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button as={Link} to="/contact" className="bg-white text-cascade-800 hover:bg-slate-100">
                  Contact Our Team
                </Button>
                <Button as={Link} to="/services" variant="outline" className="text-white border-white bg-White/10 hover:bg-White/20">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>;
};
export default Team;