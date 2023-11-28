'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useRef, useEffect, useCallback } from 'react';

import deleteTaskAction from '@/actions/task/deleteTaskAction';
import Form from '@/components/form';
import Confirmation from '@/components/confirmation/confirmation';
import createTaskAction from '@/actions/task/createTaskAction';

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
      {type === 'create' && <Form onClose={onClose} type={type} action={createTaskAction} />}
      {type === 'delete' && id && (
        <Confirmation
          text="Are you sure you want to delete this task?"
          onCancel={onClose}
          onConfirm={() => deleteTaskAction(id)}
        />
      )}
    </dialog>
  );
};

export default Modal;
