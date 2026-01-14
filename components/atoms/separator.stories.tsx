import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

/**
 * Separator Component (Atom)
 * 
 * The Separator component provides a visual divider to separate content sections.
 * It can be rendered horizontally or vertically depending on the layout needs.
 * 
 * **Atomic Design Level:** Atom
 * - Basic visual element for content separation
 * - No dependencies on other components
 * - Simple and reusable
 */
const meta = {
  title: 'Atoms/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A visual separator component for dividing content. Part of the Atomic Design atoms layer.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Horizontal separator (default)
 */
export const Horizontal: Story = {
  render: () => (
    <div className="w-[400px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Section 1</h4>
        <p className="text-sm text-muted-foreground">Content above the separator</p>
      </div>
      <Separator className="my-4" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Section 2</h4>
        <p className="text-sm text-muted-foreground">Content below the separator</p>
      </div>
    </div>
  ),
};

/**
 * Vertical separator
 */
export const Vertical: Story = {
  render: () => (
    <div className="flex h-[100px] items-center space-x-4">
      <div className="text-sm">
        <h4 className="font-medium">Left Content</h4>
        <p className="text-muted-foreground">Section 1</p>
      </div>
      <Separator orientation="vertical" />
      <div className="text-sm">
        <h4 className="font-medium">Right Content</h4>
        <p className="text-muted-foreground">Section 2</p>
      </div>
    </div>
  ),
};

/**
 * In a list
 */
export const InList: Story = {
  render: () => (
    <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Item 1</h4>
        <p className="text-sm text-muted-foreground">Description for item 1</p>
      </div>
      <Separator className="my-2" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Item 2</h4>
        <p className="text-sm text-muted-foreground">Description for item 2</p>
      </div>
      <Separator className="my-2" />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Item 3</h4>
        <p className="text-sm text-muted-foreground">Description for item 3</p>
      </div>
    </div>
  ),
};
