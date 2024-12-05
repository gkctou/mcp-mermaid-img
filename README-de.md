# mcp-mermaid-img

Verwandeln Sie Claudes Diagramme in wunderschöne Bilddateien! Konvertieren Sie Mermaid-Diagramme einfach in hochwertige Bilder 🎨

[English](README.md) | [繁體中文](README-zhTW.md) | [Español](README-es.md) | [Français](README-fr.md) | [Italiano](README-it.md) | [Português](README-pt.md) | [Nederlands](README-nl.md)

## Warum dieses Tool?

Haben Sie bei der Verwendung von Claude Desktop diese Probleme erlebt:
- Claude kann schöne Flussdiagramme, Sequenzdiagramme, Gantt-Diagramme erstellen...
- Aber selbst mit mcp-shell speichern Sie nur Mermaid-Code 😅
- Sie möchten mit Kollegen teilen oder in Präsentationen einbinden, müssen aber Screenshots machen (mit schlechter Qualität)

Keine Sorge! Mit mcp-mermaid-img verwandeln sich Claudes Diagramme sofort in hochwertige Bilder!

## Leistungsstarke Funktionen

- Ein-Klick-Konvertierung: Mermaid-Code → Hochwertige Bild-URL
- Mehrere Formate: SVG (ultra-klar), PNG, JPEG, WebP, PDF - Ihre Wahl
- Vollständig anpassbar: Unterstützt verschiedene Themes, Farben, Größeneinstellungen
- Live-Vorschau: Sehen Sie das Ergebnis direkt in Claude-Gesprächen

## Erste Schritte

### 🎯 Claude Desktop konfigurieren

1. Fügen Sie zu Ihrer `claude_desktop_config.json` hinzu:

```json
{
  "mcpServers": {
    "mcp-mermaid-img": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-mermaid-img"
      ]
    }
  }
}
```

2. Starten Sie Claude Desktop neu, und das Tool ist bereit! 🎉

### 💡 Verwendung

Sagen Sie einfach zu Claude: "Konvertiere das aktuelle Diagramm in SVG und speichere es lokal", und es ist mit einem Klick erledigt!

Claude wird automatisch:
1. Den aktuellen Mermaid-Code abrufen
2. Das mermaid-to-file Tool für die Konvertierung verwenden
3. Als SVG-Datei in Ihrem Download-Ordner speichern
4. Das Speicherergebnis im Gespräch anzeigen

So einfach ist das! Keine Sorgen mehr um Diagramme, die im Chat-Fenster gefangen sind.

### 🛠️ MCP-Tools Beschreibung

Dieses Paket bietet drei leistungsstarke MCP-Tools:

#### 1. mermaid-to-url
Konvertiert Mermaid-Diagramme in Bild-URLs. Perfekt für:
- Diagramme direkt in AI/LLM-Antworten anzeigen
- Schnelles Teilen von Diagramm-Links
- Herunterladen von Diagramm-Dateien

#### 2. mermaid-to-file
Speichert Diagramme automatisch im Download-Ordner oder angegebenen Pfad:
- Unterstützt relative Pfade (zum Download-Ordner) oder absolute Pfade
- Automatische Dateierweiterungsverarbeitung
- Verhindert das Überschreiben vorhandener Dateien

#### 3. mermaid-to-svg
Speziell für das Abrufen von Diagrammen im SVG-Format:
- SVG-Quellcode direkt erhalten
- Perfekt zum Einbetten in Webseiten oder Dokumente
- Praktisch für weitere Dokumentenverarbeitung in AI-Gesprächen

---

## Für Entwickler 🔧

Möchten Sie diese leistungsstarke Konvertierungsfunktion in Ihrem eigenen Projekt verwenden? Kein Problem!

### 📦 Installation

```bash
npm install mcp-mermaid-img
```

### 💻 Code-Beispiel

```typescript
import { generateMermaidInkUrl } from 'mcp-mermaid-img';

// Grundlegende Verwendung
const url = generateMermaidInkUrl('graph TD;A-->B;B-->C;');

// Erweiterte Einstellungen
const url = generateMermaidInkUrl('graph TD;A-->B;B-->C;', {
  type: 'svg',          // Ausgabeformat
  theme: 'dark',        // Theme-Stil
  bgColor: '!white',    // Hintergrundfarbe
  width: 800           // Bildbreite
});
```

### ⚙️ Vollständige Parameterbeschreibung

#### type: Ausgabeformat
- `svg`: SVG-Vektorformat (Standard)
  - Beste Qualität, perfekt für Skalierung
  - Ideal für Web und Präsentationen
- `jpeg`: JPEG-Bildformat
  - Geeignet für fotoähnliche Diagramme
  - Kleinere Dateigröße, aber möglicherweise Kompressionsartefakte
- `png`: PNG-Bildformat
  - Verlustfreie Kompression, ideal für Liniendiagramme
  - Optimiert Dateigröße bei Erhaltung der Klarheit
- `webp`: WebP-Bildformat
  - Beste Wahl für modernes Web
  - Bessere Kompression bei Erhaltung der Qualität
- `pdf`: PDF-Dokumentformat
  - Perfekt für Druck und Dokumentenintegration
  - Unterstützt spezielle Layouteinstellungen

#### theme: Theme-Stil
- `default`: Standardtheme
  - Universelle Farben, geeignet für die meisten Szenarien
  - Klare und lesbare visuelle Effekte
- `neutral`: Neutrales Theme
  - Schwarz-Weiß-Farben, geeignet für formelle Anlässe
  - Am besten für den Druck
- `dark`: Dunkles Theme
  - Dunkler Hintergrund, heller Text
  - Geeignet für Nachtmodus oder dunkle Interfaces
- `forest`: Wald-Theme
  - Grünes Farbschema
  - Vermittelt ein natürliches, energetisches Gefühl

#### bgColor: Hintergrundfarbe
- Unterstützt zwei Formate:
  1. Hexadezimaler Farbcode: z.B. `FF0000` (rot)
  2. Benannte Farben: Verwenden Sie `!` Präfix, z.B. `!white`
- Verwendet Theme-Standard wenn nicht gesetzt

#### width & height: Bildabmessungen
- Einheit: Pixel
- Setzen eines Wertes aktiviert automatische Skalierung
- Empfohlen, scale-Parameter für optimale Ausgabequalität zu setzen

#### scale: Skalierungsverhältnis
- Bereich: Zahl zwischen 1 und 3
- Nur wirksam wenn width oder height gesetzt ist
- Höherer Wert bedeutet klareres Ausgabebild
- Fehler wird geworfen wenn außerhalb des Bereichs

#### PDF-spezifische Einstellungen
1. fit: Auto-Anpassung
   - `true`: Diagramm passt sich automatisch an Seitengröße an
   - `false`: Verwendet angegebene Papiergröße
2. paper: Papiergröße
   - Standard-Papiergrößen: 'a4', 'a3', 'letter', etc.
   - Nur wirksam wenn fit=false
3. landscape: Querformat-Modus
   - `true`: Verwendet Querformat-Layout
   - `false`: Verwendet Hochformat-Layout (Standard)
   - Nur wirksam wenn fit=false

### 🌟 Merkmale

- Keine Abhängigkeiten: Leichtgewichtiges Design, kein zusätzlicher Ballast
- TypeScript-Unterstützung: Vollständige Typ-Hinweise für flüssigere Entwicklung
- Plattformübergreifend: Funktioniert sowohl in Browser- als auch Node.js-Umgebungen
- Flexibles Design: Unterstützt verschiedene Anpassungsbedürfnisse

### 🔄 Vollständige Schnittstellendefinition

```typescript
interface MermaidInkOptions {
  // Ausgabeformat-Auswahl
  type?: 'svg' | 'jpeg' | 'png' | 'webp' | 'pdf';
  
  // Theme-Stil-Einstellung
  theme?: 'default' | 'neutral' | 'dark' | 'forest';
  
  // Hintergrundfarbe (hex oder benannte Farbe)
  bgColor?: string;
  
  // Bildabmessungseinstellungen (Pixel)
  width?: number;
  height?: number;
  
  // Skalierungsverhältnis (1-3)
  scale?: number;
  
  // PDF-spezifische Einstellungen
  fit?: boolean;        // Auto-Anpassung der Größe
  paper?: string;       // Papiergröße
  landscape?: boolean;  // Querformat-Modus
}
```

## Lizenz

MIT-Lizenz - Frei zur Verwendung, viel Spaß beim Entwickeln!
