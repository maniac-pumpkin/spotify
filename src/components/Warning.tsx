type Twarning = {
  text: string;
  center?: boolean;
};

function Warning({ text, center }: Twarning) {
  const centerClass =
    "absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]";
  const regularClass = "w-full h-full flex items-center justify-center";

  return (
    <div className={`max-w-lg ${center ? centerClass : regularClass}`}>
      <span className="text-center font-bold text-xl">{text}</span>
    </div>
  );
}

export default Warning;
