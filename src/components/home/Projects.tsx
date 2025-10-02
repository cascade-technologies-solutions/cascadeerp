
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <Container>
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 animate-fade-in">
            Our Innovative Projects
          </h2>
          <p className="mt-4 text-lg text-slate-600 animate-fade-in [animation-delay:150ms]">
            Discover our cutting-edge platforms and tools designed to solve 
            real-world problems and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Startopia */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300 animate-slide-up [animation-delay:300ms]">
            <div className="aspect-w-16 aspect-h-9 bg-slate-100">
              <div className="w-full h-full bg-gradient-to-r from-cascade-100 to-cascade-50 flex items-center justify-center p-8">
                <div className="text-4xl font-display font-bold text-cascade-800">Startopia</div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900">Startopia</h3>
              <p className="mt-3 text-slate-600">
                A comprehensive platform connecting startups with investors, 
                mentors, and essential services to accelerate growth and 
                secure funding.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
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
              <div className="mt-8">
                <Link to="/projects" className="inline-flex items-center text-cascade-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* TextYourBoss.ai */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all duration-300 animate-slide-up [animation-delay:450ms]">
            <div className="aspect-w-16 aspect-h-9 bg-slate-100">
              <div className="w-full h-full bg-gradient-to-r from-cascade-50 to-cascade-100 flex items-center justify-center p-8">
                <div className="text-4xl font-display font-bold text-cascade-800">TextYourBoss.ai</div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-slate-900">TextYourBoss.ai</h3>
              <p className="mt-3 text-slate-600">
                An AI-powered platform providing instant business guidance, 
                decision support, and strategic insights to entrepreneurs 
                and executives.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
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
              <div className="mt-8">
                <Link to="/projects" className="inline-flex items-center text-cascade-600 font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button as={Link} to="/projects">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
