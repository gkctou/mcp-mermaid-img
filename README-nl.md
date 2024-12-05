# mcp-mermaid-img

Transformeer Claude's diagrammen in prachtige afbeeldingsbestanden! Converteer Mermaid-diagrammen eenvoudig naar hoogwaardige afbeeldingen 🎨

[English](README.md) | [繁體中文](README-zhTW.md) | [Español](README-es.md) | [Français](README-fr.md) | [Deutsch](README-de.md) | [Italiano](README-it.md) | [Português](README-pt.md)

## Waarom deze tool?

Heb je bij het gebruik van Claude Desktop deze problemen ervaren:
- Claude kan prachtige stroomdiagrammen, sequentiediagrammen, Gantt-diagrammen tekenen...
- Maar zelfs met mcp-shell sla je alleen Mermaid-code op 😅
- Je wilt delen met collega's of in presentaties zetten, maar moet screenshots maken (met slechte kwaliteit)

Geen zorgen! Met mcp-mermaid-img worden Claude's diagrammen direct getransformeerd naar hoogwaardige afbeeldingen!

## Krachtige Functies

- One-click conversie: Mermaid-code → Hoogwaardige afbeeldings-URL
- Meerdere formaten: SVG (ultra-scherp), PNG, JPEG, WebP, PDF - jouw keuze
- Volledig aanpasbaar: Ondersteunt verschillende thema's, kleuren, grootte-instellingen
- Live preview: Zie het resultaat direct in Claude-gesprekken

## Aan de slag

### 🎯 Claude Desktop configureren

1. Voeg toe aan je `claude_desktop_config.json`:

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

2. Herstart Claude Desktop, en de tool is klaar! 🎉

### 💡 Gebruik

Zeg gewoon tegen Claude: "Converteer het huidige diagram naar SVG en sla het lokaal op", en het is met één klik gedaan!

Claude zal automatisch:
1. De huidige Mermaid-code ophalen
2. De mermaid-to-file tool gebruiken voor conversie
3. Als SVG-bestand opslaan in je downloads map
4. Het opslagresultaat tonen in het gesprek

Zo simpel is het! Geen zorgen meer over diagrammen die vastzitten in het chatvenster.

### 🛠️ MCP Tools Beschrijving

Dit pakket biedt drie krachtige MCP tools:

#### 1. mermaid-to-url
Converteert Mermaid-diagrammen naar afbeeldings-URL's. Perfect voor:
- Diagrammen direct weergeven in AI/LLM-antwoorden
- Snel delen van diagramlinks
- Downloaden van diagrambestanden

#### 2. mermaid-to-file
Slaat diagrammen automatisch op in downloads map of opgegeven pad:
- Ondersteunt relatieve paden (naar downloads map) of absolute paden
- Automatische bestandsextensie-afhandeling
- Voorkomt overschrijven van bestaande bestanden

#### 3. mermaid-to-svg
Specifiek voor het verkrijgen van diagrammen in SVG-formaat:
- SVG-broncode direct verkrijgen
- Perfect voor embedding in webpagina's of documenten
- Handig voor verdere documentverwerking in AI-gesprekken

---

## Voor Ontwikkelaars 🔧

Wil je deze krachtige conversiefunctie in je eigen project gebruiken? Geen probleem!

### 📦 Installatie

```bash
npm install mcp-mermaid-img
```

### 💻 Code Voorbeeld

```typescript
import { generateMermaidInkUrl } from 'mcp-mermaid-img';

// Basis gebruik
const url = generateMermaidInkUrl('graph TD;A-->B;B-->C;');

// Geavanceerde instellingen
const url = generateMermaidInkUrl('graph TD;A-->B;B-->C;', {
  type: 'svg',          // Uitvoerformaat
  theme: 'dark',        // Thema stijl
  bgColor: '!white',    // Achtergrondkleur
  width: 800           // Afbeeldingsbreedte
});
```

### ⚙️ Volledige Parameter Beschrijving

#### type: Uitvoerformaat
- `svg`: SVG vectorformaat (standaard)
  - Beste kwaliteit, perfect voor schalen
  - Ideaal voor web en presentaties
- `jpeg`: JPEG afbeeldingsformaat
  - Geschikt voor fotoachtige diagrammen
  - Kleinere bestandsgrootte, maar mogelijk compressieartefacten
- `png`: PNG afbeeldingsformaat
  - Verliesvrije compressie, ideaal voor lijndiagrammen
  - Optimaliseert bestandsgrootte met behoud van helderheid
- `webp`: WebP afbeeldingsformaat
  - Beste keuze voor modern web
  - Betere compressie met behoud van kwaliteit
- `pdf`: PDF documentformaat
  - Perfect voor afdrukken en documentintegratie
  - Ondersteunt speciale lay-outinstellingen

#### theme: Thema Stijl
- `default`: Standaard thema
  - Universele kleuren, geschikt voor de meeste scenario's
  - Heldere en leesbare visuele effecten
- `neutral`: Neutraal thema
  - Zwart-wit kleuren, geschikt voor formele gelegenheden
  - Best voor afdrukken
- `dark`: Donker thema
  - Donkere achtergrond, lichte tekst
  - Geschikt voor nachtmodus of donkere interfaces
- `forest`: Bos thema
  - Groen kleurenschema
  - Geeft een natuurlijk, energiek gevoel

#### bgColor: Achtergrondkleur
- Ondersteunt twee formaten:
  1. Hexadecimale kleurcode: bijv. `FF0000` (rood)
  2. Benoemde kleuren: gebruik `!` prefix, bijv. `!white`
- Gebruikt thema standaard indien niet ingesteld

#### width & height: Afbeeldingsafmetingen
- Eenheid: pixels
- Instellen van een waarde activeert automatisch schalen
- Aanbevolen om scale parameter in te stellen voor optimale uitvoerkwaliteit

#### scale: Schaalverhouding
- Bereik: getal tussen 1 en 3
- Alleen effectief wanneer width of height is ingesteld
- Hogere waarde betekent scherpere uitvoerafbeelding
- Fout wordt gegenereerd indien buiten bereik

#### PDF-specifieke Instellingen
1. fit: Auto-aanpassing
   - `true`: Diagram past zich automatisch aan paginagrootte aan
   - `false`: Gebruikt opgegeven papierformaat
2. paper: Papierformaat
   - Standaard papierformaten: 'a4', 'a3', 'letter', etc.
   - Alleen effectief wanneer fit=false
3. landscape: Landschap Modus
   - `true`: Gebruikt landschap lay-out
   - `false`: Gebruikt portret lay-out (standaard)
   - Alleen effectief wanneer fit=false

### 🌟 Kenmerken

- Geen afhankelijkheden: Lichtgewicht ontwerp, geen extra bagage
- TypeScript ondersteuning: Complete type hints voor vloeiendere ontwikkeling
- Cross-platform: Werkt in zowel browser als Node.js omgevingen
- Flexibel ontwerp: Ondersteunt verschillende aanpassingsbehoeften

### 🔄 Volledige Interface Definitie

```typescript
interface MermaidInkOptions {
  // Uitvoerformaat selectie
  type?: 'svg' | 'jpeg' | 'png' | 'webp' | 'pdf';
  
  // Thema stijl instelling
  theme?: 'default' | 'neutral' | 'dark' | 'forest';
  
  // Achtergrondkleur (hex of benoemde kleur)
  bgColor?: string;
  
  // Afbeeldingsafmeting instellingen (pixels)
  width?: number;
  height?: number;
  
  // Schaalverhouding (1-3)
  scale?: number;
  
  // PDF-specifieke instellingen
  fit?: boolean;        // Auto-aanpassing grootte
  paper?: string;       // Papierformaat
  landscape?: boolean;  // Landschap modus
}
```

## Licentie

MIT Licentie - Vrij te gebruiken, veel plezier met ontwikkelen!
