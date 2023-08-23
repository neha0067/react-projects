import React from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

export default function Home() {
  const [sidebar, setSidebar] = React.useState(false);

  const [showModal, setShowModal] = React.useState(false);

  return (
    <main>
      <div className= {sidebar ? "sidebar-display" :"sidebar-toggle"}>
        {sidebar ? (
          <Sidebar closeSidebar={setSidebar} />
        ) : (
          <button className="toggle-btn"  onClick={() => setSidebar(true)}>
            <FaBars />
          </button>
        )}        
      </div>
      <div> 
        {showModal ? (
          <Modal closeModal={setShowModal} />
        ) : (
          <button className="show-modal" onClick={() => setShowModal(true)}>Show Modal</button>
        )}
      </div>
    </main>
  );
}
