# CannaGuide Rechner — eigenständiges Paket

Der Dosierungsrechner aus CannGuide (Rohmaterial & Extrakt/Konzentrat), herausgelöst als eigenständiges Mini-Tool. Keine Abhängigkeit zur restlichen App — kein Prozess-Guide, keine Chargenverwaltung, keine Bibliothek/Prävention.

## Enthalten

- `index.html` — die komplette App in einer Datei (HTML/CSS/JS, keine externen Skripte, kein CDN).
- `manifest.json` + `serviceworker.js` + `icon-192.jpg` / `icon-512.jpg` — machen die App installierbar (PWA), wenn sie über HTTPS gehostet wird.

## Zwei Nutzungsarten

### 1. Einfach als Datei weitergeben
`index.html` funktioniert alleine per Doppelklick im Browser — ohne Server, ohne Internet, ohne Installation. Ideal, um sie z.B. per Mail, USB-Stick oder Messenger weiterzugeben. In diesem Modus wird kein Service Worker registriert (das passiert nur, wenn die Seite über `http(s)://` läuft) und `manifest.json`/Icons werden nicht benötigt — sie stören aber auch nicht, wenn sie im selben Ordner liegen.

### 2. Als installierbare Mini-PWA hosten
Lade den ganzen Ordner (alle 5 Dateien zusammen) auf einen beliebigen Webspace oder in ein Unterverzeichnis von GitHub Pages, z.B.:

```
quack-tic.github.io/cannguide-rechner/
```

Wichtig: Alle Dateien müssen im selben Verzeichnis bleiben (relative Pfade `./manifest.json`, `./icon-192.jpg` etc.). Sobald die Seite über HTTPS läuft, bietet der Browser "Zum Startbildschirm hinzufügen" / "Installieren" an, und die App funktioniert danach auch offline.

Bei einem Update: die Zeile `CACHE_NAME = 'cannguide-rechner-v1'` in `serviceworker.js` hochzählen (z.B. `-v2`), sonst bekommen bereits installierte Nutzer die neue Version nicht zu sehen.

## Was bewusst weggelassen wurde

- **Inhalationsrechner** — laut Absprache nicht Teil dieses Pakets (nur Blüten + Extrakt/Konzentrat, wie im aktuellen Stand der App).
- **"Als Charge speichern"** — ersetzt durch einen simplen lokalen **Verlauf** (nur `localStorage`, ohne Fotos, ohne PDF-/JSON-Export, max. 50 Einträge). Läuft komplett lokal auf dem Gerät der Nutzenden, nichts wird übertragen.
- Navigation, Prozess-Guide, Bibliothek, Chargenverwaltung, Prävention, Einstellungen/Theme-Umschalter, Onboarding-Tour, Lexikon-Verlinkungen ("📖 Mehr im Lexikon…") — alles nicht enthalten, da die zugehörigen Seiten hier fehlen.

## Was übernommen wurde (inkl. Decarb-Logik & Einheiten-Umrechnung)

Enthält die vollständige Rechenlogik des Blüten- und Extrakt-Modus 1:1, u.a.:

- Pflichtangabe **Decarboxylierung** (Ja/Nein) je Modus, inkl. dem ~12,3%-Massenabzug (CO₂-Verlust) bei "Nein – Rohwert".
- Pflichtangabe **Konsumfrequenz** (keine Vorauswahl mehr).
- Frei wählbare **Einheiten** (mg/g/kg bzw. ml/Tropfen/dl/l) für Wirkstoffmenge, Trägermenge und Portionsgrösse.
- Erweiterte Extrakt-Typen inkl. Live-Extrakte (Live Resin/Rosin/Dry Sift).
- Bioverfügbarkeits-, Toleranz- und Einstiegsdosis-Hinweise inkl. 11-OH-THC-Warnung.

## Datenstand

Diese Extraktion basiert auf dem aktuellen **main-Branch** von [github.com/quack-tic/cannguide](https://github.com/quack-tic/cannguide) (Stand 19.8.2026, Commit "Patch 64: Textdurchsicht …"). Das ist neuer als die `index.html`, die im Projekt "Appentwicklung" abgelegt war — dort fehlten u.a. die Decarb-Pflichtauswahl und die Einheiten-Umrechnung noch. Falls sich der Rechner im Hauptrepo weiterentwickelt, am besten kurz Bescheid geben, dann gleiche ich diesen Ausschnitt erneut ab.

Lizenz: GNU GPL v3, wie das Hauptprojekt.
