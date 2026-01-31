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
                src={`${import.meta.env.BASE_URL}images/hero-homeschooling.jpg`}
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
                src={`${import.meta.env.BASE_URL}images/about-portrait.jpg`}
                alt="Anita Eicher"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-light text-slate-900 mb-6">Über mich</h2>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Mein Name ist Anita Eicher und ich begleite Familien auf ihrem Weg des Homeschoolings.
                Mit langjähriger Erfahrung in der Pädagogik und einer Leidenschaft für individuelles Lernen
                unterstütze ich Kinder dabei, ihr volles Potenzial zu entfalten.
              </p>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Jedes Kind lernt anders – und genau das macht Homeschooling so wertvoll.
                Ich helfe Ihnen, einen strukturierten, kindgerechten Lernweg zu gestalten,
                der Freude am Lernen weckt und gleichzeitig alle Bildungsziele erreicht.
              </p>
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
                  <a href="mailto:info@anita-eicher.ch" className="text-slate-600 hover:text-emerald-700 transition-colors">
                    info@anita-eicher.ch
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
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-2">© 2024 Anita Eicher - Homeschooling Begleitung</p>
          <p className="text-slate-500 text-sm">Mit Herz und Kompetenz für Ihr Kind</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
