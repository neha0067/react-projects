import React from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

export default function Home() {
  const [sidebar, setSidebar] = React.useState(false);

  const [showModal, setShowModal] = React.useState(false);

  return (
    <main>
      <div>
        {sidebar ? (
          <Sidebar closeSidebar={setSidebar} />
        ) : (
          <button onClick={() => setSidebar(true)}>
            <FaBars />
          </button>
        )}
        
      </div>
      {showModal ? (
        <Modal closeModal={setShowModal} />
      ) : (
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      )}
    </main>
  );
}
