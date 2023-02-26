import { useEffect, useState } from "react";
import Modal from "./Modal";

function Contact() {
    const [formData, setFormData] = useState({})
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)
    const [modalUserCompleted, setModalUserCompleted] = useState(true)

    function handleSubmit() {
        let name = (document.getElementById('name') as HTMLInputElement).value
        let email = (document.getElementById('email') as HTMLInputElement).value
        let subject = (document.getElementById('subject') as HTMLInputElement).value
        let message = (document.getElementById('message') as HTMLInputElement).value
        let button = (document.getElementById('submit') as HTMLInputElement)

        setFormData({
            name: name,
            email: email,
            subject: subject,
            message: message
        })

        if (name.length < 1 || email.length < 1 || subject.length < 1 || message.length < 1) {
            setModalUserCompleted(false)
            setModalOpen(true)
            button.disabled = true
            setTimeout(() => {
                setModalOpen(false)
                button.disabled = false
            }, 5000);
            setFormSubmitted(false)
        } else {
            setFormSubmitted(true)
            setModalUserCompleted(true)
        }
    }


    useEffect(() => {
        if (formSubmitted === true) {
            console.log(formData)
            let xhr = new XMLHttpRequest()
            xhr.onerror = () => {
                alert('error')
            }
            xhr.open('POST', 'http://localhost:8000/')
            xhr.setRequestHeader('content-type', 'application/json')
            xhr.onload = () => {
                if (xhr.responseText === 'success') {
                    setModalSuccess(true)
                    setModalOpen(true);
                    (document.getElementById('submit') as HTMLInputElement).disabled = true;
                    setTimeout(() => {
                        setModalOpen(false);
                        (document.getElementById('submit') as HTMLInputElement).disabled = false;
                    }, 5000);
                    (document.getElementById('name') as HTMLInputElement).value = '';
                    (document.getElementById('email') as HTMLInputElement).value = '';
                    (document.getElementById('subject') as HTMLInputElement).value = '';
                    (document.getElementById('message') as HTMLInputElement).value = '';
                } else {
                    setModalSuccess(false);
                    setModalOpen(true);
                    (document.getElementById('submit') as HTMLInputElement).disabled = true;
                    setTimeout(() => {
                        setModalOpen(false);
                        (document.getElementById('submit') as HTMLInputElement).disabled = false;
                    }, 5000);
                }

            }
            xhr.send(JSON.stringify(formData))
            setFormSubmitted(false);
        }
    }, [formSubmitted])

    return (
        <div className="Contact" id="Contact">
            <div className="Contact-wrapper">
                <h1 className="Contact-header">Contact Me</h1>
                <div className="Contact-form" id="form">
                    <input type="text" id="name" placeholder="Full Name" />
                    <input type="email" id="email" placeholder="Email" />
                    <input type="test" id="subject" placeholder="Subject" />
                    <Modal open={modalOpen} success={modalSuccess} completed={modalUserCompleted} />
                    <textarea id="message" placeholder="Write your message here." />
                    <button id="submit" onClick={handleSubmit}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact