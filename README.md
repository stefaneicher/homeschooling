# Homeschooling - Anita Eicher

Professionelle Homeschooling-Begleitung mit Herz & Kompetenz.

## 🚀 Entwicklung

### Voraussetzungen
- Node.js 20.x oder höher
- npm

### Installation
```bash
npm install
```

### Lokale Entwicklung
```bash
npm run dev
```
Die Anwendung läuft dann auf `http://localhost:5173`

### Build
```bash
npm run build
```

### Vorschau des Builds
```bash
npm run preview
```

## 📦 Deployment

Die Anwendung wird automatisch via GitHub Actions zu GitHub Pages deployed:
- **URL:** https://homeschooling-mit-herz.ch/
- **Alternativ:** https://www.homeschooling-mit-herz.ch/
- **Trigger:** Jeder Push zum `main` Branch
- **Workflow:** `.github/workflows/deploy.yml`

### DNS-Konfiguration

Die Domain `homeschooling-mit-herz.ch` ist bei METANET konfiguriert:

```dns
homeschooling-mit-herz.ch.      A       185.199.108.153
homeschooling-mit-herz.ch.      A       185.199.109.153
homeschooling-mit-herz.ch.      A       185.199.110.153
homeschooling-mit-herz.ch.      A       185.199.111.153
www.homeschooling-mit-herz.ch.  CNAME   stefaneicher.github.io.
```

Weitere Details zur DNS-Konfiguration siehe: [DNS_Erklaerung.md](./DNS_Erklaerung.md)

## 🛠 Technologie Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Supabase
- **Icons:** Lucide React

## 📝 Lizenz

Privat

