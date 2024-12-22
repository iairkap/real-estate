import React from 'react';
import type { Property } from '@/app/store/useFiltersStore';
import Section from '@/app/components/sections/section';
import styles from "@/app/styles/components/property/PricingDetails.module.scss";
import { formatMoney } from '@/lib/utils';
interface PricingDetailsProps {
    property: Property
}

const PricingDetails: React.FC<PricingDetailsProps> = ({ property }) => {

    const { fees, price } = property

    console.log(fees)

    /*  {
         "transfer_tax": 25000,
         "legal_fees": 5000,
         "property_insurance": 1200,
         "home_inspection": 500
     } */


    const additionalFees = [
        {
            label: "Property Tranfer Tax",
            price: fees.transfer_tax,
            note: "Based on the sale price and local regulations"
        },
        {
            label: "Legal Fees",
            price: fees.legal_fees,
            note: "Approximate cost for legal services, including title transfer"
        },
        {
            label: "Home Inspection",
            price: fees.home_inspection,
            note: "Recommended for due diligence"
        },
        {
            label: "Property Insurance",
            price: fees.property_insurance,
            note: "Annual cost for comprehensive property insurance"
        },
    ]


    return (
        <Section title='Comprehensive Pricing Details' description="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision">
            <article className={styles.generalLayout}>
                <div className={styles.noteContainer}>
                    <span className={styles.noteTitle}>Note</span>
                    <p className={styles.parragraph}>The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
                </div>
                <section className={styles.priceDetail}>
                    <div className={styles.left}>
                        <span>Listing Price</span>
                        <h4 className={styles.price}>{formatMoney(price)}</h4>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.title}>
                            <span className={styles.noteTitle}>
                                Addiotional Fees
                            </span>
                        </div>
                        <div className={styles.addiontalFeesContainer}>
                            {additionalFees.map((fee) => (
                                <div key={fee.label} className={styles.card}>
                                    <label htmlFor={fee.label} className={styles.label}>
                                        {fee.label}
                                    </label>
                                    <div className={styles.info}>
                                        <span className={styles.feePrice}>
                                            {formatMoney(fee.price)}
                                        </span>
                                        <span className={styles.noteInformation}>
                                            {fee.note}
                                        </span>
                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>
                </section>
            </article>
        </Section>
    );
}

export default PricingDetails;