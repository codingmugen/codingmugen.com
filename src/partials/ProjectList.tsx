import { ColorTags, GradientText, Project, Section, Tags } from '@/components';

const data = await fetch('https://api.github.com/orgs/codingmugen/repos').then(
  (response) => response.json()
);

const ProjectList = () => {
  return (
    <Section
      title={
        <>
          Open Source <GradientText>Projects</GradientText>
        </>
      }
    >
      <div className="flex flex-col gap-6">
        {data.map((project: any) => (
          <Project
            name={project.name}
            description={project.description}
            link={project.html_url}
            img={{
              src: '/assets/images/project-web-design.png',
              alt: 'Project Web Design',
            }}
            category={
              <>
                <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
                <Tags color={ColorTags.LIME}>Web design</Tags>
                <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
                <Tags color={ColorTags.ROSE}>TypeScript</Tags>
              </>
            }
          />
        ))}
      </div>
    </Section>
  );
};

export { ProjectList };
