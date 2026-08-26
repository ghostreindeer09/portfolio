import { locations } from "#constants";
import useWindowStore from "#stores/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const projects = locations.work?.children ?? [];

const Home = () => {
  const { openWindow } = useWindowStore();

  const handleOpenProjectFinder = (project) => {
    openWindow("finder", project);
  };

  useGSAP(() => {
    gsap.utils.toArray(".folder").forEach((folder, index) => {
      const project = projects[index];

      gsap.set(folder, {
        x: project.windowPosition?.x ?? index * 150,
        y: project.windowPosition?.y ?? 100,
      });

      Draggable.create(folder);
    });
  }, []);

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            className={clsx("group folder")}
            onDoubleClick={() => handleOpenProjectFinder(project)}
          >
            <img
              src="/images/folder.png"
              alt={project.name}
            />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;