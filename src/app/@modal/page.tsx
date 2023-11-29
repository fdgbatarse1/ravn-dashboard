'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import TaskHandler from '@/components/taskHandler';

const Modal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const modal = searchParams.get('modal');
  const type = searchParams.get('type');
  const id = searchParams.get('id');

  useEffect(() => {
    if (modal === 'true') {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
      router.push('/');
    }
  }, [modal, router]);

  const onClose = () => {
    modalRef.current?.close();
    router.push('/');
  };

  if (modal !== 'true') return null;

  return (
    <dialog
      ref={modalRef}
      className="top-50 left-50 -translate-x-50 -translate-y-50 fixed z-10 bg-transparent"
    >
      <TaskHandler onClose={onClose} type={type} id={id} />
    </dialog>
  );
};

export default Modal;
