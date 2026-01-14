import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './label';

/**
 * Label Component (Atom)
 * 
 * The Label component is used to provide accessible labels for form controls.
 * It enhances usability and accessibility by associating text with form elements.
 * 
 * **Atomic Design Level:** Atom
 * - Basic HTML label element with enhanced styling
 * - No dependencies on other components
 * - Essential for accessible forms
 */
const meta = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'An accessible label component for form fields. Part of the Atomic Design atoms layer.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: 'text',
      description: 'ID of the form element this label is associated with',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default label
 */
export const Default: Story = {
  args: {
    children: 'Label Text',
  },
};

/**
 * Label with htmlFor association
 */
export const WithHtmlFor: Story = {
  args: {
    htmlFor: 'email-input',
    children: 'Email Address',
  },
};

/**
 * Required field label
 */
export const Required: Story = {
  render: () => (
    <Label>
      Email Address <span className="text-destructive">*</span>
    </Label>
  ),
};

/**
 * Label with description
 */
export const WithDescription: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      <Label>Username</Label>
      <span className="text-xs text-muted-foreground">
        Choose a unique username for your account
      </span>
    </div>
  ),
};
