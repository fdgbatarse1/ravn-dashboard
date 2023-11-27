'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';

import Form from '@/components/form';

const Modal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const modal = searchParams.get('modal');

  useEffect(() => {
    if (modal === 'true') {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [modal]);

  if (modal !== 'true') return null;

  const onClose = () => {
    modalRef.current?.close();
    router.push('/');
  };

  return (
    <dialog
      ref={modalRef}
      className="top-50 left-50 -translate-x-50 -translate-y-50 fixed z-10 bg-transparent"
    >
      <Form onClose={onClose} />
    </dialog>
  );
};

export default Modal;
