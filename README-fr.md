# mcp-mermaid-img

Transformez les diagrammes de Claude en magnifiques fichiers images ! Convertissez facilement les diagrammes Mermaid en images de haute qualité 🎨

[English](README.md) | [繁體中文](README-zhTW.md) | [Español](README-es.md) | [Deutsch](README-de.md) | [Italiano](README-it.md) | [Português](README-pt.md) | [Nederlands](README-nl.md)

## Pourquoi cet outil ?

En utilisant Claude Desktop, avez-vous rencontré ces problèmes :
- Claude peut dessiner de beaux organigrammes, diagrammes de séquence, diagrammes de Gantt...
- Mais même avec mcp-shell, vous ne sauvegardez que du code Mermaid 😅
- Vous voulez partager avec des collègues ou mettre dans des présentations, mais vous devez faire des captures d'écran (de mauvaise qualité)

Ne vous inquiétez pas ! Avec mcp-mermaid-img, les diagrammes de Claude se transforment instantanément en images de haute qualité !

## Fonctionnalités Puissantes

- Conversion en un clic : Code Mermaid → URL d'image haute qualité
- Formats multiples : SVG (ultra-net), PNG, JPEG, WebP, PDF - à votre choix
- Entièrement personnalisable : Prend en charge divers thèmes, couleurs, paramètres de taille
- Aperçu en direct : Voyez le résultat directement dans les conversations Claude

## Démarrage

### 🎯 Configurer Claude Desktop

1. Ajoutez à votre `claude_desktop_config.json` :

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

2. Redémarrez Claude Desktop, et l'outil est prêt ! 🎉

### 💡 Utilisation

Dites simplement à Claude : "Convertis le diagramme actuel en SVG et sauvegarde-le localement", et c'est fait en un clic !

Claude va automatiquement :
1. Obtenir le code Mermaid actuel
2. Utiliser l'outil mermaid-to-file pour la conversion
3. Sauvegarder en fichier SVG dans votre dossier de téléchargements
4. Afficher le résultat de la sauvegarde dans la conversation

C'est aussi simple que ça ! Plus besoin de s'inquiéter des diagrammes coincés dans la fenêtre de chat.

### 🛠️ Description des Outils MCP

Ce package fournit trois puissants outils MCP :

#### 1. mermaid-to-url
Convertit les diagrammes Mermaid en URLs d'images. Parfait pour :
- Afficher des diagrammes directement dans les réponses AI/LLM
- Partager rapidement des liens de diagrammes
- Télécharger des fichiers de diagrammes

#### 2. mermaid-to-file
Sauvegarde automatiquement les diagrammes dans le dossier de téléchargements ou le chemin spécifié :
- Prend en charge les chemins relatifs (vers le dossier de téléchargements) ou absolus
- Gestion automatique des extensions de fichiers
- Empêche l'écrasement des fichiers existants

#### 3. mermaid-to-svg
Spécifiquement pour obtenir des diagrammes au format SVG :
- Obtenir directement le code source SVG
- Parfait pour l'intégration dans des pages web ou documents
- Pratique pour le traitement ultérieur de documents dans les conversations AI

---

## Pour les Développeurs 🔧

Vous voulez utiliser cette puissante fonction de conversion dans votre propre projet ? Pas de problème !

### 📦 Installation

```bash
npm install mcp-mermaid-img
```

### 💻 Exemple de Code

```typescript
import { generateMermaidInkUrl } from 'mcp-mermaid-img';

// Utilisation basique
const url = generateMermaidInkUrl('graph TD;A-->B;B-->C;');

// Paramètres avancés
const url = generateMermaidInkUrl('graph TD;A-->B;B-->C;', {
  type: 'svg',          // Format de sortie
  theme: 'dark',        // Style de thème
  bgColor: '!white',    // Couleur de fond
  width: 800           // Largeur d'image
});
```

### ⚙️ Description Complète des Paramètres

#### type : Format de Sortie
- `svg` : Format vectoriel SVG (par défaut)
  - Meilleure qualité, parfait pour le redimensionnement
  - Idéal pour le web et les présentations
- `jpeg` : Format d'image JPEG
  - Adapté aux diagrammes de type photo
  - Taille de fichier plus petite, mais peut avoir des artefacts de compression
- `png` : Format d'image PNG
  - Compression sans perte, idéal pour les diagrammes linéaires
  - Optimise la taille du fichier tout en maintenant la clarté
- `webp` : Format d'image WebP
  - Meilleur choix pour le web moderne
  - Meilleure compression tout en maintenant la qualité
- `pdf` : Format de document PDF
  - Parfait pour l'impression et l'intégration de documents
  - Prend en charge les paramètres spéciaux de mise en page

#### theme : Style de Thème
- `default` : Thème par défaut
  - Couleurs universelles, adaptées à la plupart des scénarios
  - Effets visuels clairs et lisibles
- `neutral` : Thème neutre
  - Couleurs noir et blanc, adaptées aux occasions formelles
  - Meilleur pour l'impression
- `dark` : Thème sombre
  - Fond sombre, texte clair
  - Adapté au mode nuit ou aux interfaces sombres
- `forest` : Thème forêt
  - Schéma de couleurs vert
  - Donne une sensation naturelle et énergique

#### bgColor : Couleur de Fond
- Prend en charge deux formats :
  1. Code couleur hexadécimal : ex., `FF0000` (rouge)
  2. Couleurs nommées : utiliser le préfixe `!`, ex., `!white`
- Utilise la couleur par défaut du thème si non définie

#### width & height : Dimensions de l'Image
- Unité : pixels
- La définition de l'une ou l'autre valeur déclenche le redimensionnement automatique
- Recommandé de définir le paramètre scale pour une qualité de sortie optimale

#### scale : Ratio d'Échelle
- Plage : nombre entre 1 et 3
- Effectif uniquement lorsque width ou height est défini
- Une valeur plus élevée signifie une image de sortie plus nette
- Erreur lancée si hors plage

#### Paramètres Spécifiques PDF
1. fit : Ajustement automatique
   - `true` : Le diagramme s'ajuste automatiquement à la taille de la page
   - `false` : Utilise la taille de papier spécifiée
2. paper : Taille du Papier
   - Tailles de papier standard : 'a4', 'a3', 'letter', etc.
   - Effectif uniquement lorsque fit=false
3. landscape : Mode Paysage
   - `true` : Utilise la mise en page paysage
   - `false` : Utilise la mise en page portrait (par défaut)
   - Effectif uniquement lorsque fit=false

### 🌟 Caractéristiques

- Zéro dépendance : Conception légère, sans surplus
- Support TypeScript : Suggestions de types complètes pour un développement plus fluide
- Multi-plateforme : Fonctionne dans les environnements navigateur et Node.js
- Conception flexible : Prend en charge diverses besoins de personnalisation

### 🔄 Définition Complète de l'Interface

```typescript
interface MermaidInkOptions {
  // Sélection du format de sortie
  type?: 'svg' | 'jpeg' | 'png' | 'webp' | 'pdf';
  
  // Paramètre de style de thème
  theme?: 'default' | 'neutral' | 'dark' | 'forest';
  
  // Couleur de fond (hex ou couleur nommée)
  bgColor?: string;
  
  // Paramètres de dimension d'image (pixels)
  width?: number;
  height?: number;
  
  // Ratio d'échelle (1-3)
  scale?: number;
  
  // Paramètres spécifiques PDF
  fit?: boolean;        // Ajustement automatique de la taille
  paper?: string;       // Taille du papier
  landscape?: boolean;  // Mode paysage
}
```

## Licence

Licence MIT - Libre d'utilisation, bon développement !
