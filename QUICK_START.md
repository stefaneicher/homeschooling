# Quick Start: Domain aktivieren ⚡

Du willst **homeschoolling-mit-herz.ch** aufrufen? Hier ist die Kurzanleitung:

## ✅ 3 Schritte zum Erfolg

### 1️⃣ DNS bei Metanet (5 Min)

Login: https://my.metanet.ch

**4x A-Record erstellen:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**1x CNAME erstellen:**
```
Host: www
Ziel: stefaneicher.github.io
```

### 2️⃣ GitHub Pages aktivieren (2 Min)

1. Gehe zu: https://github.com/stefaneicher/homeschooling/settings/pages
2. Source: **GitHub Actions** auswählen
3. Custom Domain: **homeschoolling-mit-herz.ch** eingeben
4. **Enforce HTTPS** aktivieren (wenn verfügbar)

### 3️⃣ Warten & Testen (15-60 Min)

```bash
# DNS-Check
nslookup homeschoolling-mit-herz.ch
```

Dann öffnen: **https://homeschoolling-mit-herz.ch** 🎉

---

## 📖 Ausführliche Anleitung

Siehe: [METANET_DEPLOYMENT.md](./METANET_DEPLOYMENT.md)

## 🆘 Probleme?

| Problem | Lösung |
|---------|--------|
| DNS nicht gefunden | Warte 15-30 Min länger |
| SSL-Fehler | Warte bis DNS propagiert ist |
| 404 Error | GitHub Actions erfolgreich? |

**Support:** support@metanet.ch oder GitHub Issues
