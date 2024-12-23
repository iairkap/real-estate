import React from 'react';
import styles from "@/app/styles/components/propertyCards/Property.module.scss"
import Image from 'next/image';
import { iconByType } from '@/app/constants/constants';
import { BATHROOM, BEDROOM } from "@/lib/image";
import { Button } from '@/components/ui/button';
interface PropertyCardProps {
    title: string;
    description: string;
    type: string;
    bedroom: number;
    price: number;
    bathroom: number;
    images: string;
    showChips: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ title, description, type, bedroom, price, bathroom, images, showChips = true }) => {
    const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };

    return (
        <div className={styles.cardLayout}>
            <div className={styles.imagenContainer}>
                <Image
                    src={images}
                    alt="property"
                    layout='fill'
                    objectFit='cover'

                />
            </div>
            <div className={styles.content}>
                <h2>{title}</h2>
                <div className={styles.rowRead}>
                    <span className={styles.descriptionMaxChar}>{truncateText(description, 100)}                     <span className={styles.readMore}>Read More</span>
                    </span>
                </div>
            </div>
            {showChips &&
                <div className={styles.row}>

                    <div className={styles.iconContainer}>
                        <Image src={BEDROOM} alt="" width={20} height={20} />
                        <p>
                            {bedroom} - {bedroom === 1 ? "Bedroom" : "Bedrooms"}</p>
                    </div>
                    <div className={styles.iconContainer}>
                        <Image src={BATHROOM} alt="" width={20} height={20} />
                        <p> {bathroom} - {bathroom === 1 ? "Bathroom" : "Bathrooms"}</p>
                    </div>
                    <div className={styles.iconContainer}>
                        <Image src={iconByType(type)} alt="" width={20} height={20} />
                        <p>{type}</p>
                    </div>
                </div>
            }
            <div className={styles.footer}>
                <div className={styles.priceContainer}>
                    <span className={styles.sub}>Price: </span>
                    <span className={styles.price}>${price}</span>
                </div>
                <Button variant='default' size='sm'>View Property Details</Button>
            </div>
        </div>
    );
};

export default PropertyCard;