import { GradientText, HeroAvatar, HeroSocial, Section } from '@/components';

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
          As a passionate software developer, you've come to the right place.
          This is a hub where you can explore the exciting world of{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            Software Development
          </a>{' '}
          and expand your knowledge. Whether you're a seasoned coder or just
          starting your journey, this blog is designed to inspire, educate, and
          empower developers of all levels.
        </>
      }
      avatar={
        <img
          className="h-80 w-80"
          src="/assets/images/tashan-min.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://github.com/TashanDuncan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial
              src="/assets/images/github-icon-min.png"
              alt="Twitter icon"
            />
          </a>
          <a
            href="https://twitter.com/CodingMugen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial
              src="/assets/images/twitter-icon-min.png"
              alt="Twitter icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tashanduncan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon-min.png"
              alt="Linkedin icon"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCgjw8jmwtdjIGRERjBTt5hQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial
              src="/assets/images/youtube-icon-min.png"
              alt="Youtube icon"
            />
          </a>
          <a
            href="https://www.instagram.com/codingmugen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HeroSocial
              src="/assets/images/instagram-icon-min.png"
              alt="Instagram icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
