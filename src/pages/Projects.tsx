
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-cascade-50 border border-cascade-100 text-cascade-700 text-sm font-medium animate-fade-in">
                Our Projects
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 animate-fade-in [animation-delay:150ms]">
                Innovative Solutions That Drive Results
              </h1>
              <p className="mt-6 text-xl text-slate-600 animate-fade-in [animation-delay:300ms]">
                Explore our portfolio of digital platforms and tools designed to 
                solve real-world problems and accelerate business growth.
              </p>
            </div>
          </Container>
        </section>

        {/* Startopia Project */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 animate-slide-in">
                <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-cascade-50 border border-cascade-100 text-cascade-700 text-sm font-medium">
                  Featured Project
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Startopia
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  A comprehensive platform connecting startups with investors, 
                  mentors, and essential services to accelerate growth and 
                  secure funding.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Investor Matching</h3>
                      <p className="mt-1 text-slate-600">
                        Intelligent algorithm that connects startups with investors based on industry, stage, and funding needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Mentor Network</h3>
                      <p className="mt-1 text-slate-600">
                        Access to a curated network of experienced mentors and advisors across industries.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Funding Readiness Tools</h3>
                      <p className="mt-1 text-slate-600">
                        Resources and assessment tools to help startups prepare for successful funding rounds.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Startup Growth
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Investor Matching
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Mentorship
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Funding
                  </span>
                </div>
                <div className="mt-10">
                  <Button as={Link} to="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-slide-in [animation-delay:300ms]">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl bg-slate-100 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-cascade-100 to-cascade-200 flex items-center justify-center">
                    <div className="text-5xl font-display font-bold text-cascade-800 animate-float">Startopia</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* TextYourBoss.ai Project */}
        <section className="py-16 md:py-24 bg-slate-50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-slide-in">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl bg-white overflow-hidden shadow-sm">
                  <div className="w-full h-full bg-gradient-to-br from-white to-cascade-50 flex items-center justify-center">
                    <div className="text-5xl font-display font-bold text-cascade-800 animate-float">TextYourBoss.ai</div>
                  </div>
                </div>
              </div>
              <div className="animate-slide-in [animation-delay:300ms]">
                <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-white border border-slate-200 text-cascade-700 text-sm font-medium">
                  AI-Powered Solution
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  TextYourBoss.ai
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  An artificial intelligence platform providing instant business guidance, 
                  decision support, and strategic insights to entrepreneurs 
                  and executives.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">AI Business Coaching</h3>
                      <p className="mt-1 text-slate-600">
                        Real-time guidance and advice on business strategy, operations, and management.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Decision Analysis</h3>
                      <p className="mt-1 text-slate-600">
                        AI-powered analysis of business decisions and their potential outcomes.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Strategic Planning</h3>
                      <p className="mt-1 text-slate-600">
                        Tools to help businesses develop and refine their strategic plans.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Artificial Intelligence
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Business Guidance
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Decision Support
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Strategy
                  </span>
                </div>
                <div className="mt-10">
                  <Button as={Link} to="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Future Projects */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-cascade-50 border border-cascade-100 text-cascade-700 text-sm font-medium">
                Future Innovations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Coming Soon
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We're constantly innovating and developing new solutions. 
                Here's a preview of what's coming next from Cascade Space.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-scale-in [animation-delay:150ms]">
                <div className="h-14 w-14 rounded-xl bg-cascade-50 flex items-center justify-center text-cascade-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Renewable Energy Solutions</h3>
                <p className="mt-3 text-slate-600">
                  Digital platforms and tools for renewable energy management, 
                  optimization, and distribution.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Energy
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Sustainability
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Innovation
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-scale-in [animation-delay:300ms]">
                <div className="h-14 w-14 rounded-xl bg-cascade-50 flex items-center justify-center text-cascade-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Trading Platforms</h3>
                <p className="mt-3 text-slate-600">
                  Intelligent trading systems with advanced analytics, 
                  portfolio management, and risk assessment tools.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Finance
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Trading
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Analytics
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 animate-scale-in [animation-delay:450ms]">
                <div className="h-14 w-14 rounded-xl bg-cascade-50 flex items-center justify-center text-cascade-600 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Robotics & Automation</h3>
                <p className="mt-3 text-slate-600">
                  Control systems and interfaces for industrial robotics, 
                  automation, and process optimization.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Robotics
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Automation
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    Industry
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Have a Project in Mind?
              </h2>
              <p className="mt-6 text-xl text-slate-600">
                Let's discuss how we can help bring your vision to life.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button as={Link} to="/contact" size="lg">
                  Start a Conversation
                </Button>
                <Button as={Link} to="/services" variant="outline" size="lg">
                  Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
