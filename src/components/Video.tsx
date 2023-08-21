import ReactPlayer from "react-player";

import { Loader } from "lucide-react";
import { useCurrentLesson, useStore } from "../zustand-store";

export function Video() {
  const { isLoading, next } = useStore((state) => {
    return {
      isLoading: state.isLoading,
      next: state.next,
    };
  });
  const { currentLesson } = useCurrentLesson();

  function handlePlayNextLesson() {
    next();
  }

  return (
    <div className="aspect-video w-full bg-zinc-950">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="h-6 w-6 animate-spin text-zinc-400" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          url={`https://youtube.com/watch?v=${currentLesson?.id}`}
          onEnded={handlePlayNextLesson}
        />
      )}
    </div>
  );
}
