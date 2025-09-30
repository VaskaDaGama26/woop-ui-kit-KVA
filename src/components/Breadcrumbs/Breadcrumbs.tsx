import ChevronRight from "../../assets/icons/ChevronRight";
import "./Breadcrumbs.css";
import type { BreadcrumbsProps } from "./types";
import { stateTokens } from "../../variables/components/Breadcrumbs/stateTokens";

export const Breadcrumbs = ({
  items,
  separator,
  className,
}: BreadcrumbsProps) => {
  const Separator = separator ?? (
    <ChevronRight fillPath="#7C7B7B" width="16" height="16" />
  );
  const { last, notLast } = stateTokens;

  return (
    <nav
      aria-label="Breadcrumb"
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center" }}
          >
            {!isLast && item.href ? (
              <a
                href={item.href}
                style={{
                  ...notLast.typography,
                  color: notLast.color,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.textDecoration = "underline")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.textDecoration = "none")
                }
              >
                {item.label}
              </a>
            ) : (
              <span
                style={{
                  ...last.typography,
                  color: last.color,
                }}
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}

            {!isLast && (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "8px",
                }}
              >
                {Separator}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
