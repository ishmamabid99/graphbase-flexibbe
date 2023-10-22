"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ReactNode, useCallback, useRef, useState } from "react";

type Props = {
  children: ReactNode;
};

function Modal({ children }: Props) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const onDismiss = useCallback(() => {
    router.push("/");
  }, [router]);
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );
  return (
    <div ref={overlay} className="modal" onClick={handleClick}>
      <button
        type="button"
        className="absolute top-4 right-8"
        onClick={onDismiss}
      >
        <Image src="/close.svg" alt="close" width={17} height={17} />
      </button>
      <div ref={wrapper} className="modal_wrapper">
        {children}
      </div>
    </div>
  );
}

export default Modal;
