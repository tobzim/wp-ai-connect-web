
import React from 'react';
import { Sparkles, Image, Edit3, Blocks, Code, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Sparkles className="h-12 w-12" />,
      title: "Text-Generator",
      description: "Erstelle ganze Artikel mit nur einem Klick – ideal für Blog, SEO und WooCommerce.",
      details: [
        "Blogposts in verschiedenen Stilrichtungen",
        "Produktbeschreibungen für WooCommerce", 
        "SEO-optimierte Meta-Beschreibungen",
        "Social Media Posts",
        "E-Mail-Texte und Newsletter"
      ],
      image: "screenshot-text-generator.png"
    },
    {
      icon: <Edit3 className="h-12 w-12" />,
      title: "Rewrite & Summarize",
      description: "Verändere Tonalität oder Länge von Texten blitzschnell.",
      details: [
        "Texte verkürzen oder erweitern",
        "Tonalität anpassen (formal, locker, professionell)",
        "Automatische Zusammenfassungen",
        "Übersetzungen in verschiedene Sprachen",
        "Rechtschreibung und Grammatik korrigieren"
      ],
      image: "screenshot-rewrite.png"
    },
    {
      icon: <Image className="h-12 w-12" />,
      title: "Bildgenerator",
      description: "Erstelle KI-Bilder direkt im WP-Backend – perfekt für Beitragsbilder oder Social Media.",
      details: [
        "Beitragsbilder in verschiedenen Stilen",
        "Social Media Graphics",
        "Produktvisualisierungen",
        "Verschiedene Bildformate und Auflösungen",
        "Direkte Integration in die Mediathek"
      ],
      image: "screenshot-image-generator.png"
    },
    {
      icon: <Blocks className="h-12 w-12" />,
      title: "WordPress Integration",
      description: "Einfaches Einfügen über Gutenberg, Shortcodes oder eigene Blöcke.",
      details: [
        "Native Gutenberg-Blöcke",
        "Shortcode-Unterstützung",
        "Classic Editor Integration",
        "Toolbar-Buttons für schnellen Zugriff",
        "Bulk-Operationen für mehrere Posts"
      ],
      image: "screenshot-integration.png"
    }
  ];

  const requirements = [
    "WordPress 6.0 oder höher",
    "PHP 7.4 oder höher", 
    "OpenAI API-Key erforderlich",
    "SSL-Zertifikat empfohlen",
    "Mindestens 128 MB PHP Memory Limit"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Funktionen von <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">WP-AI Connect</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecke alle Möglichkeiten, wie künstliche Intelligenz deine WordPress-Website revolutioniert
          </p>
        </div>
      </section>

      {/* Features Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {features.map((feature, index) => (
            <div key={index} className={`mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex lg:items-center lg:gap-16`}>
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl w-fit mb-6">
                  {feature.icon}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <div className="bg-blue-100 p-1 rounded-full mt-1">
                        <Zap className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-full inline-block mb-4">
                      {feature.icon}
                    </div>
                    <p className="text-gray-500 font-medium">Screenshot: {feature.title}</p>
                    <p className="text-sm text-gray-400 mt-2">{feature.image}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl w-fit mx-auto mb-6">
              <Code className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technische Voraussetzungen
            </h2>
            <p className="text-xl text-gray-600">
              Stelle sicher, dass dein System alle Anforderungen erfüllt
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <ul className="space-y-4">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Zap className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit, loszulegen?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Teste alle Funktionen 14 Tage kostenlos und ohne Verpflichtungen
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Jetzt kostenlos testen
          </button>
        </div>
      </section>
    </div>
  );
};

export default Features;
