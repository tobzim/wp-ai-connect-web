
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Shield, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">WP-AI Connect</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Die KI-Revolution für WordPress. Bringen Sie die Power künstlicher Intelligenz 
              direkt ins WordPress-Backend – ganz ohne Coding.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@wp-ai-connect.de" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@wp-ai-connect.de</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/features" className="hover:text-blue-400 transition-colors">Funktionen</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Preise</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">Über Uns</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                  <FileText className="h-4 w-4" />
                  <span>Impressum</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                  <Shield className="h-4 w-4" />
                  <span>Datenschutz</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">AGB</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 WP-AI Connect. Alle Rechte vorbehalten. Made in Germany 🇩🇪
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
