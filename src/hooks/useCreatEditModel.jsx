import { useCallback, useMemo, useState } from "react";
import CreatEditLink from "../components/model/CreatEditLink";

export const useCreatEditModel = (props) => {
  const [showCreateEditModel, setShowCreateEditModel] = useState(false);

  const CreatEditLinkModelCallback = useCallback(() => {
    return (
      <>
        <CreatEditLink
          props={props}
          showCreateEditModel={showCreateEditModel}
          setShowCreateEditModel={setShowCreateEditModel}
        />
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
