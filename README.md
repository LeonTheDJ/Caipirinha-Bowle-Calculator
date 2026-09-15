# 🍹 Cocktail Rechner - Zutaten-Rechner für Partys & Events

Eine moderne, erweiterbare Web-Anwendung zur präzisen Berechnung von Zutatenmengen für Cocktails und Bowlen (für beliebige Personenanzahlen, mit und ohne Alkohol).

---

## 🚀 Features

- 🍹 **11 Cocktails im Sortiment**:
  - **Caipirinha - Bowle**
  - **Classic Mojito**
  - **Piña Colada**
  - **Aperol Spritz**
  - **Hugo**
  - **Long Island Ice Tea**
  - **Tequila Sunrise**
  - **Zombie**
  - **Sex on the Beach**
  - **Bloody Mary**
  - **Whiskey Sour**
- ⚖️ **Dynamische Zutaten-Skalierung**: Berechnet die exakten Mengenangaben basierend auf der gewünschten Portionsanzahl (1 bis 30 Gläser).
- 🍃 **Varianten-Wahl (Mit & Ohne Alkohol)**: Filtert automatisch zwischen alkoholischen Zutaten und alkoholfreien Alternativen.
- 🔍 **Live-Suche & Filter**: Schnelle Rezeptsuche auf der Übersichtsseite nach Name oder Kategorie.
- 🎨 **Modernes Design**: Dark-Mode Theme, Google Font (*Open Sans*), gläserne Karten-Optik (Glassmorphic Design) & responsive Layouts.
- 🔗 **Zwei Navigations-Modi**:
  - **Übersichts-Dashboard**: Interaktiver SPA-Modus mit Karten und Schnellrechner auf `index.html`.
  - **Einzelseiten**: Direkte Verlinkung und Lesezeichen-Funktion für jeden Cocktail unter `cocktails/*.html`.
- 🧭 **Dynamische Navigationsleiste**: Die Navigationsleiste generiert sich automatisch aus den vorhandenen Rezepten.

---

## 🏗️ Architektur (Object-Oriented JavaScript)

Die Anwendung nutzt eine saubere, objektorientierte ES6-Klassenstruktur:

```
Caipirinha-Bowle-Calculator/
├── index.html                   # Haupt-Übersichtsseite mit Rezeptkarten & Suchleiste
├── css/
│   └── style.css                # Zentrales Stylesheet (Open Sans, Dark Mode)
├── js/
│   ├── models/
│   │   ├── Ingredient.js        # Repräsentiert Zutaten & Berechnungsmethoden
│   │   └── Cocktail.js          # Rezept-Datenmodell & Varianten-Filter
│   ├── data/
│   │   └── cocktails.js         # Zentrale Datensammlung der 11 Cocktails
│   ├── components/
│   │   └── CocktailCalculator.js# Wiederverwendbare Rechner-Komponente & Validierung
│   ├── navbar.js                # Dynamische Navigationsleisten-Komponente
│   └── app.js                   # Haupt-Router und Übersichts-Koordinator
├── cocktails/                   # Eigenständige HTML-Einzelseiten
│   ├── caipirinha.html
│   ├── mojito.html
│   ├── pina-colada.html
│   ├── aperol-spritz.html
│   ├── hugo.html
│   ├── long-island-ice-tea.html
│   ├── tequila-sunrise.html
│   ├── zombie.html
│   ├── sex-on-the-beach.html
│   ├── bloody-mary.html
│   └── whiskey-sour.html
└── images/                      # Hochauflösende Cocktail-Bilder
```

---

## 💻 Schnellstart

1. Repository klonen:
   ```bash
   git clone https://github.com/deitmerl/Caipirinha-Bowle-Calculator.git
   cd Caipirinha-Bowle-Calculator
   ```
2. `index.html` direkt im Browser öffnen oder über einen lokalen Webserver starten:
   ```bash
   python -m http.server 8000
   ```
3. Öffne `http://localhost:8000` im Browser, wähle deinen Lieblings-Cocktail aus und berechne die Zutaten!
