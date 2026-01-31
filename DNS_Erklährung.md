# Wie DNS und CNAME funktionieren

## 🌐 Was passiert wenn du `https://homeschoolling-mit-herz.ch/` aufrufst?

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        SCHRITT FÜR SCHRITT                                   │
└─────────────────────────────────────────────────────────────────────────────┘

1. BROWSER                    2. DNS-RESOLVER              3. ROOT-SERVER
   ┌─────────┐                   ┌─────────┐                  ┌─────────┐
   │ Du gibst│                   │ Fragt:  │                  │ Sagt:   │
   │ URL ein │ ──────────────▶   │ "Wo ist │ ──────────────▶  │ ".ch    │
   │         │                   │ diese   │                  │ frag    │
   └─────────┘                   │ Domain?"│                  │ SWITCH" │
                                 └─────────┘                  └─────────┘
                                      │
                                      ▼
4. .CH-REGISTRY (SWITCH)      5. METANET NAMESERVER        6. GITHUB PAGES
   ┌─────────┐                   ┌─────────┐                  ┌─────────┐
   │ Sagt:   │                   │ Sagt:   │                  │ Server  │
   │ "Frag   │ ◀────────────     │ A-Record│ ──────────────▶  │ liefert │
   │ METANET"│                   │ = GitHub│                  │ Website │
   └─────────┘                   │ IPs     │                  └─────────┘
                                 └─────────┘
```

---

## 📝 Die DNS-Einträge erklärt

### A-Record (Address Record)
```
Typ:  A
Host: @ (bedeutet: homeschoolling-mit-herz.ch ohne Subdomain)
Ziel: 185.199.108.153 (GitHub Pages Server)
```

**Was macht er?**
- Übersetzt den Domain-Namen direkt in eine IP-Adresse
- Wenn jemand `homeschoolling-mit-herz.ch` eingibt → wird zu `185.199.108.153`
- GitHub hat 4 IPs für Redundanz (wenn ein Server ausfällt, funktionieren die anderen)

### CNAME-Record (Canonical Name)
```
Typ:  CNAME
Host: www
Ziel: stefaneicher.github.io
```

**Was macht er?**
- Erstellt einen "Alias" - eine Weiterleitung zu einem anderen Domain-Namen
- `www.homeschoolling-mit-herz.ch` → wird zu `stefaneicher.github.io`
- Der Browser löst dann `stefaneicher.github.io` auf und landet bei GitHub

---

## 🔄 Der komplette Ablauf

```
DU TIPPST: https://homeschoolling-mit-herz.ch/

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
│    • Sendet: "Ich suche homeschoolling-mit-herz.ch"         │
│      (HTTP Host-Header)                                     │
└─────────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. GITHUB PAGES ERKENNT DICH:                               │
│    • GitHub schaut in der CNAME-Datei deines Repos          │
│    • Findet: "homeschoolling-mit-herz.ch"                   │
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
| `homeschoolling-mit-herz.ch` | **A-Record** | Apex-Domain (ohne www) kann KEINEN CNAME haben |
| `www.homeschoolling-mit-herz.ch` | **CNAME** | Subdomain kann auf andere Domain verweisen |

**Technische Einschränkung:** Ein CNAME für `@` (Apex) würde alle anderen Records (wie MX für E-Mail) überschreiben - deshalb nutzt man A-Records für die Hauptdomain.

---

## 📁 Die CNAME-Datei im Repository

```
public/CNAME
└── Inhalt: homeschoolling-mit-herz.ch
```

**Zweck:** GitHub Pages hostet viele Websites auf denselben IPs. Die CNAME-Datei sagt GitHub: *"Wenn jemand nach `homeschoolling-mit-herz.ch` fragt, liefer DIESES Repository aus."*

---

## ⏱️ Zeitlicher Ablauf

| Aktion | Dauer |
|--------|-------|
| Code pushen | Sofort |
| GitHub Actions Build | ~2-3 Minuten |
| DNS-Propagierung | 15 Min - 48 Stunden |
| SSL-Zertifikat | ~15-30 Minuten (nach DNS) |

