import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

/**
 * Button Component (Atom)
 * 
 * The Button component is a basic, reusable UI element that can be customized
 * with different variants and sizes. It follows the Atomic Design principle
 * as the most fundamental interactive element.
 * 
 * **Atomic Design Level:** Atom
 * - No dependencies on other components
 * - Highly reusable and configurable
 * - Corresponds to a native HTML button element with enhanced styling
 */
const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants and sizes. Part of the Atomic Design atoms layer.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
      description: 'Size of the button',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child component using Radix Slot',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default button variant with primary styling
 */
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
};

/**
 * Outline variant with a border and transparent background
 */
export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
};

/**
 * Secondary variant with subtle background
 */
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

/**
 * Ghost variant with minimal styling
 */
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
};

/**
 * Destructive variant for dangerous actions
 */
export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

/**
 * Link variant styled as a hyperlink
 */
export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

/**
 * Extra small button size
 */
export const ExtraSmall: Story = {
  args: {
    children: 'XS Button',
    size: 'xs',
  },
};

/**
 * Small button size
 */
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

/**
 * Large button size
 */
export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

/**
 * Icon button variant
 */
export const IconButton: Story = {
  args: {
    children: '✓',
    size: 'icon',
    variant: 'outline',
  },
};

/**
 * All variants showcase
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

/**
 * All sizes showcase
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
