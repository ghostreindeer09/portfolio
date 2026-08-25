import { Check } from "lucide-react";
import WindowWrapper from "../hoc/WindowWrapper";
import { techStack } from "../constants";
import WindowControls from "./WindowControls";
const Terminal = () => {
  return (
    <>
      {/* Terminal Header */}
      <div id="window-header">
       <WindowControls target = "terminal"></WindowControls>

        <h2 className="font-mono text-sm font-semibold text-gray-500">
          rishit@portfolio:~$ tech-stack
        </h2>
      </div>

      <div className="w-full font-mono text-xs text-gray-800">
        {/* Terminal Prompt */}
        <div className="mb-4 flex items-center gap-2">
          <span className="font-semibold text-green-600">
            rishit@portfolio:~$
          </span>

          <span>cat tech-stack</span>

          <span className="ml-1 h-3.5 w-1.5 animate-pulse bg-gray-700" />
        </div>

        {/* Title */}
        <div className="mb-4">
          <div className="text-sm font-semibold">
            @rishit's tech stack
          </div>

          <div className="mt-4 border-b border-dashed border-gray-300" />
        </div>

        {/* Column Header */}
        <div className="mb-3 grid grid-cols-[150px_minmax(0,1fr)] gap-4 border-b border-dashed border-gray-300 pb-3 text-gray-500">
          <div>Category</div>
          <div>Technologies</div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-2.5">
          {techStack.map((stack) => (
            <div
              key={stack.category}
              className="grid grid-cols-[150px_minmax(0,1fr)] items-start gap-4"
            >
              {/* Category */}
              <div className="flex items-start gap-2">
                <Check
                  size={14}
                  strokeWidth={2.5}
                  className="mt-0.5 shrink-0 text-green-500"
                />

                <span className="whitespace-nowrap font-semibold text-green-600">
                  {stack.category}
                </span>
              </div>

              {/* Technologies */}
              <div className="flex min-w-0 flex-wrap gap-x-5 gap-y-1.5">
                {stack.items.map((tech) => (
                  <span
                    key={tech}
                    className="whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-4 border-t border-dashed border-gray-300 pt-2">
          <div className="text-[10px] italic text-gray-400">
            7 of 7 skills loaded successfully (100%)
          </div>

          <div className="mt-1 flex items-center gap-1 text-[10px] text-gray-500">
            <span className="text-green-600">✓</span>
            Process completed in 6ms
          </div>
        </div>

        {/* Bottom Prompt */}
        <div className="mt-2 flex items-center gap-2 text-xs">
          <span className="font-semibold text-green-600">
            rishit@portfolio:~$
          </span>

          <span className="h-3.5 w-1.5 animate-pulse bg-gray-700" />
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;