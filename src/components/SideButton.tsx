import { Link } from "wouter";
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

  return (
    <Link
      className="flex cursor-pointer items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      to={to ? to : ""}
    >
      <Icon
        className={`h-3.5 w-3.5 ${
          hover
            ? "fill-pureWhite"
            : enabled
              ? "fill-pureWhite"
              : "fill-silverGray"
        }`}
      />
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
    </Link>
  );
}

export default SideButton;
