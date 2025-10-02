import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
const Services = () => {
  return <MainLayout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-cascade-50 border border-cascade-100 text-cascade-700 text-sm font-medium animate-fade-in">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 animate-fade-in [animation-delay:150ms]">
              Innovative Solutions for Modern Businesses
            </h1>
            <p className="mt-6 text-xl text-slate-600 animate-fade-in [animation-delay:300ms]">
              We provide comprehensive technology services designed to help businesses establish, expand, and succeed in today's digital-first landscape.
            </p>
          </div>
        </Container>
      </section>

      {/* Digital Transformation */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 animate-slide-in">
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-cascade-50 border border-cascade-100 text-cascade-700 text-sm font-medium">
                Digital Transformation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Establish a Powerful Online Presence
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We empower businesses to strengthen their digital identity through tailored websites, mobile applications, and automation solutions.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Custom Website Development</h3>
                    <p className="mt-1 text-slate-600">
                      High-performance, responsive websites aligned with your brand and business objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Mobile App Development</h3>
                    <p className="mt-1 text-slate-600">
                      Engaging, cross-platform mobile applications that drive conversions and user satisfaction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Process Automation</h3>
                    <p className="mt-1 text-slate-600">
                      Automated workflows and digital process management to streamline business operations and improve efficiency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Button as={Link} to="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-slide-in [animation-delay:300ms]">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl bg-slate-100 overflow-hidden shadow-md">
                <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Digital Transformation" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Startup Growth Platform
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-in">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl bg-white overflow-hidden shadow-md">
                <img alt="Startup Growth Platform" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>
            <div className="animate-slide-in [animation-delay:300ms]">
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-white border border-slate-200 text-cascade-700 text-sm font-medium">
                Startup Growth Platform
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Accelerate Startup Growth
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We provide platform with tools that help startups grow, connect
                with investors, and prepare for successful funding rounds.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Investor Matching Solutions</h3>
                    <p className="mt-1 text-slate-600">
                      Connect startups with the right investors based on industry, stage, and funding needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Growth Acceleration Tools</h3>
                    <p className="mt-1 text-slate-600">
                      Software solutions that streamline operations and help startups scale efficiently.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Funding Readiness Solutions</h3>
                    <p className="mt-1 text-slate-600">
                      Tools and platforms to help startups prepare for and secure investment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Button as={Link} to="/contact">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section> */}

      {/* AI & Smart Solutions */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 animate-slide-in">
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-cascade-50 border border-cascade-100 text-cascade-700 text-sm font-medium">
                AI & Smart Solutions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Harness the Power of Artificial Intelligence
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We build AI-driven platforms and tools that deliver strategic insights, automate processes, and enhance decision-making for modern businesses.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">AI Business Assistants</h3>
                    <p className="mt-1 text-slate-600">
                      Intelligent virtual assistants that provide personalized guidance and support.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Data Analysis & Insights</h3>
                    <p className="mt-1 text-slate-600">
                      Advanced analytics solutions that convert raw data into meaningful business intelligence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Automated Decision Systems</h3>
                    <p className="mt-1 text-slate-600">
                      AI-powered frameworks that optimize complex decision-making and improve operational efficiency.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Button as={Link} to="/contact">
                  Explore AI Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-slide-in [animation-delay:300ms]">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl bg-slate-100 overflow-hidden shadow-md">
                <img alt="AI & Smart Solutions" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>
          </div>
        </Container>
      </section>

           {/* Design & Branding */}
      <section className="py-16 md:py-24 bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text first, Image second (same as other sections) */}
            <div className="order-2 lg:order-1 animate-slide-in">
              <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-white border border-slate-200 text-cascade-700 text-sm font-medium">
                Design & Branding
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Create Memorable Digital Experiences
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We craft intuitive user interfaces and build strong brand identities that resonate with your audience, driving engagement and long-term loyalty.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">UI/UX Design</h3>
                    <p className="mt-1 text-slate-600">
                      User-focused interface designs that enhance usability and boost customer satisfaction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Brand Identity Development</h3>
                    <p className="mt-1 text-slate-600">
                      Comprehensive branding strategies that reflect your unique value and vision.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-cascade-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Marketing Materials</h3>
                    <p className="mt-1 text-slate-600">
                      Compelling digital assets designed to increase awareness, strengthen presence, and generate leads.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Button as={Link} to="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-slide-in [animation-delay:300ms]">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl bg-white overflow-hidden shadow-md">
                <img
                  alt="Design & Branding"
                  className="w-full h-full object-cover"
                  src="https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
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
              Ready to Transform Your Business?
            </h2>
            <p className="mt-6 text-xl text-slate-600">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button as={Link} to="/contact" size="lg">
                Contact Us
              </Button>
              <Button as={Link} to="/services" variant="secondary" size="lg" className="bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-800">
                Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </MainLayout>;
};
export default Services;