"use client";

import { useEffect, useState } from "react";
import SettingsModal from "../modal/SettingsModal";
import CoverImageModal from "../CoverImageModal";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
}

export default ModalProvider;
