
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

import AkshayPic from "@/assets/Akshay_pic.png";
import ManojPic from "@/assets/manoj_pic.png";
import VaibhavPic from "@/assets/vaibhav_pic.png";

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Akshay Kumar Ankalagi",
    role: "Founder & CEO",
    image: AkshayPic,
    social: {
      linkedin: "https://www.linkedin.com/in/akshaykumar-ankalagi-10b37933a",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 2,
    name: "Manoj Relekar",
    role: "CTO",
    image: ManojPic,
    social: {
      linkedin: "https://www.linkedin.com/in/manojrelekar3/",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
  {
    id: 3,
    name: "Vaibhava BG",
    role: "Lead Developer",
    image: VaibhavPic,
    social: {
      linkedin: "https://www.linkedin.com/in/vaibhav-b-g-284b63346",
      twitter: "https://twitter.com",
      github: "https://github.com",
    },
  },
];

export default teamData;
