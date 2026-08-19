CannaGuide Rechner

Der Dosierungsrechner aus CannGuide (Blüten & Extrakt/Konzentrat), herausgelöst als eigenständiges Mini-Tool. Keine Abhängigkeit zur restlichen App — kein Prozess-Guide, keine Chargenverwaltung, keine Bibliothek/Prävention.

Enthalten
index.html — die komplette App in einer Datei (HTML/CSS/JS, keine externen Skripte, kein CDN).
manifest.json + serviceworker.js + icon-192.jpg / icon-512.jpg — machen die App installierbar (PWA), wenn sie über HTTPS gehostet wird.
Zwei Nutzungsarten
1. Einfach als Datei weitergeben

index.html funktioniert alleine per Doppelklick im Browser — ohne Server, ohne Internet, ohne Installation. Ideal, um sie z.B. per Mail, USB-Stick oder Messenger weiterzugeben. In diesem Modus wird kein Service Worker registriert (das passiert nur, wenn die Seite über http(s):// läuft) und manifest.json/Icons werden nicht benötigt — sie stören aber auch nicht, wenn sie im selben Ordner liegen.

Achtung beim Öffnen aus einer Mail-App (z.B. iPhone Mail): Anhänge werden dort oft in einer eingeschränkten Vorschau geöffnet, die JavaScript nicht ausführt — die Seite sieht dann normal aus, aber Buttons (z.B. der Umschalter zwischen Blüten/Extrakt) reagieren nicht. In diesem Fall die gehostete Version (siehe unten) in Safari öffnen statt den Anhang direkt anzutippen.

2. Als installierbare Mini-PWA hosten (aktueller Stand)

Dieses Repo ist bereits über GitHub Pages gehostet:

→ quack-tic.github.io/CannaGuide-Calculator

Diesen Link in Safari/Chrome öffnen — der Browser bietet dann "Zum Home-Bildschirm hinzufügen" bzw. "Installieren" an, und die App funktioniert danach auch offline.

Für eigenes Hosting anderswo: den ganzen Ordner (alle 5 Dateien zusammen, gleiches Verzeichnis) auf einen beliebigen Webspace laden — wichtig sind die relativen Pfade (./manifest.json, ./icon-192.jpg etc.), die müssen erhalten bleiben.

Bei einem Update: die Zeile CACHE_NAME = 'cannguide-rechner-v1' in serviceworker.js hochzählen (z.B. -v2), sonst bekommen bereits installierte Nutzer die neue Version nicht zu sehen.

Was bewusst weggelassen wurde
Inhalationsrechner — laut Absprache nicht Teil dieses Pakets (nur Blüten + Extrakt/Konzentrat, wie im aktuellen Stand der App).
"Als Charge speichern" — ersetzt durch einen simplen lokalen Verlauf (nur localStorage, ohne Fotos, ohne PDF-/JSON-Export, max. 50 Einträge). Läuft komplett lokal auf dem Gerät der Nutzenden, nichts wird übertragen.
Navigation, Prozess-Guide, Bibliothek, Chargenverwaltung, Prävention, Einstellungen/Theme-Umschalter, Onboarding-Tour, Lexikon-Verlinkungen ("📖 Mehr im Lexikon…") — alles nicht enthalten, da die zugehörigen Seiten hier fehlen.
Was übernommen wurde (inkl. Decarb-Logik & Einheiten-Umrechnung)

Enthält die vollständige Rechenlogik des Blüten- und Extrakt-Modus 1:1, u.a.:

Pflichtangabe Decarboxylierung (Ja/Nein) je Modus, inkl. dem ~12,3%-Massenabzug (CO₂-Verlust) bei "Nein – Rohwert".
Pflichtangabe Konsumfrequenz (keine Vorauswahl mehr).
Frei wählbare Einheiten (mg/g/kg bzw. ml/Tropfen/dl/l) für Wirkstoffmenge, Trägermenge und Portionsgrösse.
Erweiterte Extrakt-Typen inkl. Live-Extrakte (Live Resin/Rosin/Dry Sift).
Bioverfügbarkeits-, Toleranz- und Einstiegsdosis-Hinweise inkl. 11-OH-THC-Warnung.
Datenstand

Diese Extraktion basiert auf dem main-Branch von github.com/quack-tic/cannguide (Stand 19.8.2026, Commit "Patch 64: Textdurchsicht …"). Falls sich der Rechner im Hauptrepo weiterentwickelt, am besten kurz Bescheid geben, dann gleiche ich diesen Ausschnitt erneut ab.

Lizenz: GNU GPL v3, wie das Hauptprojekt.
