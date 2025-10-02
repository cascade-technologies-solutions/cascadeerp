import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin } from "lucide-react";
  import akshay from "@/assets/Akshay_pic.png";
import manoj from "@/assets/manoj_pic.png";
import vaibhava from "@/assets/Vaibhav_pic.png";
export function Team() {
  const teamMembers = [{
    name: "Akshay Kumar Ankalagi",
    role: "Chief Executive Officer",
    bio: "Visionary leader spearheading CascadeTech's strategic initiatives and growth across global markets.",
    image: akshay,
    links: {
      linkedin: "https://www.linkedin.com/in/akshaykumar-ankalagi-10b37933a"
    }
  }, {
    name: "Manoj Relekar",
    role: "Chief Operating Officer",
    bio: "Operational mastermind ensuring efficient execution and organizational excellence across our ventures.",
    image: manoj,
    links: {
      linkedin: "https://www.linkedin.com/in/manojrelekar3/"
    }
  }, {
    name: "Vaibhava BG",
    role: "Chief Technology Officer",
    bio: "Tech innovator developing cutting-edge solutions that power our platforms and client success stories.",
    image: vaibhava,
    links: {
      linkedin: "https://www.linkedin.com/in/vaibhav-b-g-284b63346"
    }
  }];
  
  return <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 right-0 w-1/2 h-80 bg-cascade-50 rounded-full blur-3xl -z-10 opacity-50"></div>
      <div className="absolute -bottom-40 left-0 w-1/2 h-80 bg-cascade-50 rounded-full blur-3xl -z-10 opacity-50"></div>
      
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 animate-fade-in [animation-delay:150ms]">Meet Our Team</h2>
          <p className="mt-4 text-lg text-slate-600 animate-fade-in [animation-delay:300ms]">
            Passionate leaders committed to transforming businesses through technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {teamMembers.map((member, index) => <div key={member.name} className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300 animate-scale-in" style={{
          animationDelay: `${index * 150 + 150}ms`
        }}>
              <div className="aspect-w-1 aspect-h-1 bg-gradient-to-b from-slate-100 to-cascade-50 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                <p className="text-cascade-600 font-medium mt-1">{member.role}</p>
                <p className="mt-3 text-slate-600 text-sm">{member.bio}</p>
                <div className="mt-4 flex space-x-3">
                  <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-cascade-50 hover:text-cascade-600 transition-colors">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </Container>
    </section>;
}
