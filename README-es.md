# mcp-mermaid-img

¡Transforma los diagramas de Claude en hermosos archivos de imagen! Convierte fácilmente los diagramas Mermaid en imágenes de alta calidad 🎨

[English](README.md) | [繁體中文](README-zhTW.md) | [Français](README-fr.md) | [Deutsch](README-de.md) | [Italiano](README-it.md) | [Português](README-pt.md) | [Nederlands](README-nl.md)

## ¿Por qué esta herramienta?

Al usar Claude Desktop, ¿has encontrado estos problemas?:
- Claude puede dibujar hermosos diagramas de flujo, diagramas de secuencia, diagramas de Gantt...
- Pero incluso con mcp-shell, solo guardas código Mermaid 😅
- Quieres compartir con colegas o poner en presentaciones, pero tienes que hacer capturas de pantalla (con mala calidad)

¡No te preocupes! Con mcp-mermaid-img, ¡los diagramas de Claude se transforman instantáneamente en imágenes de alta calidad!

## Características Potentes

- Conversión con un clic: Código Mermaid → URL de imagen de alta calidad
- Múltiples formatos: SVG (ultra claro), PNG, JPEG, WebP, PDF - tú eliges
- Totalmente personalizable: Soporta varios temas, colores, configuraciones de tamaño
- Vista previa en vivo: Ve el resultado directamente en las conversaciones de Claude

## Comenzando

### 🎯 Configurar Claude Desktop

1. Agrega a tu `claude_desktop_config.json`:

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

2. ¡Reinicia Claude Desktop y la herramienta está lista! 🎉

### 💡 Uso

¡Solo dile a Claude: "Convierte el diagrama actual a SVG y guárdalo localmente", y está hecho con un clic!

Claude automáticamente:
1. Obtiene el código Mermaid actual
2. Usa la herramienta mermaid-to-file para la conversión
3. Guarda como archivo SVG en tu carpeta de descargas
4. Muestra el resultado del guardado en la conversación

¡Es así de simple! No más preocupaciones por diagramas atrapados en la ventana de chat.

### 🛠️ Descripción de Herramientas MCP

Este paquete proporciona tres potentes herramientas MCP:

#### 1. mermaid-to-url
Convierte diagramas Mermaid a URLs de imagen. Perfecto para:
- Mostrar diagramas directamente en respuestas de AI/LLM
- Compartir rápidamente enlaces de diagramas
- Descargar archivos de diagramas

#### 2. mermaid-to-file
Guarda automáticamente diagramas en la carpeta de descargas o ruta especificada:
- Soporta rutas relativas (a la carpeta de descargas) o rutas absolutas
- Manejo automático de extensiones de archivo
- Previene sobrescribir archivos existentes

#### 3. mermaid-to-svg
Específicamente para obtener diagramas en formato SVG:
- Obtén el código fuente SVG directamente
- Perfecto para incrustar en páginas web o documentos
- Conveniente para procesamiento posterior de documentos en conversaciones AI

---

## Para Desarrolladores 🔧

¿Quieres usar esta potente función de conversión en tu propio proyecto? ¡Sin problema!

### 📦 Instalación

```bash
npm install mcp-mermaid-img
```

### 💻 Ejemplo de Código

```typescript
import { generateMermaidInkUrl } from 'mcp-mermaid-img';

// Uso básico
const url = generateMermaidInkUrl('graph TD;A-->B;B-->C;');

// Configuración avanzada
const url = generateMermaidInkUrl('graph TD;A-->B;B-->C;', {
  type: 'svg',          // Formato de salida
  theme: 'dark',        // Estilo de tema
  bgColor: '!white',    // Color de fondo
  width: 800           // Ancho de imagen
});
```

### ⚙️ Descripción Completa de Parámetros

#### type: Formato de Salida
- `svg`: Formato vector SVG (predeterminado)
  - Mejor calidad, perfecto para escalar
  - Ideal para web y presentaciones
- `jpeg`: Formato de imagen JPEG
  - Adecuado para diagramas tipo foto
  - Tamaño de archivo más pequeño, pero puede tener artefactos de compresión
- `png`: Formato de imagen PNG
  - Compresión sin pérdida, ideal para diagramas de líneas
  - Optimiza el tamaño del archivo manteniendo la claridad
- `webp`: Formato de imagen WebP
  - Mejor opción para web moderna
  - Mejor compresión manteniendo la calidad
- `pdf`: Formato de documento PDF
  - Perfecto para impresión e integración de documentos
  - Soporta configuraciones especiales de diseño

#### theme: Estilo de Tema
- `default`: Tema predeterminado
  - Colores universales, adecuados para la mayoría de escenarios
  - Efectos visuales claros y legibles
- `neutral`: Tema neutral
  - Colores blanco y negro, adecuados para ocasiones formales
  - Mejor para impresión
- `dark`: Tema oscuro
  - Fondo oscuro, texto claro
  - Adecuado para modo nocturno o interfaces oscuras
- `forest`: Tema bosque
  - Esquema de color verde
  - Da una sensación natural y energética

#### bgColor: Color de Fondo
- Soporta dos formatos:
  1. Código de color hexadecimal: ej., `FF0000` (rojo)
  2. Colores nombrados: usa prefijo `!`, ej., `!white`
- Usa el predeterminado del tema si no se establece

#### width & height: Dimensiones de Imagen
- Unidad: píxeles
- Establecer cualquier valor activa el auto-escalado
- Recomendado establecer parámetro scale para calidad óptima de salida

#### scale: Ratio de Escala
- Rango: número entre 1 y 3
- Solo efectivo cuando se establece width o height
- Valor más alto significa imagen de salida más clara
- Error lanzado si está fuera de rango

#### Configuraciones Específicas PDF
1. fit: Auto-ajuste
   - `true`: Diagrama se auto-ajusta al tamaño de página
   - `false`: Usa tamaño de papel especificado
2. paper: Tamaño de Papel
   - Tamaños de papel estándar: 'a4', 'a3', 'letter', etc.
   - Solo efectivo cuando fit=false
3. landscape: Modo Paisaje
   - `true`: Usa diseño paisaje
   - `false`: Usa diseño retrato (predeterminado)
   - Solo efectivo cuando fit=false

### 🌟 Características

- Cero dependencias: Diseño ligero, sin equipaje extra
- Soporte TypeScript: Sugerencias de tipo completas para desarrollo más fluido
- Multiplataforma: Funciona tanto en navegador como en entornos Node.js
- Diseño flexible: Soporta varias necesidades de personalización

### 🔄 Definición Completa de Interfaz

```typescript
interface MermaidInkOptions {
  // Selección de formato de salida
  type?: 'svg' | 'jpeg' | 'png' | 'webp' | 'pdf';
  
  // Configuración de estilo de tema
  theme?: 'default' | 'neutral' | 'dark' | 'forest';
  
  // Color de fondo (hex o color nombrado)
  bgColor?: string;
  
  // Configuraciones de dimensión de imagen (píxeles)
  width?: number;
  height?: number;
  
  // Ratio de escala (1-3)
  scale?: number;
  
  // Configuraciones específicas PDF
  fit?: boolean;        // Auto-ajustar tamaño
  paper?: string;       // Tamaño de papel
  landscape?: boolean;  // Modo paisaje
}
```

## Licencia

Licencia MIT - ¡Siéntete libre de usar, feliz desarrollo!
