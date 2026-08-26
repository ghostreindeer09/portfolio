import WindowControls from "./WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
      </div>

      <div className="bg-white w-full h-full">
        <iframe
          src="/files/resume.pdf"
          title="Resume"
          className="w-full h-full border-0"
        />
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;