export default function Error({
  error,
  style,
}: {
  error: Error;
  style: string;
}) {
  return (
    <div
      className={`${style} bg-neutral-200/50 border border-neutral-300 rounded-lg flex justify-center items-center text-[1rem] text-red-500 font-bold`}
    >
      {error.message}
    </div>
  );
}
