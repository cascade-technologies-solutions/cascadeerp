
import React from "react";
import { Container } from "../ui/Container";
import teamData from "../data/teamData";
import TeamCard from "./TeamCard";

const CustomTeam: React.FC = () => {
  return (
    <section id="team" className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals behind our innovation hub, dedicated to creating cutting-edge solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CustomTeam;
