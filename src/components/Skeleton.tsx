type TsongPreSkeleton = {
  quantity: number;
  type: "songPreview_mini" | "songPreview_normal" | "playlist";
};

function Skeleton({ type, quantity }: TsongPreSkeleton) {
  if (type === "playlist")
    return Array.from({ length: quantity }, (_, i) => (
      <div className="flex animate-pulse items-center gap-2" key={i + 1}>
        <div className="h-4 w-4 rounded-md bg-slateGray"></div>
        <div className="h-1.4 w-8 rounded-md bg-slateGray"></div>
      </div>
    ));

  if (type === "songPreview_mini")
    return Array.from({ length: quantity }, (_, i) => (
      <div className="flex animate-pulse items-center gap-2" key={i + 1}>
        <div className="h-5 w-5 rounded-md bg-slateGray"></div>
        <div>
          <div className="mb-1 h-2 w-10 bg-slateGray"></div>
          <div className="h-1 w-5 bg-slateGray"></div>
        </div>
      </div>
    ));

  if (type === "songPreview_normal")
    return Array.from({ length: quantity }, (_, i) => (
      <div
        className="flex h-20 w-full animate-pulse flex-col rounded-md bg-gunMetalBlack p-2 sm:h-25 md:h-20 lg:h-18 xl:h-20 min-[1200px]:h-25"
        key={i + 1}
      >
        <div className="w-full grow rounded-md bg-slateGray"></div>
        <div className="my-1 h-2 bg-slateGray"></div>
        <div className="h-2 bg-slateGray"></div>
      </div>
    ));
}

export default Skeleton;
