import { BookOpen, Heart, Users, Mail, Phone, CheckCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-light text-slate-800">Anita Eicher</div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-slate-600 hover:text-slate-900 transition-colors">Start</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">Über mich</a>
            <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Angebot</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 leading-tight">
                Homeschooling<br />
                <span className="text-emerald-700">mit Herz & Kompetenz</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Individuelle Lernbegleitung für Ihr Kind – professionell, einfühlsam und auf die Bedürfnisse Ihrer Familie abgestimmt.
              </p>
              <a
                href="#contact"
                className="inline-block bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors"
              >
                Erstgespräch vereinbaren
              </a>
            </div>
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/hero-homeschooling-ai-comic.png`}
                alt="Homeschooling Begleitung"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/about-portrait-ai-comic.png`}
                alt="Anita Eicher"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-light text-slate-900 mb-6">Über mich</h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Mein Name ist Anita Eicher und ich begleite Familien auf ihrem Weg des Homeschoolings.
                Als wissenschaftliche Mitarbeiterin an der{' '}
                <a
                  href="https://www.phbern.ch/ueber-die-phbern/personen/anita-eicher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 underline"
                >
                  PH Bern
                </a>{' '}
                verbinde ich aktuelle Forschung mit praktischer Erfahrung.
              </p>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Mit einem Bachelor- und Masterdiplom als Lehrerin sowie über zwei Jahrzehnten
                Berufserfahrung bringe ich fundiertes Fachwissen mit. Meine Expertise umfasst
                die Arbeit mit Kindern vom Kindergarten bis zur 9. Klasse – inklusive Kinder
                mit besonderen Bedürfnissen (KbF) und Hochbegabte.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Jedes Kind lernt anders – und genau das macht Homeschooling so wertvoll.
                Ich helfe Ihnen, einen strukturierten, kindgerechten Lernweg zu gestalten,
                der Freude am Lernen weckt und gleichzeitig alle Bildungsziele erreicht.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  Master & Bachelor Lehramt
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  20+ Jahre Erfahrung
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  Hochbegabtenförderung
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  KbF-Spezialistin
                </span>
              </div>
              <div className="flex items-center gap-3 text-emerald-700">
                <Heart className="w-6 h-6" />
                <span className="text-lg font-medium">Mit Herz und Expertise für Ihr Kind</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Mein Angebot</h2>
            <p className="text-xl text-slate-600">Umfassende Begleitung für erfolgreiches Homeschooling</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Lernplanung</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Entwicklung individueller Lernpläne, die auf die Bedürfnisse und das Tempo Ihres Kindes abgestimmt sind.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Strukturierter Lehrplan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Flexible Zeitgestaltung</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Altersgerechte Methoden</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Einzelbetreuung</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Persönliche Begleitung Ihres Kindes in verschiedenen Fächern und Lernbereichen.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Individuelle Förderung</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Gezielte Unterstützung</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Motivationssteigerung</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Elternberatung</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Unterstützung und Beratung für Eltern auf dem Weg des Homeschoolings.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Praktische Tipps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Organisationshilfe</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Laufende Begleitung</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Kontakt</h2>
            <p className="text-xl text-slate-600">
              Lassen Sie uns gemeinsam den besten Weg für Ihr Kind finden
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">E-Mail</h3>
                  <a href="mailto:homeschooling.mit.herz@gmail.com" className="text-slate-600 hover:text-emerald-700 transition-colors">
                    homeschooling.mit.herz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Telefon</h3>
                  <a href="tel:+41791234567" className="text-slate-600 hover:text-emerald-700 transition-colors">
                    +41 79 123 45 67
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-light text-slate-900 mb-3">Kostenloses Erstgespräch</h3>
              <p className="text-slate-700 leading-relaxed">
                Vereinbaren Sie ein unverbindliches Erstgespräch, in dem wir die Bedürfnisse
                Ihrer Familie besprechen und einen individuellen Plan entwickeln können.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-slate-400 mb-2">© 2026 Anita Eicher - Homeschooling Begleitung</p>
            <p className="text-slate-500 text-sm">Mit Herz und Kompetenz für Ihr Kind</p>
          </div>
          <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-slate-500">
              Website erstellt von{' '}
              <a
                href="https://disroop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Disroop
              </a>
            </div>
            <div className="flex gap-6 text-slate-500">
              <button
                onClick={() => document.getElementById('impressum-modal')?.classList.remove('hidden')}
                className="hover:text-slate-300 transition-colors"
              >
                Impressum
              </button>
              <button
                onClick={() => document.getElementById('datenschutz-modal')?.classList.remove('hidden')}
                className="hover:text-slate-300 transition-colors"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Impressum Modal */}
      <div id="impressum-modal" className="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-light text-slate-900">Impressum</h3>
            <button
              onClick={() => document.getElementById('impressum-modal')?.classList.add('hidden')}
              className="text-slate-400 hover:text-slate-600 text-2xl"
            >
              ×
            </button>
          </div>
          <div className="text-slate-700 space-y-4">
            <div>
              <h4 className="font-medium text-slate-900">Verantwortlich für den Inhalt</h4>
              <p>Anita Eicher</p>
              <p>Schweiz</p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900">Kontakt</h4>
              <p>E-Mail: homeschooling.mit.herz@gmail.com</p>
            </div>
            <div>
              <h4 className="font-medium text-slate-900">Webdesign & Entwicklung</h4>
              <p>
                <a
                  href="https://disroop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 underline"
                >
                  Disroop
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Datenschutz Modal */}
      <div id="datenschutz-modal" className="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-light text-slate-900">Datenschutz</h3>
            <button
              onClick={() => document.getElementById('datenschutz-modal')?.classList.add('hidden')}
              className="text-slate-400 hover:text-slate-600 text-2xl"
            >
              ×
            </button>
          </div>
          <div className="text-slate-700 space-y-4">
            <p>
              Diese Website erhebt keine personenbezogenen Daten. Es werden keine Cookies verwendet
              und kein Tracking eingesetzt.
            </p>
            <p>
              Bei Kontaktaufnahme per E-Mail werden Ihre Angaben zur Bearbeitung Ihrer Anfrage
              verwendet und nicht an Dritte weitergegeben.
            </p>
            <div>
              <h4 className="font-medium text-slate-900">Hosting</h4>
              <p>Diese Website wird auf GitHub Pages gehostet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
