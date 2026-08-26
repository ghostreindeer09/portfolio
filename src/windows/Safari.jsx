import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Search,
  ShieldHalf,
  Share,
  Plus,
} from "lucide-react";
import WindowControls from "./WindowControls";
import { blogPosts } from "#constants";

const Safari = () => {
  return (
    <div>
      <div id="window-header" className="flex h-10 items-center px-2">
        <WindowControls className="-ml-1" target="safari" />

        <PanelLeft className="panel-icon" size={16} />

        <div className="ml-5 flex items-center gap-1">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>

        <div className="flex flex-1 items-center justify-center gap-3">
          <ShieldHalf className="icon" />

          <div className="search flex flex-1 items-center">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="px-4 pt-5">
        <h2 className="text-2xl font-semibold tracking-tight">
          Papers published by me
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Research, publications, and ongoing work
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 p-4">
        {blogPosts.map(({ id, image, title, date, orcid }) => (
          <div
            key={id}
            className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Paper image */}
            <div className="relative overflow-hidden">
              <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur">
                {date}
              </span>
            </div>

            {/* Content */}
            <div className="space-y-3 p-5">
              <h3 className="text-lg font-semibold leading-snug">
                {title}
              </h3>

              <p className="text-sm text-gray-500">
                Research paper · Steganalysis
              </p>

              <p className="text-sm font-medium text-gray-400">
  Paper coming soon
</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;