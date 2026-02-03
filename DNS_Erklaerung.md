# Wie DNS und CNAME funktionieren

## 🌐 Was passiert wenn du `https://homeschooling-mit-herz.ch/` aufrufst?

```
┌──────────────────────────────────────────────────────────────────┐
│                     DNS-AUFLÖSUNG IN 6 SCHRITTEN                 │
└──────────────────────────────────────────────────────────────────┘

  BROWSER            DNS-RESOLVER         NAMESERVER          GITHUB
     │                    │                   │                  │
     │ 1. "Wo ist         │                   │                  │
     │    homeschooling-  │                   │                  │
     │    mit-herz.ch?"   │                   │                  │
     │ ─────────────────> │                   │                  │
     │                    │                   │                  │
     │                    │ 2. Fragt .ch      │                  │
     │                    │    Registry       │                  │
     │                    │ ────────────────> │                  │
     │                    │                   │                  │
     │                    │ 3. "Frag METANET" │                  │
     │                    │ <──────────────── │                  │
     │                    │                   │                  │
     │                    │ 4. Fragt METANET  │                  │
     │                    │ ────────────────> │                  │
     │                    │                   │                  │
     │                    │ 5. IP-Adresse:    │                  │
     │                    │    185.199.108.153│                  │
     │                    │ <──────────────── │                  │
     │                    │                   │                  │
     │ 6. Antwort: IP     │                   │                  │
     │ <───────────────── │                   │                  │
     │                                                           │
     │ 7. HTTP-Request an GitHub ──────────────────────────────> │
     │                                                           │
     │ 8. Website zurück  <───────────────────────────────────── │
     │                                                           │
```

---

## 📝 Die DNS-Einträge erklärt

### A-Record (Address Record)

| Feld | Wert |
|------|------|
| **Typ** | A |
| **Host** | @ (= homeschooling-mit-herz.ch) |
| **Ziel** | 185.199.108.153 |

**Was macht er?**
- Übersetzt den Domain-Namen direkt in eine IP-Adresse
- Wenn jemand `homeschooling-mit-herz.ch` eingibt → wird zu `185.199.108.153`
- GitHub hat 4 IPs für Redundanz (wenn ein Server ausfällt, funktionieren die anderen):
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

### CNAME-Record (Canonical Name)

| Feld | Wert |
|------|------|
| **Typ** | CNAME |
| **Host** | www |
| **Ziel** | stefaneicher.github.io |

**Was macht er?**
- Erstellt einen "Alias" - eine Weiterleitung zu einem anderen Domain-Namen
- `www.homeschooling-mit-herz.ch` → wird zu `stefaneicher.github.io`
- Der Browser löst dann `stefaneicher.github.io` auf und landet bei GitHub

---

## 🔄 Der komplette Ablauf

```
DU TIPPST: https://homeschooling-mit-herz.ch/

     │
     ▼
┌─────────────────────────────────────────────────────────────┐
│ 1. BROWSER: "Ich brauche die IP für diese Domain"          │
└─────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. DNS-AUFLÖSUNG:                                           │
│    • Browser fragt deinen Internet-Provider                 │
│    • Provider fragt Root-Server → ".ch Registry"            │
│    • .ch Registry (SWITCH) sagt: "Frag METANET Nameserver"  │
│    • METANET Nameserver antwortet: "IP = 185.199.108.153"   │
└─────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. VERBINDUNG ZU GITHUB:                                    │
│    • Browser verbindet sich zu 185.199.108.153              │
│    • Sendet: "Ich suche homeschooling-mit-herz.ch"          │
│      (HTTP Host-Header)                                     │
└─────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. GITHUB PAGES ERKENNT DICH:                               │
│    • GitHub schaut in der CNAME-Datei deines Repos          │
│    • Findet: "homeschooling-mit-herz.ch"                    │
│    • Match! → Liefert deine Website aus                     │
└─────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. HTTPS-VERSCHLÜSSELUNG:                                   │
│    • GitHub hat ein SSL-Zertifikat für deine Domain         │
│    • Let's Encrypt stellt es automatisch aus                │
│    • Sichere Verbindung wird aufgebaut                      │
└─────────────────────────────────────────────────────────────┘
     │
     ▼
   WEBSITE WIRD ANGEZEIGT! 🎉
```

---

## 🤔 Warum braucht man beides (A-Record UND CNAME)?

| Szenario | DNS-Eintrag | Erklärung |
|----------|-------------|-----------|
| `homeschooling-mit-herz.ch` | **A-Record** | Apex-Domain (ohne www) kann KEINEN CNAME haben |
| `www.homeschooling-mit-herz.ch` | **CNAME** | Subdomain kann auf andere Domain verweisen |

**Technische Einschränkung:** Ein CNAME für `@` (Apex) würde alle anderen Records (wie MX für E-Mail) überschreiben - deshalb nutzt man A-Records für die Hauptdomain.

---

## 🌐 Was passiert bei `http://www.homeschooling-mit-herz.ch`?

```
  BROWSER                 DNS                    GITHUB PAGES
     │                     │                          │
     │ 1. DNS-Abfrage      │                          │
     │    "www.homeschooling-mit-herz.ch"             │
     │ ──────────────────> │                          │
     │                     │                          │
     │ 2. CNAME-Antwort:   │                          │
     │    "stefaneicher.github.io"                    │
     │ <────────────────── │                          │
     │                     │                          │
     │ 3. DNS-Abfrage für  │                          │
     │    stefaneicher.github.io                      │
     │ ──────────────────> │                          │
     │                     │                          │
     │ 4. A-Record-Antwort │                          │
     │    (GitHub IPs)     │                          │
     │ <────────────────── │                          │
     │                     │                          │
     │ 5. HTTP-Request an GitHub                      │
     │    Host-Header: www.homeschooling-mit-herz.ch  │
     │ ─────────────────────────────────────────────> │
     │                     │                          │
     │                     │    6. GitHub prüft CNAME │
     │                     │       im Repo → Match!   │
     │                     │                          │
     │ 7. Website wird ausgeliefert                   │
     │ <───────────────────────────────────────────── │
     │                     │                          │
```

**Zusammenfassung:**
1. **CNAME-Auflösung:** `www.homeschooling-mit-herz.ch` → `stefaneicher.github.io`
2. **Verbindung:** Browser verbindet sich mit GitHub-Servern
3. **Host-Header:** Browser sendet `Host: www.homeschooling-mit-herz.ch`
4. **GitHub-Matching:** GitHub findet dein Repo via `CNAME`-Datei
5. **Auslieferung:** Deine React-App wird angezeigt

---

## 📁 Die CNAME-Datei im Repository

```
public/CNAME
└── Inhalt: homeschooling-mit-herz.ch
```

**Zweck:** GitHub Pages hostet viele Websites auf denselben IPs. Die CNAME-Datei sagt GitHub: *"Wenn jemand nach `homeschooling-mit-herz.ch` fragt, liefer DIESES Repository aus."*

---

## ⏱️ Zeitlicher Ablauf

| Aktion | Dauer |
|--------|-------|
| Code pushen | Sofort |
| GitHub Actions Build | ~2-3 Minuten |
| DNS-Propagierung | 15 Min - 48 Stunden |
| SSL-Zertifikat | ~15-30 Minuten (nach DNS) |

