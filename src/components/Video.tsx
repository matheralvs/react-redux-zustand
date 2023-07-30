import ReactPlayer from "react-player";

import { useAppDispatch, useAppSelector } from "../store";
import { next, useCurrentLesson } from "../store/slices/player";
import { Loader } from "lucide-react";

export function Video() {
  const dispatch = useAppDispatch();

  const { currentLesson } = useCurrentLesson();
  const isCourseLoading = useAppSelector((state) => state.player.isLoading);

  function handlePlayNextLesson() {
    dispatch(next());
  }

  return (
    <div className="aspect-video w-full bg-zinc-950">
      {isCourseLoading ? (
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
