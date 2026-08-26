import { Search } from "lucide-react";
import WindowControls from "./WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "../stores/location";
import { locations } from "../constants";
import clsx from "clsx";
import useWindowStore from "../stores/window";

const Finder = () => {
    const { openWindow } = useWindowStore();
  const {
    activeLocation,
    setActiveLocation,
    goBack,
    history,
  } = useLocationStore();

 const openItem = (item) => {
  // PDF → open Resume window
  if (item.fileType === "pdf") {
    openWindow("resume", item);
    return;
  }

  // Link → open external URL
  if (item.kind === "link" && item.href) {
    window.open(item.href, "_blank", "noopener,noreferrer");
    return;
  }

  // Files → open the appropriate file window
  if (item.kind === "file") {
    openWindow(`${item.fileType}${item.kind}`, item);
    return;
  }

  console.log("Unknown item:", item);
};
  const renderList = (items = []) =>
    items.map((item) => (
      <li
        key={item.id}
        onClick={() => {
          if (item.kind === "folder") {
            setActiveLocation(item);
          }
        }}
        className={clsx(
          "flex items-center gap-3 px-3 py-1.5 rounded-md cursor-pointer transition-colors",
          item.id === activeLocation?.id
            ? "bg-gray-200"
            : "hover:bg-gray-100"
        )}
      >
        <img
          src={item.icon}
          className="w-4"
          alt={item.name}
        />

        <p className="text-sm font-medium truncate">
          {item.name}
        </p>
      </li>
    ));

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon ml-auto" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favorites</h3>

            <ul>
              {renderList(Object.values(locations))}
            </ul>
          </div>

          <div>
            <h3>My Projects</h3>

            <ul>
              {renderList(locations?.work?.children)}
            </ul>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          {/* Navigation bar */}
          <div className="flex items-center gap-3 px-4 py-2 border-b">
            <button
              onClick={goBack}
              disabled={history.length === 0}
              className="px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-30"
            >
              ←
            </button>

            <span className="text-sm font-medium">
              {activeLocation?.name}
            </span>
          </div>

          {/* Files / folders */}
          <ul className="flex-1 grid grid-cols-2 gap-8 p-6">
            {activeLocation?.children?.map((item) => (
              <li
                key={item.id}
                onDoubleClick={() => openItem(item)}
                className="flex flex-col items-center text-center cursor-pointer"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-20 h-20 object-contain"
                />

                <p className="mt-2 text-sm">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;