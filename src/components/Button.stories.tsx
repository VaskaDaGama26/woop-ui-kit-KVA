import Button from "./Button";
import "../styles/globals.css";

export default {
  title: "Design System/Molecules/Button",
  component: Button,
  tags: ["autodocs"],
};

export const Default = {
  storyName: "States/Default",
  args: {
    size: "M",
    children: "Action",
    state: "default",
  },
};
export const Hovered = {
  storyName: "States/Hovered",
  args: {
    size: "M",
    children: "Action",
    state: "hover",
  },
};
export const Clicked = {
  storyName: "States/Clicked",
  args: {
    size: "M",
    children: "Action",
    state: "click",
  },
};
export const Focused = {
  storyName: "States/Focused",
  args: {
    size: "M",
    children: "Action",
    state: "focus",
  },
};
export const Disabled = {
  storyName: "States/Disabled",
  args: {
    size: "M",
    children: "Action",
    state: "disabled",
  },
};

export const Small = {
  storyName: "Sizes/Small",
  args: {
    size: "S",
    children: "Action",
    state: "default",
  },
};
export const Medium = {
  storyName: "Sizes/Medium",
  args: {
    size: "M",
    children: "Action",
    state: "default",
  },
};
export const Large = {
  storyName: "Sizes/Large",
  args: {
    size: "L",
    children: "Action",
    state: "default",
  },
};
