
import React from 'react';
import { Target, Users, Shield, Lightbulb, Code, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "DSGVO-Konformität",
      description: "Datenschutz und Sicherheit stehen bei uns an erster Stelle. Made in Germany."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Technische Exzellenz",
      description: "Wir entwickeln mit modernsten Standards und bewährten WordPress-Praktiken."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community-First",
      description: "Unser Plugin wird gemeinsam mit der WordPress-Community entwickelt und verbessert."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Wir bringen die neuesten KI-Technologien benutzerfreundlich ins CMS."
    }
  ];

  const team = [
    {
      name: "Dr. Stefan Müller",
      role: "Lead Developer & Co-Founder",
      description: "10+ Jahre WordPress-Entwicklung, spezialisiert auf Plugin-Architektur und Performance-Optimierung.",
      image: "team-stefan.jpg"
    },
    {
      name: "Anna Schmidt",
      role: "UX/UI Designer & Co-Founder", 
      description: "Expertin für benutzerfreundliche Interfaces mit Fokus auf Content-Management-Systeme.",
      image: "team-anna.jpg"
    },
    {
      name: "Michael Weber",
      role: "AI Integration Specialist",
      description: "KI-Spezialist mit Erfahrung in OpenAI APIs und maschinellem Lernen im Web-Kontext.",
      image: "team-michael.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Über <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">WP-AI Connect</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir sind ein deutsches Entwicklerteam mit der Mission, künstliche Intelligenz nahtlos in WordPress zu integrieren.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl w-fit mx-auto mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Unsere Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              "Wir bringen Künstliche Intelligenz dorthin, wo Inhalte entstehen – ins CMS."
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Das WP-AI Connect Plugin wurde von unserem deutschen Entwicklerteam mit einem klaren Fokus entwickelt: 
              Medien, Verlage und Content-Optimierung. Wir verstehen die täglichen Herausforderungen von Content-Creators, 
              Redaktionen, SEOs und Agenturen.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nach jahrelanger Erfahrung in der WordPress-Entwicklung und dem Aufkommen leistungsstarker KI-Tools 
              erkannten wir eine Lücke: Während KI-Technologien außerhalb von WordPress florierten, blieb das CMS 
              selbst oft außen vor. WP-AI Connect schließt diese Lücke.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Unser Ziel ist es, die neuesten KI-Innovationen direkt in das Herzstück der Content-Erstellung zu bringen 
              – benutzerfreundlich, DSGVO-konform und ohne technische Barrieren.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unsere Werte
            </h2>
            <p className="text-xl text-gray-600">
              Diese Prinzipien leiten uns in allem, was wir tun
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-all">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-xl w-fit mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl w-fit mx-auto mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unser Team
            </h2>
            <p className="text-xl text-gray-600">
              Lerne die Menschen hinter WP-AI Connect kennen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:shadow-lg transition-all">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-blue-100">Jahre WordPress-Erfahrung</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-100">Zufriedene Nutzer</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support verfügbar</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">🇩🇪</div>
              <div className="text-blue-100">Made in Germany</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Werde Teil unserer Community
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Tritt einer wachsenden Gemeinschaft von Content-Creators bei, die KI für ihre WordPress-Websites nutzen.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Jetzt kostenlos testen
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
