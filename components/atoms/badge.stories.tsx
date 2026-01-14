import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

/**
 * Badge Component (Atom)
 * 
 * The Badge component is used to display small pieces of information like
 * status indicators, counts, or labels. It's a simple, standalone element.
 * 
 * **Atomic Design Level:** Atom
 * - Basic UI element for displaying tags and status
 * - No dependencies on other components
 * - Highly reusable for various contexts
 */
const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A badge component for displaying status, counts, or labels. Part of the Atomic Design atoms layer.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default badge
 */
export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

/**
 * Multiple badges showcase
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge className="bg-green-500 text-white">Success</Badge>
      <Badge className="bg-yellow-500 text-black">Warning</Badge>
      <Badge className="bg-red-500 text-white">Error</Badge>
      <Badge className="bg-blue-500 text-white">Info</Badge>
    </div>
  ),
};

/**
 * Badge with count
 */
export const WithCount: Story = {
  args: {
    children: '99+',
  },
};

/**
 * Status badges
 */
export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-green-500 text-white">Active</Badge>
      <Badge className="bg-yellow-500 text-black">Pending</Badge>
      <Badge className="bg-red-500 text-white">Inactive</Badge>
      <Badge className="bg-gray-500 text-white">Draft</Badge>
    </div>
  ),
};
