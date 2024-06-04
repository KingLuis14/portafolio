import { useState, useRef } from "react";
import Styles from "./Form.module.scss";

export default function Form(props) {

    const [responseMessage, setResponseMessage] = useState("");
    const loader = useRef(null);
    const modal = useRef(null);
    const iconCheck = useRef(null);
    const formulario = useRef(null);

    const submit = async (e) => {

        e.preventDefault();
        modal.current.showModal();
        loader.current.classList.add(Styles.animate);
        setResponseMessage("Solicitando ...");
        
        const formData = new FormData(e.target);
        const response = await fetch("https://formsubmit.co/ajax/enriquecalero284@gmail.com", {
            method: "POST",
            body: formData,
        });


        if (response.ok) {

            loader.current.classList.remove(Styles.animate);
            iconCheck.current.classList.add(Styles.iconShow);

            setResponseMessage("Solicitud Enviada");
        } else {

        }

    }

    const closeDialog = (e) =>{
        e.preventDefault();
        // e.reset();
        formulario.current.reset();
        modal.current.close();
        iconCheck.current.classList.remove(Styles.iconShow);
    }

    return (
        <form onSubmit={submit} className={`${Styles.formulario} fs-small color-neutral-000`} ref={formulario}>

            <input className={`${Styles.input} | bg-color-primary-800`} name="nombre" id="nombre" placeholder="Nombre Completo" required />
            <input className={`${Styles.input} | bg-color-primary-800`} name="email" type="email" placeholder="Correo" id="email" required />
            <input className={`${Styles.input} | bg-color-primary-800`} name="nombre" id="numero" placeholder="Numero de Contacto" type="tel" required />
            <textarea className={`${Styles.textarea} | bg-color-primary-800`} name="observacion" placeholder="Mensaje" id="observacion"></textarea>
            <button className={`${Styles.boton} boton--primary fs-normal`}>Contactame</button>

            <dialog className={Styles.modal} ref={modal}>
                <div className={`${Styles.containerIcons}`} >
                    <span className={`${Styles.loader}`} ref={loader} />
                    <span className={`${Styles.checkIcon}`} ref={iconCheck}>
                        {props.iconCheck}
                    </span>
                </div>
                <h3>{responseMessage}</h3>
                <button className={Styles.botonClose} onClick={closeDialog}>X</button>
            </dialog>
            
        </form>
    );
}