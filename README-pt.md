# mcp-mermaid-img

Transforme os diagramas do Claude em belos arquivos de imagem! Converta facilmente diagramas Mermaid em imagens de alta qualidade 🎨

[English](README.md) | [繁體中文](README-zhTW.md) | [Español](README-es.md) | [Français](README-fr.md) | [Deutsch](README-de.md) | [Italiano](README-it.md) | [Nederlands](README-nl.md)

## Por que esta ferramenta?

Ao usar o Claude Desktop, você já encontrou estes problemas:
- O Claude pode desenhar belos fluxogramas, diagramas de sequência, diagramas de Gantt...
- Mas mesmo com mcp-shell, você só salva código Mermaid 😅
- Quer compartilhar com colegas ou colocar em apresentações, mas precisa fazer capturas de tela (com baixa qualidade)

Não se preocupe! Com mcp-mermaid-img, os diagramas do Claude se transformam instantaneamente em imagens de alta qualidade!

## Recursos Poderosos

- Conversão com um clique: Código Mermaid → URL de imagem de alta qualidade
- Múltiplos formatos: SVG (ultra-nítido), PNG, JPEG, WebP, PDF - você escolhe
- Totalmente personalizável: Suporta vários temas, cores, configurações de tamanho
- Visualização ao vivo: Veja o resultado diretamente nas conversas do Claude

## Começando

### 🎯 Configurar o Claude Desktop

1. Adicione ao seu `claude_desktop_config.json`:

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

2. Reinicie o Claude Desktop, e a ferramenta está pronta! 🎉

### 💡 Uso

Basta dizer ao Claude: "Converta o diagrama atual em SVG e salve localmente", e está feito com um clique!

O Claude automaticamente:
1. Obtém o código Mermaid atual
2. Usa a ferramenta mermaid-to-file para conversão
3. Salva como arquivo SVG na sua pasta de downloads
4. Mostra o resultado do salvamento na conversa

É tão simples assim! Não mais preocupações com diagramas presos na janela do chat.

### 🛠️ Descrição das Ferramentas MCP

Este pacote fornece três poderosas ferramentas MCP:

#### 1. mermaid-to-url
Converte diagramas Mermaid em URLs de imagem. Perfeito para:
- Exibir diagramas diretamente em respostas AI/LLM
- Compartilhar links de diagramas rapidamente
- Baixar arquivos de diagramas

#### 2. mermaid-to-file
Salva automaticamente diagramas na pasta de downloads ou caminho especificado:
- Suporta caminhos relativos (para pasta de downloads) ou caminhos absolutos
- Manipulação automática de extensões de arquivo
- Previne sobrescrita de arquivos existentes

#### 3. mermaid-to-svg
Especificamente para obter diagramas em formato SVG:
- Obtenha o código-fonte SVG diretamente
- Perfeito para incorporação em páginas web ou documentos
- Conveniente para processamento posterior de documentos em conversas AI

---

## Para Desenvolvedores 🔧

Quer usar este poderoso recurso de conversão em seu próprio projeto? Sem problema!

### 📦 Instalação

```bash
npm install mcp-mermaid-img
```

### 💻 Exemplo de Código

```typescript
import { generateMermaidInkUrl } from 'mcp-mermaid-img';

// Uso básico
const url = generateMermaidInkUrl('graph TD;A-->B;B-->C;');

// Configurações avançadas
const url = generateMermaidInkUrl('graph TD;A-->B;B-->C;', {
  type: 'svg',          // Formato de saída
  theme: 'dark',        // Estilo do tema
  bgColor: '!white',    // Cor de fundo
  width: 800           // Largura da imagem
});
```

### ⚙️ Descrição Completa dos Parâmetros

#### type: Formato de Saída
- `svg`: Formato vetorial SVG (padrão)
  - Melhor qualidade, perfeito para redimensionamento
  - Ideal para web e apresentações
- `jpeg`: Formato de imagem JPEG
  - Adequado para diagramas tipo foto
  - Tamanho de arquivo menor, mas pode ter artefatos de compressão
- `png`: Formato de imagem PNG
  - Compressão sem perdas, ideal para diagramas lineares
  - Otimiza tamanho do arquivo mantendo clareza
- `webp`: Formato de imagem WebP
  - Melhor escolha para web moderna
  - Melhor compressão mantendo qualidade
- `pdf`: Formato de documento PDF
  - Perfeito para impressão e integração de documentos
  - Suporta configurações especiais de layout

#### theme: Estilo do Tema
- `default`: Tema padrão
  - Cores universais, adequadas para maioria dos cenários
  - Efeitos visuais claros e legíveis
- `neutral`: Tema neutro
  - Cores preto e branco, adequadas para ocasiões formais
  - Melhor para impressão
- `dark`: Tema escuro
  - Fundo escuro, texto claro
  - Adequado para modo noturno ou interfaces escuras
- `forest`: Tema floresta
  - Esquema de cores verde
  - Dá uma sensação natural e energética

#### bgColor: Cor de Fundo
- Suporta dois formatos:
  1. Código de cor hexadecimal: ex., `FF0000` (vermelho)
  2. Cores nomeadas: use prefixo `!`, ex., `!white`
- Usa padrão do tema se não definido

#### width & height: Dimensões da Imagem
- Unidade: pixels
- Definir qualquer valor ativa o redimensionamento automático
- Recomendado definir parâmetro scale para qualidade de saída ideal

#### scale: Razão de Escala
- Intervalo: número entre 1 e 3
- Efetivo apenas quando width ou height está definido
- Valor mais alto significa imagem de saída mais nítida
- Erro lançado se fora do intervalo

#### Configurações Específicas PDF
1. fit: Auto-ajuste
   - `true`: Diagrama se ajusta automaticamente ao tamanho da página
   - `false`: Usa tamanho de papel especificado
2. paper: Tamanho do Papel
   - Tamanhos de papel padrão: 'a4', 'a3', 'letter', etc.
   - Efetivo apenas quando fit=false
3. landscape: Modo Paisagem
   - `true`: Usa layout paisagem
   - `false`: Usa layout retrato (padrão)
   - Efetivo apenas quando fit=false

### 🌟 Características

- Zero dependências: Design leve, sem bagagem extra
- Suporte TypeScript: Dicas de tipo completas para desenvolvimento mais fluido
- Multiplataforma: Funciona em ambientes navegador e Node.js
- Design flexível: Suporta várias necessidades de personalização

### 🔄 Definição Completa da Interface

```typescript
interface MermaidInkOptions {
  // Seleção de formato de saída
  type?: 'svg' | 'jpeg' | 'png' | 'webp' | 'pdf';
  
  // Configuração de estilo do tema
  theme?: 'default' | 'neutral' | 'dark' | 'forest';
  
  // Cor de fundo (hex ou cor nomeada)
  bgColor?: string;
  
  // Configurações de dimensão da imagem (pixels)
  width?: number;
  height?: number;
  
  // Razão de escala (1-3)
  scale?: number;
  
  // Configurações específicas PDF
  fit?: boolean;        // Auto-ajuste de tamanho
  paper?: string;       // Tamanho do papel
  landscape?: boolean;  // Modo paisagem
}
```

## Licença

Licença MIT - Livre para usar, bom desenvolvimento!
