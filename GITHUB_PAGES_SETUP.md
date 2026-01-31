# GitHub Pages Setup Anleitung

## ✅ Was wurde konfiguriert

### 1. Vite Konfiguration (`vite.config.ts`)
- **Base Path**: `/` (Root-Pfad für Custom Domain)
- Dies stellt sicher, dass alle Assets korrekt geladen werden

### 2. Package.json
- **Homepage** Feld: `https://homeschoolling-mit-herz.ch/`
- Dies definiert die öffentliche URL der Anwendung

### 3. Custom Domain (`public/CNAME`)
- **Domain**: `homeschoolling-mit-herz.ch`
- Diese Datei wird automatisch ins Build kopiert und von GitHub Pages erkannt

### 4. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
Der Workflow führt automatisch folgende Schritte aus:
- ✓ Checkout des Codes
- ✓ Node.js 20 Setup
- ✓ Dependencies installieren (`npm ci`)
- ✓ Projekt bauen (`npm run build`)
- ✓ Build-Artefakte zu GitHub Pages hochladen
- ✓ Deployment durchführen

**Trigger:**
- Automatisch bei jedem Push zum `main` Branch
- Manuell über GitHub Actions UI (`workflow_dispatch`)

## 🔧 GitHub Pages aktivieren

Nach dem Merge dieses Pull Requests müssen Sie GitHub Pages in den Repository-Einstellungen aktivieren:

### Schritte:
1. Gehen Sie zu: `Settings` → `Pages` in Ihrem GitHub Repository
2. Unter **Source** wählen Sie:
   - Source: `GitHub Actions`
3. Speichern Sie die Einstellungen

### Nach dem ersten Deployment:
- Die Website wird verfügbar sein unter: **https://homeschoolling-mit-herz.ch/**
- Der erste Deployment kann 2-5 Minuten dauern

## 🌐 DNS-Konfiguration bei METANET

Konfiguriere die folgenden DNS-Einträge bei METANET:

### Option A: A-Records (empfohlen für Apex-Domain)
| Typ | Host | Ziel |
|-----|------|------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | stefaneicher.github.io |

### Option B: Nur CNAME (für www-Subdomain)
| Typ | Host | Ziel |
|-----|------|------|
| CNAME | www | stefaneicher.github.io |

**Hinweis:** Die DNS-Propagierung kann bis zu 48 Stunden dauern.

## 📊 Deployment Status überwachen

Sie können den Status des Deployments überwachen unter:
- **Actions Tab** in GitHub: `https://github.com/stefaneicher/homeschooling/actions`
- Bei jedem Push zum `main` Branch wird ein neuer Workflow gestartet

## 🔄 Workflow Details

Der Workflow besteht aus zwei Jobs:

### Build Job
- Checkt den Code aus
- Installiert Dependencies
- Baut die Anwendung
- Lädt das Build-Artefakt hoch

### Deploy Job
- Wartet auf erfolgreichen Build
- Deployed zu GitHub Pages
- Stellt die URL bereit

## 🛡️ Permissions

Der Workflow benötigt folgende Permissions (bereits konfiguriert):
- `contents: read` - Code lesen
- `pages: write` - Zu Pages schreiben
- `id-token: write` - OIDC Token für Deployment

## 🐛 Troubleshooting

### Build schlägt fehl
- Überprüfen Sie die Logs im Actions Tab
- Stellen Sie sicher, dass `npm run build` lokal funktioniert

### Seite lädt nicht korrekt / 404 Fehler
- Überprüfen Sie, ob GitHub Pages aktiviert ist
- Prüfen Sie, ob die Custom Domain in GitHub Pages Settings eingetragen ist
- Prüfen Sie, ob die DNS-Einträge korrekt konfiguriert sind

### Assets laden nicht
- Dies wird durch den `base` Path in der Vite Konfiguration gesteuert
- Stellen Sie sicher, dass alle Asset-Pfade relativ sind

## 📝 Lokales Testen des Production Builds

Um den Production Build lokal zu testen:

```bash
# Build erstellen
npm run build

# Preview starten
npm run preview
```

**Hinweis:** Der Preview-Server verwendet automatisch den konfigurierten `base` Path.

## 🚀 Deployment durchführen

### Automatisches Deployment
Einfach Code zum `main` Branch pushen:
```bash
git push origin main
```

### Manuelles Deployment
1. Gehen Sie zu: Actions → Deploy to GitHub Pages
2. Klicken Sie auf "Run workflow"
3. Wählen Sie den Branch (normalerweise `main`)
4. Klicken Sie auf "Run workflow"

## ✨ Weitere Informationen

- [Vite Deployment Dokumentation](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Pages Dokumentation](https://docs.github.com/en/pages)
- [GitHub Actions Dokumentation](https://docs.github.com/en/actions)
