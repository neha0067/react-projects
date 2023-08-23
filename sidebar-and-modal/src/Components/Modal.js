import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Modal(props) {
    return (
        <div className="modal">
            <button className="close-modal" onClick={() => props.closeModal(false)}>
                <FaTimes />
            </button>
            <p>Modal Content</p>
        </div>
    );
}