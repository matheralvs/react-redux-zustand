import { useCurrentLesson, useStore } from "../zustand-store";

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson();

  const isLoading = useStore((state) => state.isLoading);

  if (isLoading) {
    return (
      <div>
        <div className="h-[56px] w-[190px] animate-pulse rounded-md bg-zinc-900" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span className="text-sm text-zinc-400">
        Módulo: "{currentModule?.title}"
      </span>
    </div>
  );
}
