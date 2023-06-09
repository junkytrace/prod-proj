import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "./Button";
import 'app/styles/index.scss';

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    backgroundsColor: { control: "color" },
  },
} 

export default meta;

type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR

  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: ThemeButton.OUTLINE
  },
};
