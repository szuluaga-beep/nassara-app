import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

/**
 * Textarea Component (Atom)
 * 
 * The Textarea component provides a multi-line text input field, ideal for
 * longer text entries like comments, descriptions, or messages.
 * 
 * **Atomic Design Level:** Atom
 * - Basic HTML textarea element with enhanced styling
 * - No dependencies on other components
 * - Essential for multi-line text input
 */
const meta = {
  title: 'Atoms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A multi-line text input component. Part of the Atomic Design atoms layer.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the textarea',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default textarea
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
  },
};

/**
 * With custom rows
 */
export const CustomRows: Story = {
  args: {
    placeholder: 'Taller textarea with 8 rows',
    rows: 8,
  },
};

/**
 * Disabled state
 */
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
  },
};

/**
 * With default value
 */
export const WithValue: Story = {
  args: {
    defaultValue: 'This is some pre-filled content in the textarea.\nIt can span multiple lines.',
    rows: 4,
  },
};

/**
 * With max length
 */
export const WithMaxLength: Story = {
  args: {
    placeholder: 'Maximum 100 characters',
    maxLength: 100,
  },
};
