import React, { useState } from "react";
import styles from "@/app/styles/components/Inquires.module.scss";
import { Button } from "@/components/ui/button";
interface InquieresProps {
    name: string;
}

const Inquieres: React.FC<InquieresProps> = ({ name }) => {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [error, setError] = useState("");

    const formValues = [
        {
            label: "First Name",
            name: "firstName",
            placeholder: "Enter First Name",
            type: "text",
            required: true,
            gridSize: 1,
        },
        {
            label: "Last Name",
            name: "lastName",
            placeholder: "Enter Last Name",
            required: true,
            type: "text",
            gridSize: 1,
        },
        {
            label: "Email",
            name: "email",
            placeholder: "Enter your Email",
            required: true,
            type: "email",
            gridSize: 1,
        },
        {
            label: "Phone",
            name: "phone",
            placeholder: "Enter Phone Number",
            required: true,
            type: "text",
            gridSize: 1,
        },
        {
            label: "Selected Property",
            name: "property",
            placeholder: name,
            type: "read",
            gridSize: 2,
        },
        {
            label: "Message",
            name: "message",
            placeholder: "Enter your Message",
            type: "textarea",
            gridSize: 2,
        },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Verificar campos requeridos
        for (const field of formValues) {
            if (field.required && !formData[field.name]) {
                setError(`Please fill out the ${field.label} field.`);
                return;
            }
        }
        setError("");
        console.log("Form submitted:", formData);
        // Aquí puedes agregar lógica para enviar los datos del formulario
    };

    return (
        <section className={styles.generalContainer}>
            <article className={styles.textArea}>
                <h3 className={styles.title}>Inquire About {name}</h3>
                <span className={styles.textInformation}>
                    Interested in this property? Fill out the form below, and our real estate experts will get back to you with more
                    details, including scheduling a viewing and answering any questions you may have.
                </span>
            </article>
            <article>
                <form className={styles.form} onSubmit={handleSubmit}>
                    {formValues.map((field) => (
                        <div
                            key={field.label}
                            className={`${styles.formGroup} ${styles[`gridSize${field.gridSize}`]}`}
                        >
                            <label htmlFor={field.name} className={styles.label}>
                                {field.label}
                            </label>
                            {field.type === "textarea" ? (
                                <textarea
                                    id={field.name}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    className={styles.textarea}
                                    rows={12}
                                    onChange={handleChange}
                                ></textarea>
                            ) : field.type === "read" ? (
                                <input
                                    id={field.name}
                                    name={field.name}
                                    type="text"
                                    value={field.placeholder}
                                    className={styles.input}
                                    readOnly
                                />
                            ) : (
                                <input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className={styles.input}
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                    ))}
                    {error && <p className={styles.error}>{error}</p>}
                    <div className={`${styles.buttonContainer} ${styles[`gridSize2`]}`}>
                        <Button type="submit" className={styles.submitButton}>
                            Submit Inquiry
                        </Button>
                    </div>
                </form>
            </article>
        </section>
    );
};

export default Inquieres;