# Nächste Schritte für homeschooling-mit-herz.ch

## ✅ Bereits erledigt

- [x] CNAME-Datei erstellt (`public/CNAME`)
- [x] Vite Base Path auf `/` geändert
- [x] Package.json Homepage aktualisiert
- [x] Code committed und gepusht
- [x] GitHub Actions Workflow läuft

---

## 📋 Noch zu erledigen

### 1. DNS bei METANET konfigurieren

Login: https://my.metanet.ch

**A-Records erstellen (4 Stück):**

| Typ | Host | Ziel |
|-----|------|------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**CNAME-Record erstellen:**

| Typ | Host | Ziel |
|-----|------|------|
| CNAME | www | stefaneicher.github.io |

---

### 2. GitHub Pages Custom Domain eintragen

1. Gehe zu: https://github.com/stefaneicher/homeschooling/settings/pages
2. Unter **"Custom domain"** eingeben: `homeschooling-mit-herz.ch`
3. Klicke **"Save"**
4. Warte auf DNS-Check (grüner Haken)
5. **"Enforce HTTPS"** aktivieren

---

### 3. Warten & Testen

| Was | Wartezeit |
|-----|-----------|
| DNS-Propagierung | 15 Min - 48 Stunden |
| SSL-Zertifikat | ~15-30 Minuten nach DNS |

**Test-URLs nach Aktivierung:**
- https://homeschooling-mit-herz.ch
- https://www.homeschooling-mit-herz.ch

---

## 🔍 Troubleshooting

Falls die Seite nicht erreichbar ist:

```powershell
# DNS prüfen
nslookup homeschooling-mit-herz.ch
```

Erwartete Antwort: `185.199.108.153` (oder eine der anderen GitHub IPs)

---

## 📞 Support

- **METANET Support:** https://www.metanet.ch/support
- **GitHub Pages Docs:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
