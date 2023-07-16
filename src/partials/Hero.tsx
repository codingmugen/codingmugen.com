import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Tay</GradientText> 👋
        </>
      }
      description={
        <>
          I'm a dedicated Software Developer on a mission to empower aspiring
          programmers and beginners to embark on their own coding journeys.
          Through this blog, I aim to create a nurturing and inclusive space for
          all those who are curious about the world of{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Software Development
          </a>
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src="/assets/images/profile.jpeg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://github.com/TashanDuncan">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://twitter.com/CodingMugen">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/instagram-icon.png"
              alt="Instagram icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
