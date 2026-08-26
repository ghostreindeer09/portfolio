import WindowControls from "./WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "../stores/window";

const ImageFile = () => {
  const { windows } = useWindowStore();

  const file = windows.imgfile?.data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />

        <h2 className="text-sm font-medium">
          {file?.name || "Image"}
        </h2>
      </div>

      <div className="bg-white h-full overflow-auto flex items-center justify-center p-6">
        {file?.imageUrl ? (
          <img
            src={file.imageUrl}
            alt={file.name}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        ) : (
          <p className="text-sm text-gray-500">
            Image not available.
          </p>
        )}
      </div>
    </>
  );
};

const ImageFileWindow = WindowWrapper(ImageFile, "imgfile");

export default ImageFileWindow;