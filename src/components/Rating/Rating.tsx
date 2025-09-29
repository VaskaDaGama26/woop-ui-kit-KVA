import { useState } from "react";
import Star from "../../assets/icons/Star";
import type { RatingProps } from "./types";
import { stateTokens } from "../../variables/components/Rating/stateTokens";

const Rating = ({ count, size = 16 }: RatingProps) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const starsCount = Math.max(0, Math.min(5, count));

  return (
    <div style={{ display: "flex", gap: 8, width: "fit-content" }}>
      {Array.from({ length: 5 }).map((_, index) => {
        const isFilled = index < starsCount;
        const isHover = hoverIndex !== null && index <= hoverIndex;

        return (
          <Star
            style={{
              cursor: "pointer",
            }}
            key={index}
            fillPath={
              isHover
                ? stateTokens.hover
                : isFilled
                ? stateTokens.active
                : stateTokens.inactive
            }
            fillIcon={
              isHover
                ? stateTokens.hover
                : isFilled
                ? stateTokens.active
                : stateTokens.inactive
            }
            width={`${size}`}
            height={`${size}`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          />
        );
      })}
    </div>
  );
};

export default Rating;
