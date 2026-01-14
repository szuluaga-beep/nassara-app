# Atomic Design - Estructura de Componentes

Este proyecto sigue el enfoque de **Atomic Design** para organizar los componentes de la aplicación, promoviendo la reutilización, escalabilidad y mantenibilidad del código.

## 📚 ¿Qué es Atomic Design?

Atomic Design es una metodología creada por Brad Frost que descompone las interfaces de usuario en componentes jerárquicos, similar a cómo los átomos se combinan para formar moléculas y organismos en química.

## 🗂️ Estructura de Directorios

```
components/
├── atoms/           # Elementos básicos e indivisibles
├── molecules/       # Combinaciones simples de átomos
├── organisms/       # Secciones complejas que agrupan moléculas y átomos
├── templates/       # Estructura general de página que define layouts
└── pages/           # Vistas completas que implementan templates
```

## 🔬 Niveles de Atomic Design

### 1. Atoms (Átomos)
**Ubicación:** `components/atoms/`

Los átomos son los elementos más básicos e indivisibles de la interfaz. No pueden descomponerse más sin perder su funcionalidad.

**Componentes actuales:**
- `button.tsx` - Botones de acción
- `input.tsx` - Campos de entrada de texto
- `label.tsx` - Etiquetas para formularios
- `badge.tsx` - Insignias y badges informativos
- `separator.tsx` - Separadores visuales
- `textarea.tsx` - Áreas de texto multilinea

**Características:**
- Componentes simples y reutilizables
- No tienen dependencias de otros componentes (excepto utilidades)
- Altamente configurables mediante props
- Generalmente corresponden a elementos HTML nativos mejorados

**Ejemplo de importación:**
```tsx
import { Button, Input, Label } from "@/components/atoms"
// o específicamente:
import { Button } from "@/components/atoms/button"
```

### 2. Molecules (Moléculas)
**Ubicación:** `components/molecules/`

Las moléculas son grupos de átomos que trabajan juntos como una unidad. Representan combinaciones simples con un propósito específico.

**Componentes actuales:**
- `card.tsx` - Tarjetas de contenido
- `field.tsx` - Grupos de campos de formulario (label + input + error)
- `input-group.tsx` - Grupos de inputs con addons
- `alert-dialog.tsx` - Diálogos de alerta
- `dropdown-menu.tsx` - Menús desplegables
- `select.tsx` - Selectores/dropdowns
- `combobox.tsx` - Combobox con búsqueda

**Características:**
- Combinan múltiples átomos
- Tienen una funcionalidad específica y coherente
- Pueden tener estado interno simple
- Reutilizables en diferentes contextos

**Ejemplo de importación:**
```tsx
import { Card, Field, AlertDialog } from "@/components/molecules"
// o específicamente:
import { Card } from "@/components/molecules/card"
```

### 3. Organisms (Organismos)
**Ubicación:** `components/organisms/`

Los organismos son secciones más complejas que combinan moléculas y átomos para formar partes distintivas de la interfaz.

**Ejemplos de lo que podría ir aquí:**
- Header/Navbar completo con navegación y acciones
- Footer con múltiples secciones
- Formularios completos (registro, login)
- Secciones de la landing page (Hero, Stats, Services)
- Sidebars con navegación

**Características:**
- Componentes complejos y específicos
- Combinan múltiples moléculas y átomos
- Pueden tener lógica de negocio
- Forman secciones distintivas de la UI

**Ejemplo de importación:**
```tsx
import { Header, Footer } from "@/components/organisms"
```

### 4. Templates (Plantillas)
**Ubicación:** `components/templates/`

Las templates definen la estructura general de la página, mostrando cómo se organizan los organismos sin contenido real.

**Ejemplos de lo que podría ir aquí:**
- Layout principal de la aplicación
- Layout de dashboard
- Layout de autenticación
- Layout de página con sidebar

**Características:**
- Definen la estructura y el layout
- Posicionan organismos en la página
- No contienen contenido específico
- Pueden recibir componentes como children

**Ejemplo de importación:**
```tsx
import { MainLayout, DashboardLayout } from "@/components/templates"
```

### 5. Pages (Páginas)
**Ubicación:** `components/pages/`

Las páginas son instancias específicas de templates con contenido real. Representan las vistas completas de la aplicación.

**Componentes actuales:**
- `landing-page.tsx` - Página principal de landing
- `component-example.tsx` - Ejemplos de componentes
- `example.tsx` - Wrapper para ejemplos

**Características:**
- Implementan templates específicas
- Contienen datos y contenido real
- Orquestan la lógica de página
- Punto de entrada para rutas

**Ejemplo de importación:**
```tsx
import { LandingPage } from "@/components/pages"
// Usado en app/page.tsx:
import { LandingPage } from "@/components/pages/landing-page"
```

## 📋 Reglas y Mejores Prácticas

### 1. Flujo de Dependencias
Las dependencias deben fluir en una sola dirección:

```
Atoms ← Molecules ← Organisms ← Templates ← Pages
```

**Reglas:**
- ✅ Los átomos NO deben importar otros componentes
- ✅ Las moléculas SOLO pueden importar átomos
- ✅ Los organismos pueden importar átomos y moléculas
- ✅ Las templates pueden importar todos los niveles anteriores
- ✅ Las páginas pueden importar todos los niveles
- ❌ NUNCA importar en dirección inversa (ej: un átomo importando una molécula)

### 2. Criterios de Clasificación

**¿Es un átomo?**
- ¿Es el elemento más simple posible?
- ¿Corresponde a un elemento HTML mejorado?
- ¿No tiene dependencias de otros componentes?

**¿Es una molécula?**
- ¿Combina 2-3 átomos?
- ¿Tiene un propósito claro y específico?
- ¿Es reutilizable en diferentes contextos?

**¿Es un organismo?**
- ¿Es una sección completa de la UI?
- ¿Combina múltiples moléculas?
- ¿Tiene lógica de negocio significativa?

### 3. Nomenclatura

- Usa PascalCase para nombres de componentes
- Sé descriptivo y específico
- Los nombres deben indicar qué hace el componente, no dónde se usa
- Evita nombres genéricos como "Container" o "Wrapper" sin contexto

### 4. Imports

**Imports específicos (recomendado para átomos y moléculas):**
```tsx
import { Button } from "@/components/atoms/button"
import { Card } from "@/components/molecules/card"
```

**Imports agrupados (conveniente pero menos tree-shakeable):**
```tsx
import { Button, Input, Label } from "@/components/atoms"
```

### 5. Estructura de Archivos

Cada componente debe seguir esta estructura:
```
component-name.tsx
```

Para componentes complejos con múltiples sub-componentes relacionados, considera:
```
component-name/
├── index.tsx
├── component-name.tsx
├── sub-component.tsx
└── types.ts
```

## 🔄 Migración y Refactorización

### Al agregar un nuevo componente:

1. **Identifica el nivel correcto:**
   - Pregúntate: ¿De qué está compuesto este componente?
   - Sigue las reglas de dependencias

2. **Crea el archivo en el directorio apropiado:**
   ```bash
   components/[atoms|molecules|organisms|templates|pages]/nombre-componente.tsx
   ```

3. **Actualiza el index.ts del nivel:**
   ```tsx
   export * from "./nombre-componente"
   ```

4. **Documenta si es necesario:**
   - Componentes complejos deben incluir comentarios
   - Propiedades no obvias deben estar documentadas

### Al refactorizar componentes existentes:

1. Identifica componentes que pueden extraerse a niveles inferiores
2. Crea el nuevo componente en el nivel apropiado
3. Actualiza las importaciones
4. Verifica que no hay importaciones circulares
5. Prueba que todo funciona correctamente

## 🎯 Beneficios de esta Estructura

1. **Reutilización:** Los componentes pequeños son más fáciles de reutilizar
2. **Mantenimiento:** Los cambios son más localizados y predecibles
3. **Escalabilidad:** Fácil agregar nuevos componentes sin complejidad
4. **Colaboración:** Estructura clara para que el equipo entienda dónde va cada cosa
5. **Testing:** Componentes pequeños son más fáciles de probar
6. **Documentación:** La estructura es auto-documentada

## 📖 Recursos Adicionales

- [Atomic Design por Brad Frost](https://atomicdesign.bradfrost.com/)
- [Pattern Lab](https://patternlab.io/)
- [Component Driven Development](https://www.componentdriven.org/)

## 🔧 Comandos Útiles

```bash
# Desarrollo
pnpm dev

# Build
pnpm build

# Linting
pnpm lint
```

## 📝 Notas

- Esta estructura es flexible y puede evolucionar según las necesidades del proyecto
- No todos los componentes encajan perfectamente en una categoría - usa tu mejor juicio
- La consistencia es más importante que la perfección
- Cuando tengas dudas, consulta con el equipo

---

**Última actualización:** Enero 2026
