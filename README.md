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
- **Live URL:** https://homeschoolling-mit-herz.ch
- **Trigger:** Jeder Push zum `main` Branch
- **Workflow:** `.github/workflows/deploy.yml`

### Domain aktivieren

Um die Domain **homeschoolling-mit-herz.ch** zu aktivieren:
- 📖 **Ausführliche Anleitung:** [METANET_DEPLOYMENT.md](./METANET_DEPLOYMENT.md)
- ⚡ **Quick Start:** [QUICK_START.md](./QUICK_START.md)

### Manuelles Deployment
Das Deployment kann auch manuell über die GitHub Actions Seite gestartet werden (workflow_dispatch).

## 🛠 Technologie Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Backend:** Supabase
- **Icons:** Lucide React

## 📝 Lizenz

Privat

