import { useState, PropsWithChildren, Dispatch } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import Input from "./Input";

interface IcomboBox extends PropsWithChildren {
  inputSearchFn: Dispatch<React.SetStateAction<string>>;
  inputValue: string;
}

function ComboBox({ children, inputSearchFn, inputValue }: IcomboBox) {
  const [showCombo, setShowCombo] = useState(false);
  const comboBoxRef = useOutsideClick<HTMLDivElement>(() =>
    setShowCombo(false),
  );

  return (
    <div className="relative w-full" ref={comboBoxRef}>
      <Input
        type="search"
        variant="classic"
        label="Playlist songs"
        placeholder="Search..."
        autoComplete="off"
        value={inputValue}
        onFocus={() => setShowCombo(true)}
        onInput={(e) => inputSearchFn(e.currentTarget.value)}
      />
      {showCombo && (
        <section className="mt-1 flex h-10 flex-col gap-2 overflow-y-scroll rounded-md bg-slateGray p-2">
          {children}
        </section>
      )}
    </div>
  );
}

export default ComboBox;
