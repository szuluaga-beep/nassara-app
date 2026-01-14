import type { Meta, StoryObj } from '@storybook/react';
import { Field, FieldLabel, FieldDescription, FieldError, FieldGroup, FieldContent } from './field';
import { Input } from '../atoms/input';

/**
 * Field Component (Molecule)
 * 
 * The Field component combines labels, inputs, descriptions, and error messages
 * to create complete form field structures. It demonstrates how atoms work together.
 * 
 * **Atomic Design Level:** Molecule
 * - Combines Label, Input, and text elements
 * - Provides structured form field layout
 * - Handles field states and orientations
 */
const meta = {
  title: 'Molecules/Field',
  component: Field,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A complete form field component that combines label, input, description, and error message. Part of the Atomic Design molecules layer.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic field with label and input
 */
export const Default: Story = {
  render: () => (
    <div className="w-[350px]">
      <Field>
        <FieldLabel htmlFor="email">Email Address</FieldLabel>
        <Input id="email" type="email" placeholder="you@example.com" />
      </Field>
    </div>
  ),
};

/**
 * Field with description
 */
export const WithDescription: Story = {
  render: () => (
    <div className="w-[350px]">
      <Field>
        <FieldLabel htmlFor="username">Username</FieldLabel>
        <FieldDescription>
          Choose a unique username for your account. This will be visible to others.
        </FieldDescription>
        <Input id="username" placeholder="johndoe" />
      </Field>
    </div>
  ),
};

/**
 * Field with error message
 */
export const WithError: Story = {
  render: () => (
    <div className="w-[350px]">
      <Field data-invalid="true">
        <FieldLabel htmlFor="password">Password</FieldLabel>
        <Input id="password" type="password" aria-invalid="true" />
        <FieldError>Password must be at least 8 characters long</FieldError>
      </Field>
    </div>
  ),
};

/**
 * Field with description and error
 */
export const WithDescriptionAndError: Story = {
  render: () => (
    <div className="w-[350px]">
      <Field data-invalid="true">
        <FieldLabel htmlFor="email-error">Email Address</FieldLabel>
        <FieldDescription>
          We'll never share your email with anyone else.
        </FieldDescription>
        <Input id="email-error" type="email" aria-invalid="true" defaultValue="invalid-email" />
        <FieldError>Please enter a valid email address</FieldError>
      </Field>
    </div>
  ),
};

/**
 * Horizontal field orientation
 */
export const Horizontal: Story = {
  render: () => (
    <div className="w-[500px]">
      <Field orientation="horizontal">
        <FieldLabel htmlFor="name-horizontal" className="min-w-[120px]">
          Full Name
        </FieldLabel>
        <Input id="name-horizontal" placeholder="John Doe" />
      </Field>
    </div>
  ),
};

/**
 * Multiple fields in a group
 */
export const FieldGroupExample: Story = {
  render: () => (
    <div className="w-[400px]">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="first-name">First Name</FieldLabel>
          <Input id="first-name" placeholder="John" />
        </Field>
        
        <Field>
          <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
          <Input id="last-name" placeholder="Doe" />
        </Field>
        
        <Field>
          <FieldLabel htmlFor="email-group">Email</FieldLabel>
          <FieldDescription>
            We'll use this to send you important updates.
          </FieldDescription>
          <Input id="email-group" type="email" placeholder="john.doe@example.com" />
        </Field>
      </FieldGroup>
    </div>
  ),
};

/**
 * Complete form example
 */
export const CompleteForm: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      <Field>
        <FieldLabel htmlFor="form-name">Full Name</FieldLabel>
        <Input id="form-name" placeholder="Enter your full name" />
      </Field>
      
      <Field>
        <FieldLabel htmlFor="form-email">Email</FieldLabel>
        <FieldDescription>
          Your email address will be used for account recovery.
        </FieldDescription>
        <Input id="form-email" type="email" placeholder="you@example.com" />
      </Field>
      
      <Field data-invalid="true">
        <FieldLabel htmlFor="form-password">Password</FieldLabel>
        <FieldDescription>
          Must be at least 8 characters with one uppercase letter and one number.
        </FieldDescription>
        <Input id="form-password" type="password" aria-invalid="true" />
        <FieldError>Password is too weak</FieldError>
      </Field>
      
      <Field>
        <FieldLabel htmlFor="form-bio">Bio</FieldLabel>
        <FieldDescription>
          Tell us a little bit about yourself (optional).
        </FieldDescription>
        <Input id="form-bio" placeholder="I'm a developer..." />
      </Field>
    </div>
  ),
};
