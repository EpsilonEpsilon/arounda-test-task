'use client';
import React from 'react';
import {useRouter} from 'next/navigation';
import CustomModal from 'react-modal';
import styles from "./modal.module.scss"

CustomModal.setAppElement('#modal-root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        position:"fixed",
        transform: 'translate(-50%, -50%)',
        maxWidth:"950px",
        maxHeight:"650px",
        width:"90%",
        height:"100%",
        borderRadius:"10px",
    },
};
export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();


    function onDismiss() {
        router.back();
    }

    return (
        <CustomModal
            isOpen={true}
            onRequestClose={onDismiss}
            style={customStyles as any}
            contentLabel="Example Modal"
        >
            <div className={styles["container"]}>
                {children}
            </div>
        </CustomModal>
    )
}
