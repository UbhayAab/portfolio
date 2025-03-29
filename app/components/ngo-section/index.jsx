import styles from './NGOSection.module.css';
import { Section } from '../section';
import { Heading } from '../heading';
import { Text } from '../text';
import { Button } from '../button';

export const NGOSection = ({ id }) => {
  return (
    <Section id={id} className={styles.ngoSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Heading level={2} as="h2" className={styles.title}>
            Jarurat Care Foundation
          </Heading>
          <Text size="l" className={styles.subtitle}>
            Cancer Concierge for Patients and Families
          </Text>
          <div className={styles.descriptionContainer}>
            <Text size="m" className={styles.description}>
              Jarurat Care Foundation is a non-profit organization dedicated to providing support and care for cancer patients and their families.
            </Text>
            <Text size="m" className={styles.description}>
              Founded in loving memory of my fighter mother Rekha Joshi (1969-2023) who bravely battled with Stage 4 Cholangiocarcinoma for 7 months, we aim to be a complete cancer concierge service helping patients navigate their cancer journey with dignity and support.
            </Text>
          </div>
          <div className={styles.actions}>
            <Button className={styles.button} href="mailto:partnership@jarurat.care">
              Contact Us
            </Button>
            <Button secondary className={styles.button} href="https://jarurat.care">
              Visit Our Website
            </Button>
          </div>
        </div>
        <div className={styles.imagePlaceholder}>
          Jarurat Care Foundation
        </div>
      </div>
    </Section>
  );
}; 