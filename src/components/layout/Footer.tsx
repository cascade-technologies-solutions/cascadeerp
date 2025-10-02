import { Container } from "@/components/ui/Container";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";
export function Footer() {
  return <footer className="bg-slate-50 border-t border-slate-200">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="CascadeTech Logo" className="h-10" />
              <span className="text-xl font-display font-bold text-cascade-950">
                <span className="text-cascade-600">CascadeTech</span> Solutions
              </span>
            </Link>
            <p className="mt-4 text-slate-600 max-w-md">
Empowering businesses through cutting-edge technology, specializing in web design, software development, and intelligent digital solutions.            </p>
            <div className="mt-6 flex space-x-4">
              <a href="https://linkedin.com/company/cascade-technologies" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-slate-200 text-slate-600 hover:text-cascade-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com/Cascade_Teachno" target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-slate-200 text-slate-600 hover:text-cascade-600 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-slate-900">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-600 hover:text-cascade-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-600 hover:text-cascade-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                {/* <Link to="/team" className="text-slate-600 hover:text-cascade-600 transition-colors">
                  Our Team
                </Link> */}
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-cascade-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-slate-900">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/services" className="text-slate-600 hover:text-cascade-600 transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-600 hover:text-cascade-600 transition-colors">
                  Web Design & UI/UX
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-600 hover:text-cascade-600 transition-colors">
                  Software Development
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-600 hover:text-cascade-600 transition-colors">
                  AI & Chatbot Development
                </a>
              </li>
              <li>
                <a href="/services" className="text-slate-600 hover:text-cascade-600 transition-colors">Educational Technology</a>
              </li>
              <li>
                <a href="/services" className="text-slate-600 hover:text-cascade-600 transition-colors">
                  Loayalty Program Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-slate-900">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-cascade-600 mt-0.5" />
                <span className="text-slate-600">cascadetechnologiessolutions@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-cascade-600 mt-0.5" />
                <span className="text-slate-600">
                  Vidya-Nagar Hubbali, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-bold text-slate-500">
          <p>© {new Date().getFullYear()} CascadeTech Solutions. All rights reserved.</p>
        </div>
      </Container>
    </footer>;
}