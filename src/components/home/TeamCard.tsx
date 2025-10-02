
import React from "react";
import { TeamMember } from "../data/teamData";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform hover:scale-105">
      <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full">
        <img
          src={member.image}
          alt={member.name}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
      <p className="text-gray-600 mb-4">{member.role}</p>
      <div className="flex space-x-3">
        {member.social.linkedin && (
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {member.social.twitter && (
          <a
            href={member.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={20} />
          </a>
        )}
        {member.social.github && (
          <a
            href={member.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600"
          >
            <FaGithub size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
