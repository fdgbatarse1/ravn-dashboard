'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useRef, useEffect, useCallback } from 'react';

import Form from '@/components/form';
import Confirmation from '@/components/confirmation/confirmation';

const Modal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const modal = searchParams.get('modal');
  const type = searchParams.get('type');
  const id = searchParams.get('id');

  const onClose = useCallback(() => {
    modalRef.current?.close();
    router.push('/');
  }, [router]);

  useEffect(() => {
    if (modal === 'true') {
      modalRef.current?.showModal();
    } else {
      onClose();
    }
  }, [modal, onClose]);

  if (modal !== 'true') return null;

  return (
    <dialog
      ref={modalRef}
      className="top-50 left-50 -translate-x-50 -translate-y-50 fixed z-10 bg-transparent"
    >
      {/* {type === 'update' && id && <Form onClose={onClose} type={type} id={id} />} */}
      {type === 'create' && <Form onClose={onClose} type={type} />}
      {type === 'delete' && id && <Confirmation />}
    </dialog>
  );
};

export default Modal;
