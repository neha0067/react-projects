import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Modal(props) {
    return (
        <div>
            <button onClick={() => props.closeModal(false)}>
                <FaTimes />
            </button>
            <h2>Modal Content</h2>
        </div>
    );
}