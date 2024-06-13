import { useState } from "react";

export const useDisclosure = (inital: boolean = false) => {
  const [open, setOpen] = useState(inital);

  return {
    isOpen: open,
    open: () => setOpen(true),
    close: () => setOpen(false),
    toggle: (value?: boolean) => setOpen((prev) => value || !prev),
  };
};
