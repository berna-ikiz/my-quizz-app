import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  color?: string;
  size: number;
};

export const HomeIcon = ({ color = "#F8F8FF", size }: Props) => (
  <MaterialIcons name="home" size={size} color={color} />
);
export const RetryIcon = ({ color = "#F8F8FF", size }: Props) => (
  <MaterialIcons name="replay" size={size} color={color} />
);
export const HintIcon = ({ color = "#F8F8FF", size }: Props) => (
  <MaterialIcons name="lightbulb-outline" size={size} color={color} />
);
export const CheckIcon = ({ color = "#F8F8FF", size }: Props) => (
  <MaterialIcons name="check-box" size={size} color={color} />
);
export const BackIcon = ({ color = "#F8F8FF", size }: Props) => (
  <MaterialIcons name="arrow-back" size={size} color={color} />
);
export const CheckBoxOutlineBlank = ({ color = "#F8F8FF", size }: Props) => (
  <MaterialIcons name="check-box-outline-blank" size={size} color={color} />
);
