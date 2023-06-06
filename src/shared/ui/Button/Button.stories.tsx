import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button, { ThemeButton } from "./Button";
import { Template } from "webpack";
import { classNames } from "shared/lib/classNames/classNames";

const meta = {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = Template.bind({});
Primary.args = {
  children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
  children: "Text",
  theme: ThemeButton.CLEAR,
};
