import { useCallback, useMemo, useState } from "react";
import Popup from "reactjs-popup";
import QrCodeModel from "../components/models/qr-code-model";

export const useQrCodeModel = (props) => {
  const [showQrCodeModel, setShowQrCodeModel] = useState(false);

  const QrCodeModelCallback = useCallback(() => {
    return (
      <Popup
        className="bg-blur"
        open={showQrCodeModel}
        onClose={() => setShowQrCodeModel(false)}
        modal
        lockScroll={true}
        closeOnDocumentClick>
        <QrCodeModel props={props} />
      </Popup>
    );
  }, [props, showQrCodeModel]);

  return useMemo(
    () => ({
      QrCodeModelCallback,
      setShowQrCodeModel,
      showQrCodeModel,
    }),
    [QrCodeModelCallback, setShowQrCodeModel, showQrCodeModel]
  );
};
