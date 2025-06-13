
import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "Kostenlos",
      description: "Perfekt zum Ausprobieren",
      features: [
        "Text-Generator (50 Requests/Monat)",
        "Basis Umformulierungsfunktionen",
        "Community Support",
        "WordPress 6.0+ kompatibel",
        "DSGVO-konform"
      ],
      limitations: [
        "Begrenzte API-Calls",
        "Kein Bildgenerator",
        "Basis-Features nur"
      ],
      buttonText: "Kostenlos starten",
      popular: false
    },
    {
      name: "Pro",
      price: "29",
      period: "pro Monat",
      description: "Für Content-Profis und Agenturen",
      features: [
        "Unbegrenzter Text-Generator",
        "KI-Bildgenerierung",
        "Alle Umformulierungsfunktionen",
        "Bulk-Operationen",
        "Gutenberg-Integration",
        "Shortcode-Support",
        "Prioritäts-Support",
        "Regelmäßige Updates",
        "API-Key Management",
        "Erweiterte Einstellungen"
      ],
      buttonText: "Pro testen",
      popular: true
    },
    {
      name: "Lifetime",
      price: "299",
      period: "einmalig",
      description: "Einmalzahlung, lebenslang nutzen",
      features: [
        "Alle Pro-Features",
        "Lebenslange Updates",
        "Prioritäts-Support",
        "Früher Zugang zu neuen Features",
        "Keine monatlichen Kosten",
        "Kommerzielle Nutzung",
        "Multi-Site Lizenz",
        "White-Label Option"
      ],
      buttonText: "Lifetime kaufen",
      popular: false,
      badge: "Beste Ersparnis"
    }
  ];

  const faqs = [
    {
      question: "Benötige ich einen eigenen OpenAI-Account?",
      answer: "Ja, für die Nutzung der KI-Features benötigen Sie einen eigenen OpenAI API-Key. Dieser ermöglicht es Ihnen, die Kosten zu kontrollieren und sicherzustellen, dass Ihre Daten direkt an OpenAI übertragen werden."
    },
    {
      question: "Ist das Plugin DSGVO-konform?",
      answer: "Ja, WP-AI Connect wurde von deutschen Entwicklern mit Fokus auf DSGVO-Konformität entwickelt. Ihre Daten werden verschlüsselt übertragen und nicht auf unseren Servern gespeichert."
    },
    {
      question: "Kann ich das Plugin vor dem Kauf testen?",
      answer: "Ja, Sie können die Free-Version kostenlos nutzen oder die Pro-Version 14 Tage lang kostenlos testen, bevor Sie sich für einen Plan entscheiden."
    },
    {
      question: "Funktioniert das Plugin mit allen WordPress-Themes?",
      answer: "WP-AI Connect ist mit allen standardkonformen WordPress-Themes kompatibel. Es nutzt native WordPress-APIs und integriert sich nahtlos in Ihr bestehendes Setup."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparente <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Preise</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wähle den Plan, der am besten zu deinen Bedürfnissen passt. Jederzeit kündbar, faire Preise.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl border-2 p-8 bg-white ${
                plan.popular 
                  ? 'border-blue-500 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-blue-200'
              } transition-all duration-300`}>
                
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>Beliebtester Plan</span>
                    </div>
                  </div>
                )}

                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">€{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  
                  {plan.limitations && plan.limitations.map((limitation, limitIndex) => (
                    <li key={`limit-${limitIndex}`} className="flex items-start space-x-3 opacity-60">
                      <div className="bg-gray-100 p-1 rounded-full mt-0.5">
                        <span className="block h-3 w-3 bg-gray-400 rounded-full"></span>
                      </div>
                      <span className="text-gray-500 line-through">{limitation}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg transform hover:scale-105'
                    : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-xl text-gray-600">
              Antworten auf die wichtigsten Fragen zu WP-AI Connect
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Starte noch heute!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            14 Tage kostenlos testen, jederzeit kündbar. Keine versteckten Kosten.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105">
            Kostenlos testen
          </button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
