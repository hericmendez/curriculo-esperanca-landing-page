import React from "react";

type DevCardProps = {
  name: string;
  area: string;
  stack: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
};

const DevCard: React.FC<DevCardProps> = ({
  name,
  area,
  stack,
  github,
  linkedin,
  portfolio,
}) => {
  // Extrai o nome de usuário do GitHub a partir da URL
  const getGithubUsername = (url: string) => {
    const match = url.match(/github\.com\/([\w-]+)/);
    return match ? match[1] : null;
  };

  const githubUsername = github ? getGithubUsername(github) : null;
  const avatarUrl = githubUsername
    ? `https://github.com/${githubUsername}.png`
    : "https://placehold.co/150";

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 dark:bg-gray-900 p-4">
      <img
        className="w-24 h-24 rounded-full mx-auto"
        src={avatarUrl}
        alt={name}
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold dark:text-white">{name}</h2>
        <p className="text-gray-600 dark:text-gray-200">{area}</p>
        <p className="text-gray-500 text-sm mt-2 dark:text-gray-400">{stack}</p>
        <div className="flex justify-center space-x-4 mt-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          )}
          {portfolio && (
            <a
              href={portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Portfólio
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevCard;
