import React, {useState} from 'react';
import Typed from 'react-typed';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import CV from '../HamadouBorhaneddine.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = (e) => {
        e.preventDefault();
        setIsModalOpen(!isModalOpen);
    }
    return (
        <div className="header-wraper" id="home">
            <div className="main-info">
                <h1>Hello, I'm Borhaneddine HAMADOU</h1>
                <Typed className="typed-text" strings={[
                    "Mobile Development", "Web Development", "Data Science", "Machine Learning"
                ]}
                typeSpeed={40}
                backSpeed={60}
                loop />
                <a href="" onClick={toggleModal} className="btn-main-offer">MY RESUME</a>
            </div>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
               <ModalHeader toggle={toggleModal}>MY RESUME</ModalHeader>
               <ModalBody>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                       <Viewer fileUrl="assets/files/HamadouBorhaneddine.pdf" />
                    </Worker>
               </ModalBody>
               <ModalFooter>
                   <button type="button" className="btn btn-primary m-auto">
                       <a href={CV} download="Borhaneddine HAMADOU RESUME" className="text-light">
                           <FontAwesomeIcon icon={faDownload} color={"#FFF"} />&nbsp;
                            Download</a>
                   </button>
               </ModalFooter>
            </Modal>
        </div>
    )
}

export default Header
