import React from 'react';
import { useForm } from 'react-hook-form';
import { formInputsProperties } from '@/app/constants/constants';
import styles from '@/app/styles/components/form/form.module.scss';

interface FormLetsMakeItHappenProps {
    //eslint-disable-next-line
    onSubmit: (data: Record<string, any>) => void;
}

const FormLetsMakeItHappen: React.FC<FormLetsMakeItHappenProps> = ({ onSubmit }) => {
    const { register, handleSubmit } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                {formInputsProperties.map((input) => {
                    const gridClass = styles[`grid-size-${input.gridsize}`]; // Clase dinámica basada en gridsize
                    switch (input.type) {
                        case 'select':
                            return (
                                <div key={input.id} className={`${styles.field} ${gridClass}`}>
                                    <label htmlFor={input.name}>{input.name}</label>
                                    <select
                                        id={input.name}
                                        {...register(input.name, { required: input.required })}
                                    >
                                        <option value="" disabled>{input.placeholder}</option>
                                        {input.options?.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            );
                        case 'textarea':
                            return (
                                <div key={input.id} className={`${styles.field} ${gridClass}`}>
                                    <label htmlFor={input.name}>{input.name}</label>
                                    <textarea
                                        id={input.name}
                                        {...register(input.name, { required: input.required })}
                                        placeholder={input.placeholder}
                                        rows={10}
                                        className={styles.textareaField}
                                    />
                                </div>
                            );
                        case 'checkbox':
                            return (
                                <div key={input.id} className={`${styles.field} ${gridClass}`}>
                                    <label>{input.name}</label>
                                    <div className={styles.checkboxOptions}>
                                        {input.options?.map((option) => (
                                            <label key={option.value}>
                                                <div className={styles.checkboxLabel}>
                                                    {option.label}
                                                    <input
                                                        type="radio" // Cambiado a "radio"
                                                        value={option.value}
                                                        {...register(input.name, { required: input.required })}
                                                    />
                                                    <span className={styles.checkboxCircle}></span>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            );
                        default:
                            return (
                                <div key={input.id} className={`${styles.field} ${gridClass}`}>
                                    <label htmlFor={input.name}>{input.name}</label>
                                    <input
                                        type={input.type}
                                        id={input.name}
                                        {...register(input.name, { required: input.required })}
                                        placeholder={input.placeholder}
                                    />
                                </div>
                            );
                    }
                })}
                <button type="submit" className={styles.submitButton}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormLetsMakeItHappen;