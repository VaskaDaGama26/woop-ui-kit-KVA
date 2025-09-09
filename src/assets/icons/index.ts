import Arrow from "./Arrow";
import Check from "./Check";
import Close from "./Close";
import Comment from "./Comment";
import Delete from "./Delete";
import Filter from "./Filter";
import Heart from "./Heart";
import Minus from "./Minus";
import Plus from "./Plus";
import Send from "./Send";
import Star from "./Star";

export const IconityIcons = {
  Arrow,
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
};

export default IconityIcons;

export type IconName = keyof typeof IconityIcons;
