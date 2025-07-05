import Project from "@/components/project";

export default function Projects() {
  return (
    <div className="min-h-screen bg-zinc-900 flex flex-wrap justify-center gap-8 sm:gap-18 pt-10 pb-10">
      <Project
        image={"/breezy-forecast.jpeg"}
        name={"BreezyForecast"}
        github={"https://github.com/Kleb-0/Breezy-Forecast"}
        deploy={"https://breezy-forecast.vercel.app"} />
      <Project
        image={"/under-construction.png"}
        name={"Wriditt"}
        github={""}
        deploy={""} />
    </div>
  );
}
