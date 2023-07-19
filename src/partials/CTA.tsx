import { GradientText, Newsletter, Section } from '@/components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Subscribe to my <GradientText>Newsletters</GradientText>
        </>
      }
      description="Stay tuned for our upcoming posts & tutorials, and prepare to embark on a journey that will ignite your passion for code and empower you to reach new heights as a software developer."
    />
  </Section>
);

export { CTA };
