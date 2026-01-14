# Storybook - Guía de Documentación de Componentes

Esta guía explica cómo usar y contribuir a Storybook en el proyecto nassara-app, que sigue la metodología de Atomic Design.

## 📖 ¿Qué es Storybook?

Storybook es una herramienta de desarrollo frontend para construir componentes de UI y páginas de forma aislada. Permite:

- **Visualización interactiva** de componentes sin necesidad de ejecutar toda la aplicación
- **Documentación automática** de propiedades y variantes
- **Testing visual** para detectar regresiones en la UI
- **Colaboración mejorada** entre desarrolladores y diseñadores
- **Desarrollo más rápido** al trabajar con componentes aislados

## 🚀 Comandos Principales

```bash
# Iniciar Storybook en modo desarrollo
pnpm run storybook

# Construir Storybook para producción
pnpm run build-storybook
```

Storybook estará disponible en: `http://localhost:6006`

## 📁 Estructura de Archivos

Las historias (stories) se organizan siguiendo la estructura de Atomic Design:

```
components/
├── atoms/
│   ├── button.tsx
│   └── button.stories.tsx      # Historia del componente Button
├── molecules/
│   ├── card.tsx
│   └── card.stories.tsx        # Historia del componente Card
├── organisms/
│   └── [component].stories.tsx
├── templates/
│   └── [template].stories.tsx
└── pages/
    └── [page].stories.tsx
```

**Convención de nombres:**
- Archivo de componente: `component-name.tsx`
- Archivo de historia: `component-name.stories.tsx`
- Ubicación: En el mismo directorio que el componente

## ✍️ Cómo Crear una Historia (Story)

### Plantilla Básica

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './component-name';

/**
 * ComponentName Description
 * 
 * Detailed description of what this component does and its purpose
 * in the Atomic Design hierarchy.
 * 
 * **Atomic Design Level:** [Atom|Molecule|Organism|Template|Page]
 * - Key characteristic 1
 * - Key characteristic 2
 */
const meta = {
  title: 'Atoms/ComponentName',  // Ajustar según el nivel
  component: ComponentName,
  parameters: {
    layout: 'centered',  // 'centered' | 'fullscreen' | 'padded'
    docs: {
      description: {
        component: 'Brief description for documentation.',
      },
    },
  },
  tags: ['autodocs'],  // Habilita documentación automática
  argTypes: {
    // Definir controles para las propiedades
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Visual variant of the component',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the component',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the component',
    },
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default state of the component
 */
export const Default: Story = {
  args: {
    children: 'Content',
    variant: 'primary',
  },
};

/**
 * Example with different props
 */
export const Variant: Story = {
  args: {
    children: 'Content',
    variant: 'secondary',
  },
};

/**
 * Complex example with custom render
 */
export const Complex: Story = {
  render: () => (
    <div className="space-y-4">
      <ComponentName variant="primary">Primary</ComponentName>
      <ComponentName variant="secondary">Secondary</ComponentName>
    </div>
  ),
};
```

### Ejemplos por Nivel de Atomic Design

#### Atoms (Átomos)

Los átomos son componentes simples sin dependencias:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
  },
};
```

#### Molecules (Moléculas)

Las moléculas combinan átomos:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardContent } from './card';
import { Button } from '../atoms/button';  // Importar átomos necesarios

const meta = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
        <Button className="mt-4">Action</Button>
      </CardContent>
    </Card>
  ),
};
```

#### Organisms (Organismos)

Los organismos son secciones complejas:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './login-form';

const meta = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data) => console.log('Login:', data),
  },
};

export const WithError: Story = {
  args: {
    error: 'Invalid credentials',
    onSubmit: (data) => console.log('Login:', data),
  },
};
```

## 🎨 Mejores Prácticas

### 1. Nomenclatura de Títulos

Usa la jerarquía de Atomic Design en el título:

- `Atoms/ComponentName` - Para átomos
- `Molecules/ComponentName` - Para moléculas
- `Organisms/ComponentName` - Para organismos
- `Templates/TemplateName` - Para templates
- `Pages/PageName` - Para páginas

### 2. Documentación

- **Siempre agrega** comentarios JSDoc sobre cada historia
- **Describe** qué variante o estado muestra cada historia
- **Incluye** información sobre el nivel de Atomic Design
- **Documenta** las propiedades importantes en `argTypes`

### 3. Múltiples Variantes

Crea historias separadas para cada variante importante:

```tsx
export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Outline: Story = { args: { variant: 'outline' } };
```

O agrupa variantes en una sola historia showcase:

```tsx
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Component variant="primary">Primary</Component>
      <Component variant="secondary">Secondary</Component>
      <Component variant="outline">Outline</Component>
    </div>
  ),
};
```

### 4. Estados Interactivos

Incluye historias para estados importantes:

```tsx
export const Default: Story = { args: { ... } };
export const Disabled: Story = { args: { disabled: true } };
export const Loading: Story = { args: { isLoading: true } };
export const WithError: Story = { args: { error: 'Error message' } };
```

### 5. Uso de Controles

Define controles interactivos para propiedades importantes:

```tsx
argTypes: {
  variant: {
    control: 'select',  // select, radio, check, inline-radio, inline-check
    options: ['primary', 'secondary'],
  },
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg'],
  },
  disabled: {
    control: 'boolean',
  },
  label: {
    control: 'text',
  },
  count: {
    control: 'number',
  },
  backgroundColor: {
    control: 'color',
  },
},
```

### 6. Layout

Elige el layout apropiado según el componente:

- `centered` - Para componentes pequeños (botones, inputs)
- `padded` - Para componentes medianos (cards, forms)
- `fullscreen` - Para páginas completas y templates

### 7. Componentes con Estilos de Tailwind

Asegúrate de incluir las clases de Tailwind necesarias:

```tsx
export const Example: Story = {
  render: () => (
    <div className="w-[400px] p-4 space-y-4">
      <Component />
    </div>
  ),
};
```

## 🔧 Configuración Avanzada

### Personalizar Parámetros Globales

Edita `.storybook/preview.ts` para configuración global:

```tsx
import type { Preview } from '@storybook/nextjs-vite'
import '../app/globals.css'

const preview: Preview = {
  parameters: {
    // Configuración de backgrounds
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0a0a0a' },
      ],
    },
    // Configuración de acciones
    actions: { argTypesRegex: '^on[A-Z].*' },
    // Configuración de controles
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
```

### Agregar Addons

Los addons actuales incluyen:
- `@storybook/addon-a11y` - Verificación de accesibilidad
- `@storybook/addon-docs` - Documentación automática
- `@chromatic-com/storybook` - Testing visual
- `@storybook/addon-vitest` - Integración con Vitest

## 📚 Recursos Adicionales

### Documentación Oficial
- [Storybook Documentation](https://storybook.js.org/docs)
- [Storybook for Next.js](https://storybook.js.org/docs/get-started/frameworks/nextjs)
- [Writing Stories](https://storybook.js.org/docs/writing-stories)
- [Essential Addons](https://storybook.js.org/docs/essentials)

### Atomic Design
- Ver [ATOMIC_DESIGN.md](./ATOMIC_DESIGN.md) para la guía completa de Atomic Design

## 🤝 Flujo de Trabajo

### Agregar un Nuevo Componente

1. **Crear el componente** siguiendo Atomic Design
   ```bash
   components/[atoms|molecules|organisms]/component-name.tsx
   ```

2. **Crear la historia**
   ```bash
   components/[atoms|molecules|organisms]/component-name.stories.tsx
   ```

3. **Desarrollar con Storybook**
   ```bash
   pnpm run storybook
   ```

4. **Verificar documentación automática**
   - Navega a tu componente en Storybook
   - Revisa la tab "Docs" para ver la documentación generada

5. **Validar accesibilidad**
   - Usa el addon A11y para verificar problemas de accesibilidad
   - Corrige cualquier issue reportado

6. **Hacer commit** del componente y su historia

### Actualizar Componentes Existentes

1. Modifica el componente
2. Actualiza las historias si las propiedades cambian
3. Verifica en Storybook que todas las historias funcionan
4. Actualiza la documentación si es necesario

## ⚡ Tips y Trucos

### Auto-reload

Storybook recarga automáticamente cuando modificas:
- Componentes
- Historias
- Estilos globales

### Atajos de Teclado

- `F` - Pantalla completa
- `D` - Cambiar tema (light/dark)
- `A` - Mostrar/ocultar addons
- `S` - Mostrar/ocultar sidebar
- `/` - Buscar historias

### Debugging

Para debug, puedes usar console.log en las historias:

```tsx
export const Debug: Story = {
  render: (args) => {
    console.log('Current args:', args);
    return <Component {...args} />;
  },
};
```

### Compartir Historias

El build de producción genera archivos estáticos en `storybook-static/` que pueden desplegarse en cualquier servidor web:

```bash
pnpm run build-storybook
# Desplegar la carpeta storybook-static/
```

## 🐛 Solución de Problemas

### Error: Module not found

Verifica que las rutas de importación usen el alias `@/`:

```tsx
import { Component } from '@/components/atoms/component'
```

### Estilos no se aplican

Asegúrate de que `globals.css` esté importado en `.storybook/preview.ts`

### Componente no aparece en Storybook

Verifica que:
1. El archivo termine en `.stories.tsx`
2. Esté en una carpeta incluida en `.storybook/main.ts`
3. Exporte un `default` meta object

---

**Última actualización:** Enero 2026

Para preguntas o sugerencias, consulta con el equipo de desarrollo.
