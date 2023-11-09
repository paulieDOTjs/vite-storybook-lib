import { Button, ButtonProps } from "@lib";
import type { Meta, StoryFn } from "@storybook/react";

const ButtonMeta: Meta = {
  title: "Components/Button",
  component: Button,
};

const Template: StoryFn<typeof Button> = (args: ButtonProps) => {
  return <Button {...args}>Label</Button>;
};

export const BuildYourOwn: Meta = Template.bind({});
BuildYourOwn.parameters = { docs: { source: { state: "open" } } };

export const IsCool: Meta = Template.bind({});
IsCool.args = { isCool: true };

export const IsNotCool: Meta = Template.bind({});
IsNotCool.args = { isCool: false };

export default ButtonMeta;
