import { useState } from "react";

export const useShowLinkOption = () => {
  const [showLinkOption, setShowLinkOption] = useState([]);

  const handleShowLinkOption = (id) => {
    if (showLinkOption.includes(id)) {
      setShowLinkOption([]);
    } else {
      setShowLinkOption([id]);
    }
  };

  return { showLinkOption, setShowLinkOption, handleShowLinkOption };
};
