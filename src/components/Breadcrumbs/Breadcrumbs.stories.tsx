import Breadcrumbs from "./Breadcrumbs";
import "@styles/globals.css";
import type { BreadcrumbItem } from "./types";

export default {
  title: "Design System/Molecules/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
};

const breadcrumbExample: BreadcrumbItem[] = [
  { label: "Главная", href: "/" },
  { label: "Каталог", href: "/catalog" },
  {
    label: "Ноутбуки",
    href: "/catalog/laptops",
  },
  {
    label: "Игровые ноутбуки",
    href: "/catalog/laptops/gaming",
  },
  {
    label: "Acer",
    href: "/catalog/laptops/gaming/acer",
  },
  {
    label: "Predator Series",
    href: "/catalog/laptops/gaming/acer/predator",
  },
  { label: "Predator Helios 300" },
];

export const Default = () => {
  return (
    <Breadcrumbs
      items={[
        { label: "Главная", href: "/" },
        { label: "Блог", href: "/blog" },
        { label: "Статья" },
      ]}
    />
  );
};

export const ManyCrumbs = () => {
  return <Breadcrumbs items={breadcrumbExample} />;
};
