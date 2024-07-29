import { createButton } from "./Button";

export default {
  title: "General/Buttons",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/design/w6S7R8OleB1I3y9Wv51UTA/%E2%9D%96-VCF---Untitled-UI-%E2%80%93-PRO-(v3.1)?node-id=10356-2882&t=Gd4tHyVKXRQQkMsF-1",
    },
  },
  argTypes: {
    label: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "tertiary"],
    },
    backgroundColor: {
      control: "text", // Allows both HEX and Tailwind classes
    },
    textColor: {
      control: "text", // Allows both HEX and Tailwind classes
    },
    hoverBackgroundColor: {
      control: "text", // Allows both HEX and Tailwind classes
    },
    onClick: { action: "clicked" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    border: {
      control: { type: "select" },
      options: ["border", "border-2", "border-4", "border-8"],
    },
    borderRadius: {
      control: { type: "select" },
      options: [
        "rounded-none",
        "rounded-sm",
        "rounded",
        "rounded-md",
        "rounded-lg",
        "rounded-xl",
        "rounded-2xl",
        "rounded-3xl",
        "rounded-full",
      ],
    },
  },
};

const Template = (args) => {
  const button = createButton({ ...args });
  return button;
};

// Default Button
export const Default = Template.bind({});
Default.args = {
  variant: "default",
  size: "medium",
  label: "Button", // Default label
  border: "border",
  textColor: "text-black",
  borderRadius: "rounded-md",
  backgroundColor: "",
  hoverBackgroundColor: "", // Default empty
};

// Primary Button
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "medium",
  label: "Primary Button",
  border: "border",
  textColor: "text-white",
  borderRadius: "rounded-lg",
  backgroundColor: "", // Default empty
  hoverBackgroundColor: "", // Default empty
};
Primary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/design/w6S7R8OleB1I3y9Wv51UTA/%E2%9D%96-VCF---Untitled-UI-%E2%80%93-PRO-(v3.1)?node-id=10356-2884&t=Gd4tHyVKXRQQkMsF-1",
  },
};

// Secondary Button
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "medium",
  label: "Secondary Button",
  border: "border",
  textColor: "text-gray-800",
  borderRadius: "rounded-md",
  backgroundColor: "", // Default empty
  hoverBackgroundColor: "", // Default empty
};
Secondary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/design/w6S7R8OleB1I3y9Wv51UTA/%E2%9D%96-VCF---Untitled-UI-%E2%80%93-PRO-(v3.1)?node-id=10356-2883&t=Gd4tHyVKXRQQkMsF-1",
  },
};

// Tertiary Button
export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  size: "medium",
  label: "Tertiary Button",
  border: "border",
  borderRadius: "rounded-md",
  textColor: "text-white",
  backgroundColor: "", // Default empty
  hoverBackgroundColor: "", // Default empty
};
Tertiary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/design/w6S7R8OleB1I3y9Wv51UTA/%E2%9D%96-VCF---Untitled-UI-%E2%80%93-PRO-(v3.1)?node-id=10356-2881&t=Gd4tHyVKXRQQkMsF-1",
  },
};
