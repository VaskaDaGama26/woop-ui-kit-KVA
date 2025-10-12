import Arrow from "./Arrow";
import ChevronRight from "./ChevronRight";
import Check from "./Check";
import Close from "./Close";
import Comment from "./Comment";
import Delete from "./Delete";
import Filter from "./Filter";
import Heart from "./Heart";
import Minus from "./Minus";
import Moon from "./Moon";
import Plus from "./Plus";
import Send from "./Send";
import Star from "./Star";
import Sun from "./Sun";
import User from "./User";

export { default as Arrow } from "./Arrow";
export { default as ChevronRight } from "./ChevronRight";
export { default as Plus } from "./Plus";
export { default as Star } from "./Star";
export { default as Check } from "./Check";
export { default as Close } from "./Close";
export { default as Comment } from "./Comment";
export { default as Delete } from "./Delete";
export { default as Filter } from "./Filter";
export { default as Heart } from "./Heart";
export { default as Minus } from "./Minus";
export { default as Send } from "./Send";
export { default as Sun } from "./Sun";
export { default as Moon } from "./Moon";
export { default as User } from "./User";

export const IconityIcons = {
  Arrow,
  ChevronRight,
  Check,
  Close,
  Comment,
  Delete,
  Filter,
  Heart,
  Minus,
  Plus,
  Send,
  Star,
  Sun,
  Moon,
  User,
};
export default IconityIcons;

export type IconName = keyof typeof IconityIcons;
