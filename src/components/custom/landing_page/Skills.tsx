const Skills = () => {
  const programmingLanguages = [
    {
      name: "JavaScript",
      yoe: 3,
    },
    {
      name: "TypeScript",
      yoe: 3,
    },
    {
      name: "Python",
      yoe: 1,
    },
    {
      name: "Java",
      yoe: 1,
    },
    {
      name: "Dart",
      yoe: 2,
    },
    {
      name: "PHP",
      yoe: 3,
    },
    {
      name: "Go",
      yoe: 1,
    }
  ];

  const databases = [
    {
      name: "PostgreSQL",
      yoe: 3,
    },
    {
      name: "MySQL",
      yoe: 3,
    },
    {
      name: "MongoDB",
      yoe: 1,
    },
    {
      name: "Redis",
      yoe: 3,
    }
  ];

  const frontendSkills = [
    {
      name: "React",
      yoe: 3,
    },
    {
      name: "Next.js",
      yoe: 2,
    },
    {
      name: "Tailwind CSS",
      yoe: 2,
    },
    {
      name: "Vue.js",
      yoe: 2,
    },
    {
      name: "Flutter",
      yoe: 2,
    }
  ];

  const backendSkills = [
    {
      name: "Node.js",
      yoe: 3,
    },
    {
      name: "Express.js",
      yoe: 2,
    },
    {
      name: "NestJS",
      yoe: 2,
    },
    {
      name: "Django",
      yoe: 1,
    },
    {
      name: "Spring Boot",
      yoe: 1,
    },
    {
      name: "FastAPI",
      yoe: 1,
    },
    {
      name: "Laravel",
      yoe: 3,
    },
  ];

  const devopsTools = [
    {
      name: "Docker",
      yoe: 2,
    },
    {
      name: "Git",
      yoe: 3,
    },
    {
      name: "GitHub Actions",
      yoe: 2,
    },
    {
      name: "Nginx",
      yoe: 2,
    },
    {
      name: "Apache Kafka",
      yoe: 1,
    },
    {
      name: "RabbitMQ",
      yoe: 1,
    },
    {
      name: "Linux",
      yoe: 3
    },
    {
      name: "Jenkins",
      yoe: 1,
    }
  ];

  const cloudPlatforms = [
    {
      name: "AWS",
      yoe: 1,
    },
    {
      name: "DigitalOcean",
      yoe: 2,
    },
    {
      name: "Linode",
      yoe: 1,
    }
  ];

  return (
    <section id="skills" className="mb-12 min-h-screen px-8">
      <div className="flex flex-col gap-8 lg:mt-16 text-left mt-16">
        <p className="text-3xl font-semibold leading-loose">Skills & Technologies</p>
        <div className="space-y-4">
          <div>Programming Languages</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
            {programmingLanguages.map((skill) => (
              <div key={skill.name} className="border border-gray-700 px-4 py-2 rounded-md shadow-md">
                <p className="font-semibold">{skill.name}</p>
                <p className="text-sm text-gray-400">{skill.yoe} years of experience</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div>Front-End Development</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
            {frontendSkills.map((skill) => (
              <div key={skill.name} className="border border-gray-700 px-4 py-2 rounded-md shadow-md">
                <p className="font-semibold">{skill.name}</p>
                <p className="text-sm text-gray-400">{skill.yoe} years of experience</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div>Back-End Development</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
            {backendSkills.map((skill) => (
              <div key={skill.name} className="border border-gray-700 px-4 py-2 rounded-md shadow-md">
                <p className="font-semibold">{skill.name}</p>
                <p className="text-sm text-gray-400">{skill.yoe} years of experience</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div>Databases</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
            {databases.map((skill) => (
              <div key={skill.name} className="border border-gray-700 px-4 py-2 rounded-md shadow-md">
                <p className="font-semibold">{skill.name}</p>
                <p className="text-sm text-gray-400">{skill.yoe} years of experience</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div>Cloud Platforms</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
            {cloudPlatforms.map((skill) => (
              <div key={skill.name} className="border border-gray-700 px-4 py-2 rounded-md shadow-md">
                <p className="font-semibold">{skill.name}</p>
                <p className="text-sm text-gray-400">{skill.yoe} years of experience</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div>DevOps & Tools</div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
            {devopsTools.map((skill) => (
              <div key={skill.name} className="border border-gray-700 px-4 py-2 rounded-md shadow-md">
                <p className="font-semibold">{skill.name}</p>
                <p className="text-sm text-gray-400">{skill.yoe} years of experience</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-1 bg-[radial-gradient(circle,_black_2px,_transparent_2px)] bg-[length:10px_10px] mt-4"></div>
    </section>
  );
};

export default Skills;