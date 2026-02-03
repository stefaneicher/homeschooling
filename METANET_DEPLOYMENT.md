# Deployment Anleitung für homeschoolling-mit-herz.ch auf Metanet

## 📋 Übersicht

Du hast die Domain `homeschoolling-mit-herz.ch` bei Metanet registriert. Diese Anleitung zeigt dir Schritt für Schritt, wie du die gebaute statische Seite über diese Domain erreichbar machst.

## ✅ Was bereits fertig ist

- ✓ Die Website ist als React-Anwendung entwickelt
- ✓ GitHub Actions Workflow für automatisches Deployment ist konfiguriert
- ✓ Die `CNAME`-Datei mit deiner Domain ist vorhanden
- ✓ Die Vite-Konfiguration ist korrekt eingerichtet
- ✓ Der Build-Prozess funktioniert einwandfrei

## 🚀 Was du jetzt tun musst

### Schritt 1: DNS bei Metanet konfigurieren

1. **Login bei Metanet**
   - Gehe zu: https://my.metanet.ch/de/home.html
   - Melde dich mit deinen Zugangsdaten an

2. **DNS-Verwaltung öffnen**
   - Wähle die Domain `homeschoolling-mit-herz.ch` aus
   - Navigiere zu DNS-Verwaltung / DNS-Einstellungen

3. **A-Records erstellen** (für die Hauptdomain)
   
   Erstelle **4 A-Records** mit den folgenden Werten:

   | Typ | Host/Name | Ziel/Wert | TTL |
   |-----|-----------|-----------|-----|
   | A   | @ oder leer | 185.199.108.153 | 3600 |
   | A   | @ oder leer | 185.199.109.153 | 3600 |
   | A   | @ oder leer | 185.199.110.153 | 3600 |
   | A   | @ oder leer | 185.199.111.153 | 3600 |

   **Wichtig:** 
   - `@` oder ein leeres Host-Feld bedeutet die Hauptdomain (homeschoolling-mit-herz.ch)
   - Alle 4 IP-Adressen sind wichtig für Redundanz
   - TTL kann 3600 (1 Stunde) oder den Standardwert sein

4. **CNAME-Record erstellen** (für www-Subdomain)

   | Typ | Host/Name | Ziel/Wert | TTL |
   |-----|-----------|-----------|-----|
   | CNAME | www | stefaneicher.github.io | 3600 |

   **Wichtig:**
   - Host: `www` (ohne Punkt am Ende)
   - Ziel: `stefaneicher.github.io` (genau so, eventuell mit Punkt am Ende je nach Metanet-Interface)

5. **Speichern**
   - Speichere alle DNS-Einträge
   - Die Änderungen werden innerhalb von 15 Minuten bis 48 Stunden wirksam

### Schritt 2: GitHub Pages aktivieren

1. **Repository Settings öffnen**
   - Gehe zu: https://github.com/stefaneicher/homeschooling/settings/pages
   - Oder: In deinem Repository → Settings → Pages (linke Seitenleiste)

2. **Source konfigurieren**
   - Unter "Source" wähle: **GitHub Actions**
   - Das wars! Speichern ist automatisch.

3. **Custom Domain eintragen**
   - Unter "Custom domain" gib ein: `homeschoolling-mit-herz.ch`
   - Klicke auf **Save**
   - Warte bis der grüne Haken erscheint (DNS Check erfolgreich)
   - Dies kann 5-30 Minuten dauern, nachdem die DNS-Einträge propagiert sind

4. **HTTPS aktivieren**
   - Sobald der DNS-Check erfolgreich war (grüner Haken)
   - Aktiviere die Checkbox **"Enforce HTTPS"**
   - GitHub erstellt automatisch ein kostenloses SSL-Zertifikat via Let's Encrypt
   - Dies kann weitere 10-30 Minuten dauern

### Schritt 3: Deployment auslösen

1. **Automatisches Deployment**
   - Jeder Push zum `main` Branch löst automatisch ein Deployment aus
   - Der GitHub Actions Workflow läuft automatisch

2. **Manuelles Deployment** (optional)
   - Gehe zu: https://github.com/stefaneicher/homeschooling/actions
   - Klicke auf "Deploy to GitHub Pages" Workflow
   - Klicke auf "Run workflow"
   - Wähle Branch: `main`
   - Klicke auf "Run workflow" Button

3. **Deployment Status überwachen**
   - Gehe zu: https://github.com/stefaneicher/homeschooling/actions
   - Der aktuelle Workflow-Lauf wird angezeigt
   - Warte bis alle Schritte grün sind (✓)
   - Dauert ca. 2-3 Minuten

### Schritt 4: Verifizieren

1. **DNS-Propagierung prüfen**
   
   Öffne ein Terminal / Eingabeaufforderung und führe aus:
   ```bash
   nslookup homeschoolling-mit-herz.ch
   ```
   
   **Erwartete Ausgabe:**
   ```
   Server: ...
   Address: ...
   
   Non-authoritative answer:
   Name: homeschoolling-mit-herz.ch
   Address: 185.199.108.153
   ```
   
   Du solltest eine der vier GitHub Pages IP-Adressen sehen.

2. **Website aufrufen**
   - Öffne im Browser: https://homeschoolling-mit-herz.ch
   - Öffne auch: https://www.homeschoolling-mit-herz.ch
   - Beide URLs sollten deine Website anzeigen

3. **SSL-Zertifikat prüfen**
   - Klicke auf das Schloss-Symbol in der Browser-Adressleiste
   - Das Zertifikat sollte von "Let's Encrypt" ausgestellt sein
   - Status sollte "Verbindung ist sicher" sein

## ⏱️ Zeitplan

| Aktion | Dauer |
|--------|-------|
| DNS-Einträge bei Metanet erstellen | 5 Minuten |
| GitHub Pages aktivieren | 2 Minuten |
| DNS-Propagierung weltweit | 15 Min - 48 Stunden |
| SSL-Zertifikat erstellen | 10-30 Minuten nach DNS |
| Erstes Deployment | 2-3 Minuten |

**In der Praxis:** Meist funktioniert alles innerhalb von 30-60 Minuten, auch wenn die maximale Zeit länger sein kann.

## 🔍 Troubleshooting

### Problem: "Domain's DNS record could not be retrieved" in GitHub

**Lösung:**
- Die DNS-Einträge sind noch nicht propagiert
- Warte weitere 15-30 Minuten
- Prüfe mit `nslookup homeschoolling-mit-herz.ch`, ob die IP-Adressen zurückgegeben werden
- Prüfe in Metanet, ob die DNS-Einträge wirklich gespeichert wurden

### Problem: Website zeigt 404 Error

**Lösung:**
- Prüfe ob GitHub Pages in den Repository Settings aktiviert ist
- Prüfe ob der letzte GitHub Actions Workflow erfolgreich war (grün)
- Warte 5-10 Minuten nach erfolgreichem Deployment
- Leere den Browser-Cache (Strg+F5 oder Cmd+Shift+R)

### Problem: "Your connection is not private" / SSL-Fehler

**Lösung:**
- Das SSL-Zertifikat ist noch nicht fertig erstellt
- Warte weitere 15-30 Minuten
- Stelle sicher, dass der DNS-Check in GitHub erfolgreich war (grüner Haken)
- Das Zertifikat wird automatisch erstellt, sobald DNS korrekt ist

### Problem: Website lädt, aber Assets fehlen (Bilder, CSS)

**Lösung:**
- Leere den Browser-Cache vollständig
- Das ist sehr unwahrscheinlich, da die Vite-Konfiguration korrekt ist (`base: '/'`)

### Problem: www.homeschoolling-mit-herz.ch funktioniert nicht

**Lösung:**
- Prüfe ob der CNAME-Record für `www` erstellt wurde
- Ziel muss `stefaneicher.github.io` sein
- Prüfe mit: `nslookup www.homeschoolling-mit-herz.ch`

## 📊 DNS-Check Tools (optional)

Wenn du genau sehen willst, wie deine DNS-Einträge weltweit sichtbar sind:

- **DNS Checker:** https://dnschecker.org/
  - Gib `homeschoolling-mit-herz.ch` ein
  - Wähle "A" als Record Type
  - Siehst du die GitHub IPs weltweit? Dann ist alles OK!

- **MXToolbox:** https://mxtoolbox.com/SuperTool.aspx
  - Gib `homeschoolling-mit-herz.ch` ein
  - Siehst du die DNS-Einträge? Dann ist alles OK!

## 🎉 Erfolg!

Wenn alles funktioniert, solltest du:
- ✓ Deine Website unter https://homeschoolling-mit-herz.ch sehen
- ✓ Ein gültiges SSL-Zertifikat haben (grünes Schloss)
- ✓ Automatische Deployments bei jedem Git Push haben

## 🔄 Zukünftige Updates

Ab jetzt musst du **nichts mehr manuell machen**!

1. Du änderst Code lokal
2. Du machst `git push` zum `main` Branch
3. GitHub Actions baut automatisch und deployed
4. Nach 2-3 Minuten ist die neue Version live unter https://homeschoolling-mit-herz.ch

## 📞 Support

- **Metanet Support:** https://www.metanet.ch/support oder support@metanet.ch
- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **GitHub Support:** https://support.github.com/

## 🔗 Wichtige Links

- **Metanet Login:** https://my.metanet.ch
- **GitHub Repository:** https://github.com/stefaneicher/homeschooling
- **GitHub Actions:** https://github.com/stefaneicher/homeschooling/actions
- **GitHub Pages Settings:** https://github.com/stefaneicher/homeschooling/settings/pages
- **Live Website:** https://homeschoolling-mit-herz.ch (sobald aktiv)
