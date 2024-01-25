type Twarning = {
  text: string;
};

function Warning({ text }: Twarning) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className="font-bold text-xl">{text}</span>
    </div>
  );
}

export default Warning;
