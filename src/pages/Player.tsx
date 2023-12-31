import { useEffect } from "react";

import { MessageCircle } from "lucide-react";

import { Header } from "../components/Header";
import { Video } from "../components/Video";
import { Module } from "../components/Module";
import { useCurrentLesson, useStore } from "../zustand-store";

export function Player() {
  const { course, isLoading, load } = useStore((state) => {
    return {
      course: state.course,
      isLoading: state.isLoading,
      load: state.load,
    };
  });

  const { currentLesson } = useCurrentLesson();

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (currentLesson) {
      document.title = `Assistindo: ${currentLesson.title}`;
    }
  }, [currentLesson]);

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950 text-zinc-50">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          {isLoading ? (
            <div className="h-[36px] w-[158px] animate-pulse rounded-md bg-zinc-900" />
          ) : (
            <button className="flex items-center gap-2 rounded-md bg-violet-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-600">
              <MessageCircle className="h-4 w-4" />
              Deixar feedback
            </button>
          )}
        </div>

        <main
          data-loading={isLoading}
          className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 pr-80 shadow data-[loading=true]:animate-pulse"
        >
          <div className="flex-1">
            <Video />
          </div>

          <aside className="divide-zinc-7 absolute bottom-0 right-0 top-0 w-80 divide-y-2 divide-zinc-900 overflow-y-scroll border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-violet-500">
            {course?.modules &&
              course?.modules.map((module, index) => {
                return (
                  <Module
                    key={module.id}
                    moduleIndex={index}
                    title={module.title}
                    amountOfLessons={module.lessons.length}
                  />
                );
              })}
          </aside>
        </main>
      </div>
    </div>
  );
}
