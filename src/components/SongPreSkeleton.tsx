type TsongPreSkeleton = {
  quantity: number;
  type: "mini" | "normal";
};

function SongPreSkeleton({ type, quantity }: TsongPreSkeleton) {
  if (type === "mini")
    return Array.from({ length: quantity }, (_, i) => (
      <div className="flex animate-pulse items-center gap-2" key={i + 1}>
        <div className="h-5 w-5 rounded-md bg-slateGray"></div>
        <div>
          <div className="mb-1 h-2 w-10 bg-slateGray"></div>
          <div className="h-1 w-5 bg-slateGray"></div>
        </div>
      </div>
    ));

  if (type === "normal")
    return Array.from({ length: quantity }, (_, i) => (
      <div
        className="flex h-20 w-full animate-pulse flex-col rounded-md bg-gunMetalBlack p-2 lg:h-25 xl:h-30"
        key={i + 1}
      >
        <div className="w-full grow rounded-md bg-slateGray"></div>
        <div className="my-1 h-2 bg-slateGray"></div>
        <div className="h-2 bg-slateGray"></div>
      </div>
    ));
}

export default SongPreSkeleton;
