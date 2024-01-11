import { useLocation } from "wouter";
import { useState, ComponentType } from "react";
import { Ticon } from "../icons/BoxIcons";

type TsideButton = {
  text: string;
  to?: string;
  enabled?: boolean;
  Icon: ComponentType<Ticon>;
};

function SideButton({ Icon, text, enabled, to }: TsideButton) {
  const [hover, setHover] = useState(false);
  const [, setLocation] = useLocation();

  return (
    <div
      className="flex cursor-pointer items-center"
      onClick={() => setLocation(to ? to : "")}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {
        <Icon
          size={35}
          className={
            hover
              ? "fill-pureWhite"
              : enabled
                ? "fill-pureWhite"
                : "fill-silverGray"
          }
        />
      }
      <span
        className={`ml-2 text-lg transition ${
          hover
            ? "text-pureWhite"
            : enabled
              ? "text-pureWhite"
              : "text-silverGray"
        }`}
      >
        {text}
      </span>
    </div>
  );
}

export default SideButton;
