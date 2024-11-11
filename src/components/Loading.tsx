export default function Loading({ style }: { style: string }) {
  return (
    <div
      className={`${style} bg-neutral-200/50 border border-neutral-300 rounded-lg flex justify-center items-center text-[2rem] text-neutral-700 font-bold animate-pulse`}
    >
      Loading...
    </div>
  );
}
