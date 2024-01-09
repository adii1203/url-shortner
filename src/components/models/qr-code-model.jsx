import { QRCode } from "react-qrcode-logo";
import Button from "../ui/Button";
import { useRef } from "react";

const QrCodeModel = ({ props }) => {
  const canvasRef = useRef(null);

  const handelDownload = () => {
    const canvas = canvasRef.current.canvas.current;
    const dataURL = canvas.toDataURL([
      "image/svg+xml",
      "image/png",
      "image/jpeg",
    ]);
    const downloadLink = document.createElement("a");

    downloadLink.href = dataURL;
    downloadLink.download = "canvas_image.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();

    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col items-center px-6 py-4 rounded justify-center bg-[#eee]">
      <div className="w-64 h-64 bg-white rounded-lg mt-4 shadow-md flex items-center justify-center">
        <QRCode
          enableCORS={true}
          ref={canvasRef}
          value={`${props?.originUrl}`}
          size={190}
          bgColor="#ffffff"
          fgColor="#000000"
          logoWidth={34}
          logoHeight={34}
          logoImage={`${props?.icon}`}
          logoPaddingStyle="circle"
          logoPadding={2}
          qrStyle="dots"
          quietZone={30}
        />
      </div>
      <Button
        onClick={handelDownload}
        varient={"primary"}
        className={"w-full justify-center py-2 mt-2"}>
        Export
      </Button>
    </div>
  );
};

export default QrCodeModel;
