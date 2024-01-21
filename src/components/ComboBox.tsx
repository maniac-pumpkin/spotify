import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { CheckIcon } from "../icons/BoxIcons";

function ComboBox() {
  const [showCombo, setShowCombo] = useState(false);

  return (
    <div className="relative w-full">
      <Input
        type="search"
        variant="classic"
        label="Playlist name"
        placeholder="Search..."
        autoComplete="off"
        onFocus={() => setShowCombo(true)}
        onBlur={() => setShowCombo(false)}
      />
      {showCombo && (
        <section className="mt-1 flex h-10 flex-col gap-2 overflow-y-scroll rounded-md bg-slateGray p-2">
          {Array.from({ length: 20 }, (_, i) => (
            <Button
              type="button"
              shape="transparent"
              className="justify-between text-pureWhite"
              fullWidth
              key={i + 1}
            >
              {i + 1} - Song
              <CheckIcon className="fill-pureWhite" />
            </Button>
          ))}
        </section>
      )}
    </div>
  );
}

export default ComboBox;
