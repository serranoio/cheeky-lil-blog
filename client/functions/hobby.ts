import { StaticImageData } from "next/image";
import coding from "../public/assets/images/coding.jpg";

type Image = StaticImageData | null;

interface HobbyInterface {
  hobbyName: string;
  description: string;
  type: number;
  impact: string;
  goals: string;
  image: Image;
}

export class Hobby implements HobbyInterface {
  hobbyName = "";
  description = "";
  type = 0;
  impact = "";
  image = coding;
  goals = "";
  constructor(
    hobbyName: string,
    description: string,
    type: number,
    goals: string,
    impact: string,
    image: Image
  ) {
    this.hobbyName = hobbyName;
    this.description = description;
    this.type = type;
    this.goals = goals;
    this.impact = impact;
    this.image = image as StaticImageData;
  }
}

export const allHobbies = [
  new Hobby(
    "Coding",
    "I consider coding as a hobby because I did not have to make this new portfolio, yet I still did. I genuinely enjoy the process of constantly learning and solving new tasks. That's what separates this occupation from the rest - it will never be repetitive. You might reuse your redux toolkit you used from the last project, but it will never be the same code.",
    0,
    "I want to master full-stack web development. I want to be on the forefront of the newest web-dev technology.",
    "This will lead my life towards respect in the web development industry and with my peers.I cannot wait.",
    coding
  ),
  new Hobby(
    "Reading",
    "In September of 2021, I went plant shopping. We were out in Wicker Park, Chicago. My friends and I felt intellectual that day and stopped by a book store on the way back. I stumbled across the book that started it all, The 7 Habits of Highly Effective People. It opened my eyes to gain a reading habit. From there, I read the 5 AM Club - the book that changed my life.",
    1,
    "I try to read every night before bed. When the weather is nice outside, it is irresistable to   ",
    "Knowledge is power",
    coding
  ),
  new Hobby(
    "Financial Freedom",
    "To realize my dreams in my future, I want to be financially free. Why spend 1 hour of my week volunteering when I could be working to improve myself in every moment so that in the future my capital could help way more people?",
    2,
    "By When I'm 30, I seek to be financially free. I have multiple avenues of financial freedome with multiple investing buckets planned out, I just need time to execute.",
    "The impact on my life is that it would allow me to grace the planet with even more value. I seek to be a venture philanthropist.",
    coding
  ),
  new Hobby(
    "Nature",
    "They say that all of life answers are hidden within nature, and that is true. Nature has convergently evolved the dependent variable for optimizing mathematical formulas for a reason. The golden ratio, e, and pi, all are inherent to the laws of the universe. If there exists mathematically principles that govern the way that plants should grow, then there must be a right way to live... ",
    3,
    "More nature walks. I want to live closer to the hemisphere so that I can get the optimal amount of sun all year around.",
    "impact",
    coding
  ),
  new Hobby(
    "Fitness",
    "I do a 10 minute HIIT workout everyday, weightlift 5-6 times a week. I want to start doing yoga. I want to get an ice bath so I can be more temperature resistant.",
    4,
    "goals",
    "High producing individuals are individuals with high energy. Maximally effective people are in shape.",
    coding
  ),
  new Hobby(
    "Podcast",
    "In order to be influenci",
    5,
    "goals",
    "impact",
    coding
  ),
  new Hobby(
    "Public Speaking",
    "In order to be influencial, I must be good at public speaking. I love challenging myself to captivate the audience in every story I tell.",
    6,
    "I am in this club called Toastmasters. My goal is to win Toastmasters International for the international speech contest.",
    "I want to be influencial.",
    coding
  ),
  new Hobby(
    "Self-Improvement",
    "There's many other things that I wish to include into this, one being meditation. The art of mindfulness is a skill that will take you to the stratosphere, as slowing down your life will allow you to move with haste.",
    6,
    "I know this might sound funny, but I actually want to get to the point where I can control my internal body temperature. First and foremost, it won't happen if you don't believe in it.",
    "An element to coding is creating solutions to problems that you've never seen before. Your brain does this the best when it is searching through connections within the subconcious parts of your thinking. To put this simply, have you ever tried to debug something for an hour straight fail, took a 10 minute break, and then discover the problem right away? That is the art of mindfulness; thinking about your thinking.",
    coding
  ),
];

export const getComingSoon = (type: number): boolean => {
  if (type === 2 || type === 5) return true;

  return false;
};