
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, HeadphonesIcon } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-Mail Support",
      description: "Schreiben Sie uns eine E-Mail für allgemeine Fragen",
      contact: "info@wp-ai-connect.de",
      link: "mailto:info@wp-ai-connect.de"
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Premium Support",
      description: "Prioritäts-Support für Pro-Kunden",
      contact: "support@wp-ai-connect.de",
      link: "mailto:support@wp-ai-connect.de"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Community Forum",
      description: "Tauschen Sie sich mit anderen Nutzern aus",
      contact: "community.wp-ai-connect.de",
      link: "#"
    }
  ];

  const subjects = [
    "Allgemeine Frage",
    "Technischer Support",
    "Billing & Preise",
    "Feature Request",
    "Bug Report",
    "Partnership Anfrage"
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Kontakt</span> aufnehmen
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Haben Sie Fragen zu WP-AI Connect? Wir helfen Ihnen gerne weiter!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 text-center hover:shadow-lg transition-all">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-xl w-fit mx-auto mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <a 
                  href={method.link}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  {method.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nachricht senden
            </h2>
            <p className="text-xl text-gray-600">
              Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Betreff *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Bitte wählen Sie einen Betreff</option>
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Beschreiben Sie Ihr Anliegen ausführlich..."
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Hinweis:</strong> Ihre Daten werden vertraulich behandelt und gemäß DSGVO verarbeitet. 
                  Weitere Informationen finden Sie in unserer Datenschutzerklärung.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Nachricht senden</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Support-Zeiten
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Support</h3>
              <p className="text-gray-600 mb-2">Montag - Freitag: 9:00 - 17:00 Uhr</p>
              <p className="text-gray-600">Antwortzeit: 24-48 Stunden</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Premium Support (Pro-Kunden)</h3>
              <p className="text-gray-600 mb-2">Montag - Freitag: 8:00 - 18:00 Uhr</p>
              <p className="text-gray-600">Antwortzeit: 4-12 Stunden</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
