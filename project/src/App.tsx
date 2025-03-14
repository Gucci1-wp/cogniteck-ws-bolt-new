import React from 'react';
import { Server, Shield, Clock, MessageSquare, CheckCircle2, ArrowRight, Laptop, Network, Cloud, Lock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-gray-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.15)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-6">
              Cogniteck IT Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your reliable partner in IT solutions and digital innovation.
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-[#161B22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Laptop className="w-8 h-8" />, title: "Desktop Support", description: "Comprehensive support for all your workstation needs with Cogniteck's expert team" },
              { icon: <Network className="w-8 h-8" />, title: "Network Solutions", description: "Expert networking and infrastructure management by Cogniteck specialists" },
              { icon: <Cloud className="w-8 h-8" />, title: "Cloud Services", description: "Secure and scalable cloud computing solutions powered by Cogniteck" },
              { icon: <Lock className="w-8 h-8" />, title: "Cybersecurity", description: "Advanced security measures to protect your business with Cogniteck's security protocols" },
              { icon: <MessageSquare className="w-8 h-8" />, title: "24/7 Help Desk", description: "Round-the-clock technical support from Cogniteck's dedicated team" },
              { icon: <Server className="w-8 h-8" />, title: "Server Management", description: "Reliable server maintenance and monitoring by Cogniteck experts" }
            ].map((service, index) => (
              <div key={index} className="bg-[#21262D] p-6 rounded-xl hover:bg-[#2D333B] transition-all duration-300">
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Cogniteck</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { icon: <Shield className="w-6 h-6" />, title: "Enterprise-Grade Security", description: "State-of-the-art security protocols and monitoring by Cogniteck's security experts" },
              { icon: <Clock className="w-6 h-6" />, title: "24/7 Availability", description: "Round-the-clock support from Cogniteck's dedicated team" },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: "Certified Experts", description: "Team of certified Cogniteck IT professionals" },
              { icon: <ArrowRight className="w-6 h-6" />, title: "Quick Response", description: "Fast resolution for all your IT issues with Cogniteck's rapid response system" }
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-cyan-600 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to transform your IT infrastructure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Cogniteck today and discover how our expert team can help secure and optimize your IT operations
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Contact Us Now
            </button>
            <a 
              href="https://cogniteck.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-cyan-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-cyan-800 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#161B22] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>© 2024 Cogniteck.com. All rights reserved.</p>
            <p className="mt-2">
              <a 
                href="https://cogniteck.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Visit our main website
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;