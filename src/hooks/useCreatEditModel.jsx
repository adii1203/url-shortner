import { useCallback, useMemo, useState } from "react";
import CreatEditLink from "../components/models/creat-edit-model";
import Popup from "reactjs-popup";

export const useCreatEditModel = (props) => {
  const [showCreateEditModel, setShowCreateEditModel] = useState(false);

  const CreatEditLinkModelCallback = useCallback(() => {
    return (
      <>
        <Popup
          className="bg-blur"
          open={showCreateEditModel}
          onClose={() => setShowCreateEditModel(false)}
          modal
          lockScroll={true}
          closeOnDocumentClick>
          <CreatEditLink
            props={props}
            showCreateEditModel={showCreateEditModel}
            setShowCreateEditModel={setShowCreateEditModel}
          />
        </Popup>
      </>
    );
  }, [setShowCreateEditModel, showCreateEditModel, props]);
  return useMemo(
    () => ({
      showCreateEditModel,
      setShowCreateEditModel,
      CreatEditLinkModelCallback,
    }),
    [setShowCreateEditModel, showCreateEditModel, CreatEditLinkModelCallback]
  );
};
