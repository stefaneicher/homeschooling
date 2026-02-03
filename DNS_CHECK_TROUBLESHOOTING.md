# DNS Check Troubleshooting Guide

## ❌ Problem: "DNS check unsuccessful" in GitHub Pages

Wenn GitHub Pages bei der Custom Domain `homeschooling-mit-herz.ch` die Meldung "DNS check unsuccessful" anzeigt, folge diesem systematischen Troubleshooting-Guide.

---

## ✅ 1. Sofort-Checks

### 1.1 CNAME-Datei überprüfen
```bash
cat public/CNAME
```
**Erwartet:** `homeschooling-mit-herz.ch` (exakt, ohne https:// oder trailing slash)

✅ **Status:** Die CNAME-Datei ist korrekt.

### 1.2 GitHub Pages Einstellungen
1. Gehe zu: https://github.com/stefaneicher/homeschooling/settings/pages
2. Prüfe unter **"Custom domain"**:
   - Domain: `homeschooling-mit-herz.ch` (ohne www, ohne https://)
   - Status: Sollte grüner Haken sein oder "DNS check in progress"

**Wenn nicht eingetragen:**
- Trage `homeschooling-mit-herz.ch` ein
- Klicke "Save"
- Warte auf DNS-Check (15-30 Minuten)

---

## 🔍 2. DNS-Konfiguration überprüfen

### 2.1 Lokale DNS-Abfrage
```bash
# A-Records überprüfen
dig homeschooling-mit-herz.ch A +short

# Erwartete Ausgabe (alle 4 IPs):
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

**Alternative mit nslookup:**
```bash
nslookup homeschooling-mit-herz.ch
```

### 2.2 CNAME-Record überprüfen
```bash
dig www.homeschooling-mit-herz.ch CNAME +short

# Erwartete Ausgabe:
# stefaneicher.github.io.
```

### 2.3 Weltweite DNS-Propagierung testen
Besuche: https://www.whatsmydns.net/#A/homeschooling-mit-herz.ch

**Interpretierung:**
- 🟢 **Alle grün:** DNS vollständig propagiert → Gehe zu Schritt 3
- 🟡 **Teilweise grün:** Warte weitere 2-4 Stunden → Teste erneut
- 🔴 **Alle rot:** DNS nicht konfiguriert → Prüfe METANET-Einstellungen

---

## ⚙️ 3. METANET DNS-Einstellungen

### 3.1 Korrekte Konfiguration (Soll-Zustand)

Login: https://my.metanet.ch → Domain-Manager → homeschooling-mit-herz.ch → DNS-Einstellungen

**A-Records (Apex-Domain):**
```
Typ: A    Host: @     Wert: 185.199.108.153    TTL: 1440
Typ: A    Host: @     Wert: 185.199.109.153    TTL: 1440
Typ: A    Host: @     Wert: 185.199.110.153    TTL: 1440
Typ: A    Host: @     Wert: 185.199.111.153    TTL: 1440
```

**CNAME-Record (www-Subdomain):**
```
Typ: CNAME    Host: www    Wert: stefaneicher.github.io    TTL: 1440
```

### 3.2 Änderungen vornehmen (falls nötig)
1. Entferne alle anderen A- oder CNAME-Records für `@` und `www`
2. Füge die obigen Records exakt hinzu
3. Speichern
4. **Warte 15-60 Minuten** für die initiale Propagierung

---

## ⏱️ 4. Zeitplan und Geduld

| Aktion | Typische Dauer | Hinweis |
|--------|----------------|---------|
| DNS-Änderung bei METANET | Sofort | Änderungen sind gespeichert |
| DNS-Propagierung (lokal) | 15-30 Min | TTL-abhängig (1440s = 24 Min) |
| DNS-Propagierung (weltweit) | 1-48h | Variiert je nach Provider |
| GitHub DNS-Check | 1-30 Min | Nach erfolgreicher Propagierung |
| SSL-Zertifikat | 15-30 Min | Automatisch nach DNS-Check |

**Wichtig:** DNS-Änderungen brauchen Zeit! Warte mindestens 1-2 Stunden bevor du von einem Fehler ausgehst.

---

## 🔄 5. GitHub Pages Domain neu setzen

Falls der DNS-Check auch nach 24h fehlschlägt:

1. Gehe zu: https://github.com/stefaneicher/homeschooling/settings/pages
2. **Entferne** die Custom Domain (Delete Button)
3. **Speichern**
4. **Warte 5 Minuten**
5. **Trage** `homeschooling-mit-herz.ch` neu ein
6. **Speichern**
7. GitHub startet den DNS-Check neu

Dies kann helfen, wenn GitHub einen alten DNS-Cache hat.

---

## 🛡️ 6. SSL-Zertifikat (nach erfolgreichem DNS-Check)

Sobald der DNS-Check erfolgreich ist (grüner Haken):

1. **Warte 15-30 Minuten** → Let's Encrypt stellt automatisch ein Zertifikat aus
2. Aktiviere **"Enforce HTTPS"** in GitHub Pages Settings
3. Die Checkbox wird erst klickbar, wenn das Zertifikat verfügbar ist

---

## 🧪 7. Funktionstest

Nach erfolgreichem DNS-Check und SSL-Setup:

### 7.1 Browser-Test
```
1. Öffne: https://homeschooling-mit-herz.ch
   → Sollte die Website zeigen
   
2. Öffne: https://www.homeschooling-mit-herz.ch
   → Sollte auch die Website zeigen
   
3. Öffne: http://homeschooling-mit-herz.ch
   → Sollte zu HTTPS redirecten (wenn "Enforce HTTPS" aktiv)
```

### 7.2 SSL-Test
```bash
# SSL-Zertifikat überprüfen
openssl s_client -connect homeschooling-mit-herz.ch:443 -servername homeschooling-mit-herz.ch < /dev/null 2>/dev/null | openssl x509 -noout -text | grep -A2 "Subject:"

# Sollte zeigen: CN=homeschooling-mit-herz.ch, Issuer=Let's Encrypt
```

---

## ❗ 8. Häufige Fehlerquellen

| Problem | Lösung |
|---------|--------|
| **Tippfehler in Domain** | Prüfe: `homeschool**l**ing` vs `homeschooling` |
| **CNAME-Datei fehlt** | Muss in `public/CNAME` existieren |
| **Falsche GitHub IPs** | Verwende exakt die 4 IPs von GitHub (siehe oben) |
| **CNAME zeigt auf falsche Domain** | Muss `stefaneicher.github.io` sein (nicht das alte `stefaneicher.github.io/homeschooling`) |
| **DNS noch nicht propagiert** | Warte 24h und teste mit whatsmydns.net |
| **Custom Domain nicht in GitHub eingetragen** | Gehe zu Settings → Pages → Custom domain |
| **Alte DNS-Einträge nicht gelöscht** | Lösche alte A/CNAME vor dem Hinzufügen neuer |

---

## 📞 9. Support und Hilfe

### METANET Support
- **Portal:** https://www.metanet.ch/support
- **E-Mail:** support@metanet.ch
- **Telefon:** +41 848 metanet (638263)

### GitHub Dokumentation
- [Custom Domain für GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS-Troubleshooting](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/troubleshooting-custom-domains-and-github-pages)

---

## 📊 10. Aktuelle Konfiguration (Soll-Zustand)

```dns
; DNS-Zone für homeschooling-mit-herz.ch bei METANET
$ORIGIN homeschooling-mit-herz.ch.
$TTL 1440

; SOA und Nameserver (von METANET verwaltet)
@       IN  SOA     ch.pro.io. hostmaster.homeschooling-mit-herz.ch. (
                    2026020305  ; Serial
                    10800       ; Refresh
                    3600        ; Retry
                    604800      ; Expire
                    1440 )      ; Minimum TTL

@       IN  NS      ch.pro.io.
@       IN  NS      nl.pro.io.
@       IN  NS      p.dnh.net.

; GitHub Pages A-Records (Apex-Domain)
@       IN  A       185.199.108.153
@       IN  A       185.199.109.153
@       IN  A       185.199.110.153
@       IN  A       185.199.111.153

; GitHub Pages CNAME (www-Subdomain)
www     IN  CNAME   stefaneicher.github.io.
```

---

## ✅ Checkliste für DNS-Setup

- [ ] CNAME-Datei existiert in `public/CNAME` mit Inhalt `homeschooling-mit-herz.ch`
- [ ] 4x A-Records bei METANET konfiguriert (GitHub IPs)
- [ ] 1x CNAME-Record bei METANET konfiguriert (www → stefaneicher.github.io)
- [ ] DNS-Propagierung abgeschlossen (whatsmydns.net zeigt alle grün)
- [ ] Custom Domain in GitHub Pages Settings eingetragen
- [ ] GitHub DNS-Check erfolgreich (grüner Haken)
- [ ] SSL-Zertifikat von Let's Encrypt ausgestellt (15-30 Min Wartezeit)
- [ ] "Enforce HTTPS" in GitHub Pages aktiviert
- [ ] Website erreichbar unter https://homeschooling-mit-herz.ch
- [ ] Website erreichbar unter https://www.homeschooling-mit-herz.ch

---

## 🎯 Zusammenfassung

**Der häufigste Grund für "DNS check unsuccessful":**
- **DNS noch nicht propagiert** → Warte 24h und prüfe mit whatsmydns.net
- **Custom Domain nicht eingetragen** → Trage in GitHub Pages Settings ein

**Nach erfolgreichem DNS-Check:**
- Warte 15-30 Min für SSL-Zertifikat
- Aktiviere "Enforce HTTPS"
- Fertig! 🎉
