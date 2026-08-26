import WindowControls from "./WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "../stores/window";

const TextFile = () => {
  const { windows } = useWindowStore();

  const file = windows.txtfile?.data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />

        <h2 className="text-sm font-medium">
          {file?.name || "Text File"}
        </h2>
      </div>

      <div className="bg-white h-full overflow-auto p-8">
  {file?.image && (
    <div className="flex justify-center mb-8">
      <img
        src={file.image}
        alt={file.name}
        className="w-48 h-48 object-cover rounded-xl"
      />
    </div>
  )}

  <h1 className="text-2xl font-semibold mb-6">
    {file?.subtitle || file?.name}
  </h1>

  <div className="space-y-4 text-sm leading-7 text-gray-700">
    <div className="text-sm leading-7 text-gray-700">
  {file?.description?.join(" ")}
</div>
  </div>
</div>
    </>
  );
};

const TextFileWindow = WindowWrapper(TextFile, "txtfile");

export default TextFileWindow;