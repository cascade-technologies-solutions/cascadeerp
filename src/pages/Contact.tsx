import { MainLayout } from "@/components/layout/MainLayout";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible."
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <MainLayout>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-cascade-50 border border-cascade-100 text-cascade-700 text-sm font-medium animate-fade-in">
                Get in Touch
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 animate-fade-in [animation-delay:150ms]">
                Let's Start a Conversation
              </h1>
              <p className="mt-6 text-xl text-slate-600 animate-fade-in [animation-delay:300ms]">
                Have a project in mind or questions about our services? 
                We'd love to hear from you.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="animate-slide-in">
                <h2 className="text-3xl font-bold text-slate-900">
                  Contact Information
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Reach out to us using any of the methods below, or fill out 
                  the form to send us a message directly.
                </p>

                <div className="mt-10 space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="h-14 w-14 rounded-full bg-cascade-50 flex items-center justify-center text-cascade-600 flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Email</h3>
                      <p className="mt-2 text-lg text-slate-600">contact@cascadespace.com</p>
                      <p className="mt-1 text-slate-500">We'll respond as soon as possible</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="h-14 w-14 rounded-full bg-cascade-50 flex items-center justify-center text-cascade-600 flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Phone</h3>
                      {/* <p className="mt-2 text-lg text-slate-600">+91 7406899490</p> */}
                      <p className="mt-2 text-lg text-slate-600">+91 8496835245</p>
                      <p className="mt-2 text-lg text-slate-600">+91 9902850039</p>
                      <p className="mt-1 text-slate-500">Monday-Friday, 9am-5pm PT</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="h-14 w-14 rounded-full bg-cascade-50 flex items-center justify-center text-cascade-600 flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">Office</h3>
                      <p className="mt-2 text-lg text-slate-600">Vidya-Nagar Hubballi,, Karnataka, India.</p>
                      <p className="text-slate-600">580021</p>
                      <p className="mt-1 text-slate-500">Come visit us</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-slate-200">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Follow Us
                  </h3>
                  <div className="mt-4 flex space-x-4">
                    <a href="#" className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-sm border border-slate-200 text-slate-600 hover:text-cascade-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                    </a>
                    <a href="#" className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-sm border border-slate-200 text-slate-600 hover:text-cascade-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    <a href="#" className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-sm border border-slate-200 text-slate-600 hover:text-cascade-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="animate-slide-in [animation-delay:300ms]">
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-slate-100 h-fit">
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Name
                      </label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cascade-500 focus:border-transparent transition-all" placeholder="Your name" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email
                      </label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cascade-500 focus:border-transparent transition-all" placeholder="Your email" />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                        Company
                      </label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cascade-500 focus:border-transparent transition-all" placeholder="Your company" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                        Message
                      </label>
                      <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cascade-500 focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
                    </div>

                    <div>
                      <Button type="submit" className="w-full" isLoading={isSubmitting}>
                        Send Message
                      </Button>
                      <p className="mt-3 text-sm text-slate-500 text-center">
                        We'll get back to you within 24-48 hours.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Map Section (Placeholder) */}
        <section className="py-16 md:py-24">
          <Container>
            <div className="aspect-w-16 aspect-h-9 rounded-2xl bg-slate-100 overflow-hidden shadow-md">
              <div className="w-full h-full bg-gradient-to-r from-cascade-50 to-cascade-100 flex items-center justify-center">
                <div className="text-2xl font-display font-bold text-cascade-700 animate-pulse-light">Map Placeholder</div>
              </div>
            </div>
          </Container>
        </section>
    </MainLayout>
  );
};
export default Contact;