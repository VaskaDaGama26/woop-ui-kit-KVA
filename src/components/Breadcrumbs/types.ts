export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
};
