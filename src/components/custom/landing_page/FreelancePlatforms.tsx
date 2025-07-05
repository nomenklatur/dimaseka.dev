import { ExternalLink, Star, MessageCircle, Calendar, Sparkles, Award, Users, CircleQuestionMark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

const FreelancePlatforms = () => {
  const platforms = [
    {
      name: "Upwork",
      description: "Top Rated Plus freelancer with 100% job success rate",
      link: "https://www.upwork.com/freelancers/~019284d45ba640c304",
      icon: "/logos/upwork.png"
    },
    {
      name: "Fiverr",
      description: "Level 2 seller offering premium web development services",
      link: "https://www.fiverr.com/s/XLvWLgD",
      icon: "/logos/fiverr.png"
    },
    {
      name: "Sribu",
      description: "Featured developer for enterprise web applications based in Indonesia",
      link: "https://www.sribu.com/id/users/dimaseka.dev",
      color: "bg-purple-50 text-purple-700 border-purple-200",
      icon: "/logos/sribu.png"
    },
    {
      name: "Fastwork",
      description: "Available for long-term remote partnerships",
      link: "https://fastwork.id/user/nomenclature",
      icon: "/logos/fastwork.png"
    }
  ];

  return (
    <section id="platforms" className="py-24 px-4 bg-gradient-to-br from-slate-50/50 via-white to-blue-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-emerald-100/40 to-blue-100/40 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
      
      <div className="container max-w-7xl relative z-10">
        <div className="text-start mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-300 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 animate-bounce" />
            Available for Projects
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
            Ready to Hire
          </h2>
          <p className="text-lg font-figtree text-gray-400 max-w-4xl leading-relaxed">
            Choose your preferred way to work together. From established platforms with verified reviews 
            to direct collaboration for custom solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Freelance Platforms Card - More Prominent */}
          <Card className="lg:col-span-3 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden group">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-2xl -translate-y-20 translate-x-20 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-200/20 to-blue-200/20 rounded-full blur-xl translate-y-16 -translate-x-16 group-hover:scale-110 transition-transform duration-700"></div>
            
            <CardContent className="p-10 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <h3 className="text-3xl font-bold text-slate-900">Freelance Platforms</h3>
                </div>
                <Badge className="bg-yellow-400 text-white border-0 px-4 py-1 text-sm font-semibold shadow-lg">
                  Most Popular
                </Badge>
              </div>
              
              <p className="text-gray-600 mb-10 text-lg font-figtree leading-relaxed">
                Hire me through established freelance platforms with verified reviews, secure payments, 
                and platform protection for your peace of mind.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {platforms.map((platform, index) => {
                  return (
                    <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-slate-200 transition-all duration-300 group/item">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                            <Image src={platform.icon} width={50} height={50} className="w-full rounded-lg" alt="Upwork" />
                            {/* <IconComponent className="w-4 h-4 text-slate-600" /> */}
                          </div>
                          <h4 className="font-bold text-lg text-slate-900">{platform.name}</h4>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">{platform.description}</p>

                      <Link href={platform.link} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white border-0 shadow-md group-hover/item:shadow-lg transition-all">
                            View Profile
                        </Button>
                      </Link>
                    </div>
                  );
                })}
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center">
                    <CircleQuestionMark className="w-8 h-8 text-gray-800" />
                  </div>
                  <p className="font-bold text-slate-900">Why choose freelance platforms?</p>
                </div>
                <ul className="text-sm text-slate-600 space-y-2 ml-8">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    Secure payment processing & escrow protection
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    Verified reviews and transparent ratings
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    Platform support and dispute resolution
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Custom Hiring Card - Elegant but Secondary */}
          <Card className="lg:col-span-2 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-slate-50/50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-slate-200/20 to-blue-200/20 rounded-full blur-xl -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-700"></div>
            
            <CardContent className="p-8 relative z-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <MessageCircle className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Custom Projects</h3>
                <p className="text-slate-600 leading-relaxed">
                  Need something unique? Let's discuss your custom requirements and create a tailored solution.
                </p>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mt-0.5 shadow-sm">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Tailored Solutions</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Custom pricing and timeline based on your specific project needs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-green-400 rounded-lg flex items-center justify-center mt-0.5 shadow-sm">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Direct Communication</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Work directly for faster feedback and implementation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg flex items-center justify-center mt-0.5 shadow-sm">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Flexible Terms</p>
                    <p className="text-sm text-slate-600 leading-relaxed">Negotiate terms and milestones that work for both parties</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <Link href="mailto:hi@dimaseka.my.id?subject=Hello&body=I want to talk about..." target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white border-0 shadow-md hover:shadow-lg transition-all">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Send Message
                    </Button>
                </Link>
                <Link href="https://calendar.app.google/QWh7tRdk9x2pkDHo8" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Call
                    </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FreelancePlatforms;