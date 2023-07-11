import ReactPlayer from "react-player";

export function Video() {
  return (
    <div className="aspect-video w-full bg-zinc-950">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url="https://youtube.com/watch?v=QH2-TGUlwu4"
      />
    </div>
  );
}
