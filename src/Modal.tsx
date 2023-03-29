import type { PropsWithChildren } from "react";

import { useEffect, useRef, useState } from "react";
import { Modal as PolyfilledModal } from "react-dialog-polyfill";
import { createPortal } from "react-dom";

type ModalProps = PropsWithChildren<{
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  width?: number;
}>;

const useDelayedOpen = (isOpen: boolean) => {
  const [delayedOpen, setDelayedOpen] = useState(false);

  useEffect(() => {
    // Delay 'After' classes by one anim tick to ensure animations run.
    // (Safari fix)
    requestAnimationFrame(() => {
      if (isOpen) {
        // Add custom transition style
      } else {
        // Remove custom transition style
      }
    });

    const timeout = setTimeout(() => {
      setDelayedOpen(isOpen);
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen]);

  return delayedOpen;
};

const Modal = (props: ModalProps) => {
  const { closeModal, children, isOpen, title, width = 600 } = props;
  const isDelayedOpen = useDelayedOpen(isOpen);
  const show = isOpen || isDelayedOpen;

  // Keep a reference to the children when the modal is in an open state.
  // This means only *useful* children (ie, not null) are kept for the
  // duration of the closing animation.
  const childrenRef = useRef(children);
  if (isOpen) childrenRef.current = children;

  return createPortal(
    <PolyfilledModal
      // PolyfilledModal is a Functional Component, so can't take refs
      id="my-modal"
      open={show}
      onCancel={closeModal}
      onClick={closeModal}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <header>
          <h3>{title}</h3>
        </header>
        <section>
          <div style={{ width: width + "px" }}>
            {show ? childrenRef.current : null}
          </div>
        </section>
        <footer>
          <button onClick={closeModal}>Close</button>
        </footer>
      </div>
    </PolyfilledModal>,
    document.getElementById("modal-root")!
  );
};

export default Modal;
