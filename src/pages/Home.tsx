
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Image, Edit3, Repeat, Plug, Shield } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Textgenerierung",
      description: "Blogposts, Produkttexte etc."
    },
    {
      icon: <Image className="h-8 w-8" />,
      title: "Bildgenerierung per KI", 
      description: "Direkt im WordPress-Backend"
    },
    {
      icon: <Edit3 className="h-8 w-8" />,
      title: "Umformulierungs- und Zusammenfassungsfunktionen",
      description: "Texte intelligent bearbeiten"
    },
    {
      icon: <Repeat className="h-8 w-8" />,
      title: "Automatisierung von Content-Prozessen",
      description: "Workflows optimieren"
    },
    {
      icon: <Plug className="h-8 w-8" />,
      title: "API-basiert & DSGVO-freundlich",
      description: "Sicher und konform"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23919191%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Die <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">KI-Revolution</span> für WordPress beginnt hier
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Mit WP-AI Connect bringst du die Power künstlicher Intelligenz direkt ins WordPress-Backend – ganz ohne Coding.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Jetzt kostenlos testen</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <Link to="/features" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all flex items-center justify-center space-x-2">
                <span>Funktionen ansehen</span>
              </Link>
            </div>

            {/* Hero Image Placeholder */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl h-64 md:h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full inline-block mb-4">
                      <Sparkles className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-gray-500 font-medium">WordPress + AI Demo Animation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Funktionen im Überblick
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entdecke die vielfältigen KI-Funktionen, die deine Content-Erstellung revolutionieren
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit für die KI-Revolution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Starte noch heute und erlebe, wie künstliche Intelligenz deine Content-Erstellung transformiert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105">
              Kostenlos testen
            </button>
            <Link to="/pricing" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all">
              Preise ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-blue-600" />
            <span className="text-gray-600 font-medium">Made in Germany</span>
          </div>
          <p className="text-gray-500">
            DSGVO-konform entwickelt von einem deutschen Entwicklerteam
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
