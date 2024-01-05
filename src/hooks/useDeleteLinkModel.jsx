import { useCallback, useMemo, useState } from "react";
import DeleteLinkModel from "../components/models/delete-link-model";
import Popup from "reactjs-popup";

export const useDeleteLinkModel = (props) => {
  const [showDeleteLinkModel, setShowDeleteLinkModel] = useState(false);

  const DeleteLinkModelCallback = useCallback(() => {
    return (
      <Popup
        lockScroll={true}
        modal
        open={showDeleteLinkModel}
        onClose={() => setShowDeleteLinkModel(false)}
        closeOnDocumentClick
        className="bg-blur">
        <DeleteLinkModel props={props} />
      </Popup>
    );
  }, [props, showDeleteLinkModel]);

  return useMemo(
    () => ({
      DeleteLinkModelCallback,
      setShowDeleteLinkModel,
      showDeleteLinkModel,
    }),
    [DeleteLinkModelCallback, setShowDeleteLinkModel, showDeleteLinkModel]
  );
};
