import styles from './AboutMe.module.css';
import { Section } from '../section';
import { Text } from '../text';
import { Heading } from '../heading';

export const AboutMe = () => {
  return (
    <Section className={styles.aboutMe}>
      <Heading level={2} as="h2" className={styles.title}>
        About Me
      </Heading>
      <div className={styles.content}>
        <div className={styles.column}>
          <Text size="l" className={styles.description}>
            I am Priyanka Joshi, a personal branding expert with over 10 years of experience helping professionals and businesses establish a strong online presence. I specialize in digital marketing, content strategy, and brand development.
          </Text>
          <Text size="l" className={styles.description}>
            My approach combines strategic thinking with creative execution to help clients stand out in a crowded digital landscape. Whether you're an entrepreneur, a corporate professional, or a creative artist, I can help you define and communicate your unique value proposition.
          </Text>
        </div>
        <div className={styles.column}>
          <div className={styles.imageContainer}>
            {/* Placeholder for profile image */}
            <div className={styles.imagePlaceholder}>Profile Image</div>
          </div>
        </div>
      </div>
    </Section>
  );
}; 