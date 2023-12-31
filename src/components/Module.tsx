import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";

import { useStore } from "../zustand-store";

import { Lesson } from "./Lesson";

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

export function Module({ title, amountOfLessons, moduleIndex }: ModuleProps) {
  const { currentLessonIndex, currentModuleIndex, lessons, play } = useStore(
    (state) => {
      return {
        currentLessonIndex: state.currentLessonIndex,
        currentModuleIndex: state.currentModuleIndex,
        play: state.play,
        lessons: state.course?.modules[moduleIndex].lessons,
      };
    }
  );

  return (
    <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-xs">
          {moduleIndex + 1}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sx">{title}</strong>
          <span className="text-sx text-zinc-400">{amountOfLessons} Aulas</span>
        </div>

        <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {lessons &&
            lessons.map((lesson, lessonIndex) => {
              const isCurrent =
                currentModuleIndex === moduleIndex &&
                currentLessonIndex === lessonIndex;

              return (
                <Lesson
                  key={lesson.id}
                  title={lesson.title}
                  duration={lesson.duration}
                  onPlay={() => play([moduleIndex, lessonIndex])}
                  isCurrent={isCurrent}
                />
              );
            })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
