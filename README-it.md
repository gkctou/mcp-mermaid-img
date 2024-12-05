# mcp-mermaid-img

Trasforma i diagrammi di Claude in bellissimi file immagine! Converti facilmente i diagrammi Mermaid in immagini di alta qualità 🎨

[English](README.md) | [繁體中文](README-zhTW.md) | [Español](README-es.md) | [Français](README-fr.md) | [Deutsch](README-de.md) | [Português](README-pt.md) | [Nederlands](README-nl.md)

## Perché questo strumento?

Utilizzando Claude Desktop, hai incontrato questi problemi:
- Claude può disegnare bellissimi diagrammi di flusso, diagrammi di sequenza, diagrammi di Gantt...
- Ma anche con mcp-shell, salvi solo codice Mermaid 😅
- Vuoi condividere con i colleghi o inserire nelle presentazioni, ma devi fare screenshot (di bassa qualità)

Non preoccuparti! Con mcp-mermaid-img, i diagrammi di Claude si trasformano istantaneamente in immagini di alta qualità!

## Funzionalità Potenti

- Conversione con un clic: Codice Mermaid → URL immagine di alta qualità
- Formati multipli: SVG (ultra-chiaro), PNG, JPEG, WebP, PDF - a tua scelta
- Completamente personalizzabile: Supporta vari temi, colori, impostazioni di dimensione
- Anteprima dal vivo: Vedi il risultato direttamente nelle conversazioni Claude

## Iniziare

### 🎯 Configurare Claude Desktop

1. Aggiungi al tuo `claude_desktop_config.json`:

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

2. Riavvia Claude Desktop, e lo strumento è pronto! 🎉

### 💡 Utilizzo

Basta dire a Claude: "Converti il diagramma attuale in SVG e salvalo localmente", ed è fatto con un clic!

Claude automaticamente:
1. Ottiene il codice Mermaid attuale
2. Usa lo strumento mermaid-to-file per la conversione
3. Salva come file SVG nella tua cartella download
4. Mostra il risultato del salvataggio nella conversazione

È così semplice! Non più preoccupazioni per i diagrammi bloccati nella finestra della chat.

### 🛠️ Descrizione degli Strumenti MCP

Questo pacchetto fornisce tre potenti strumenti MCP:

#### 1. mermaid-to-url
Converte i diagrammi Mermaid in URL di immagini. Perfetto per:
- Visualizzare diagrammi direttamente nelle risposte AI/LLM
- Condividere rapidamente link di diagrammi
- Scaricare file di diagrammi

#### 2. mermaid-to-file
Salva automaticamente i diagrammi nella cartella download o nel percorso specificato:
- Supporta percorsi relativi (alla cartella download) o percorsi assoluti
- Gestione automatica delle estensioni dei file
- Previene la sovrascrittura dei file esistenti

#### 3. mermaid-to-svg
Specificamente per ottenere diagrammi in formato SVG:
- Ottieni direttamente il codice sorgente SVG
- Perfetto per l'incorporazione in pagine web o documenti
- Conveniente per l'elaborazione successiva dei documenti nelle conversazioni AI

---

## Per gli Sviluppatori 🔧

Vuoi utilizzare questa potente funzione di conversione nel tuo progetto? Nessun problema!

### 📦 Installazione

```bash
npm install mcp-mermaid-img
```

### 💻 Esempio di Codice

```typescript
import { generateMermaidInkUrl } from 'mcp-mermaid-img';

// Utilizzo base
const url = generateMermaidInkUrl('graph TD;A-->B;B-->C;');

// Impostazioni avanzate
const url = generateMermaidInkUrl('graph TD;A-->B;B-->C;', {
  type: 'svg',          // Formato di output
  theme: 'dark',        // Stile tema
  bgColor: '!white',    // Colore sfondo
  width: 800           // Larghezza immagine
});
```

### ⚙️ Descrizione Completa dei Parametri

#### type: Formato di Output
- `svg`: Formato vettoriale SVG (predefinito)
  - Migliore qualità, perfetto per il ridimensionamento
  - Ideale per web e presentazioni
- `jpeg`: Formato immagine JPEG
  - Adatto per diagrammi simili a foto
  - Dimensione file più piccola, ma possibili artefatti di compressione
- `png`: Formato immagine PNG
  - Compressione senza perdita, ideale per diagrammi lineari
  - Ottimizza la dimensione del file mantenendo la chiarezza
- `webp`: Formato immagine WebP
  - Scelta migliore per il web moderno
  - Migliore compressione mantenendo la qualità
- `pdf`: Formato documento PDF
  - Perfetto per la stampa e l'integrazione dei documenti
  - Supporta impostazioni speciali di layout

#### theme: Stile Tema
- `default`: Tema predefinito
  - Colori universali, adatti alla maggior parte degli scenari
  - Effetti visivi chiari e leggibili
- `neutral`: Tema neutro
  - Colori bianco e nero, adatti per occasioni formali
  - Migliore per la stampa
- `dark`: Tema scuro
  - Sfondo scuro, testo chiaro
  - Adatto per modalità notturna o interfacce scure
- `forest`: Tema foresta
  - Schema colori verde
  - Dà una sensazione naturale ed energica

#### bgColor: Colore Sfondo
- Supporta due formati:
  1. Codice colore esadecimale: es., `FF0000` (rosso)
  2. Colori nominati: usa prefisso `!`, es., `!white`
- Usa il predefinito del tema se non impostato

#### width & height: Dimensioni Immagine
- Unità: pixel
- L'impostazione di qualsiasi valore attiva il ridimensionamento automatico
- Raccomandato impostare il parametro scale per qualità di output ottimale

#### scale: Rapporto di Scala
- Intervallo: numero tra 1 e 3
- Efficace solo quando width o height è impostato
- Valore più alto significa immagine di output più chiara
- Errore lanciato se fuori intervallo

#### Impostazioni Specifiche PDF
1. fit: Auto-adattamento
   - `true`: Il diagramma si adatta automaticamente alla dimensione della pagina
   - `false`: Usa dimensione carta specificata
2. paper: Dimensione Carta
   - Dimensioni carta standard: 'a4', 'a3', 'letter', ecc.
   - Efficace solo quando fit=false
3. landscape: Modalità Paesaggio
   - `true`: Usa layout paesaggio
   - `false`: Usa layout ritratto (predefinito)
   - Efficace solo quando fit=false

### 🌟 Caratteristiche

- Zero dipendenze: Design leggero, nessun bagaglio extra
- Supporto TypeScript: Suggerimenti tipo completi per sviluppo più fluido
- Multi-piattaforma: Funziona sia in ambiente browser che Node.js
- Design flessibile: Supporta varie esigenze di personalizzazione

### 🔄 Definizione Completa dell'Interfaccia

```typescript
interface MermaidInkOptions {
  // Selezione formato di output
  type?: 'svg' | 'jpeg' | 'png' | 'webp' | 'pdf';
  
  // Impostazione stile tema
  theme?: 'default' | 'neutral' | 'dark' | 'forest';
  
  // Colore sfondo (hex o colore nominato)
  bgColor?: string;
  
  // Impostazioni dimensione immagine (pixel)
  width?: number;
  height?: number;
  
  // Rapporto di scala (1-3)
  scale?: number;
  
  // Impostazioni specifiche PDF
  fit?: boolean;        // Auto-adattamento dimensione
  paper?: string;       // Dimensione carta
  landscape?: boolean;  // Modalità paesaggio
}
```

## Licenza

Licenza MIT - Libero di utilizzare, buono sviluppo!
