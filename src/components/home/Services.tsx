
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Website Development",
      description: "Custom website development tailored to your unique business needs and goals.",
      icon: "🌐",
    },
    {
      title: "Web Design & UI/UX",
      description: "Visually stunning designs with intuitive user experiences that engage your audience.",
      icon: "🎨",
    },
    {
      title: "Software Development",
      description: "Custom software solutions that streamline operations and drive business growth.",
      icon: "💻",
    },
    {
      title: "AI & Chatbot Development",
      description: "Intelligent conversational interfaces to enhance customer experience and engagement.",
      icon: "🤖",
    },
    {
      title: "Loyalty Program Solutions",
      description: "Comprehensive solutions to build and maintain customer loyalty for your business.",
      icon: "🏆",
    },
    {
      title: "Educational Technology",
      description: "Innovative digital solutions to enhance learning experiences and educational outcomes.",
      icon: "📚",
    },
  ];

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-0 w-1/3 h-80 bg-cascade-50 rounded-full blur-3xl -z-10 opacity-50"></div>
      <div className="absolute bottom-20 right-0 w-1/3 h-80 bg-cascade-50 rounded-full blur-3xl -z-10 opacity-50"></div>
      
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-cascade-50 border border-cascade-100 text-cascade-700 text-sm font-medium animate-fade-in">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 animate-fade-in [animation-delay:150ms]">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-slate-600 animate-fade-in [animation-delay:300ms]">
            Cascade Space delivers cutting-edge technology solutions designed to align with your business objectives. Our expertise spans from digital transformation to artificial intelligence, ensuring measurable outcomes at every stage of engagement.
          </p>
          <div className="mt-8 animate-fade-in [animation-delay:450ms]">
            <Button as={Link} to="/services" className="shadow-lg hover:shadow-xl">
              Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
