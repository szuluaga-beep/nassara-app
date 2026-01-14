import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

/**
 * Input Component (Atom)
 * 
 * The Input component is a basic text input field that serves as a fundamental
 * building block for forms and user input interfaces.
 * 
 * **Atomic Design Level:** Atom
 * - Basic HTML input element with enhanced styling
 * - No dependencies on other components
 * - Highly reusable across different contexts
 */
const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A styled input field for text entry. Part of the Atomic Design atoms layer.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default text input
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

/**
 * Email input type
 */
export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'email@example.com',
  },
};

/**
 * Password input type
 */
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

/**
 * Number input type
 */
export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
  },
};

/**
 * Search input type
 */
export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

/**
 * With default value
 */
export const WithValue: Story = {
  args: {
    defaultValue: 'Pre-filled value',
  },
};
