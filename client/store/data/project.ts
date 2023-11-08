// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
export const types: {
  JS: number;
  TS: number;
  HTML: number;
  CSS: number;
  SC: number;
  CSSMOD: number;
  SUPABASE: number;
  POCKETBASE: number;
  GO: number;
  NEXTJS: number;
  REACT: number;
  RESPONSIVE: number;
  LIT: number;
  BUN: number;
  RUST: number;
  WASM: number;
} = {
  JS: 0,
  TS: 1,
  HTML: 2,
  CSS: 3,
  SC: 4,
  CSSMOD: 5,
  SUPABASE: 6,
  POCKETBASE: 7,
  GO: 8,
  NEXTJS: 9,
  REACT: 10,
  RESPONSIVE: 11,
  LIT: 12,
  BUN: 13,
  RUST: 14,
  WASM: 15,
};

export const typesNames = [
  "JS",
  "TS",
  "HTML",
  "CSS",
  "SC",
  "CSSMOD",
  "SUPABASE",
  "POCKETBASE",
  "GO",
  "NEXTJS",
  "REACT",
  "RESPONSIVE",
  "LIT",
  "BUN",
  "RUST",
  "WASM"
];

Object.freeze(types);

interface ProjectInterface {
  area: string;
  projectName: string;
  link: string;
  techStack: number[];
  type: number;
}

export class Project implements ProjectInterface {
  area = "";
  projectName = "";
  link = "";
  techStack = [0];
  description = "";
  type = 0;
  constructor(
    area: string,
    projectName: string,
    link: string,
    techStack: number[],
    description: string,
    type: number
  ) {
    this.area = area;
    this.projectName = projectName;
    this.link = link;
    this.techStack = techStack;
    this.description = description;
    this.type = type;
  }
}

export const allProjects = [ 
  new Project(
    "10/ 8/ 14/ 11",
    "first portfolio",
    "https://davidserranoio.netlify.app/",
    [types.JS, types.HTML, types.CSS, types.RESPONSIVE],
    "This is my first ever project which I made, and it took me a week to make ",
    0
  ),
  new Project(
    "4 / 8  / 8 / 11",
    "The 5 AM Club",
    "https://thereal5amclub.netlify.app/",
    [types.REACT, types.TS, types.CSS, types.RESPONSIVE],
    "I made this the first week of Junior year of college. Class was starting slow, so I decided I can quickly whip something up. From August 10th-August 17th I made this with the intentions of starting the 5 AM Club at my school.",
    1
  ),
  new Project(
    "4 / 1/ 7/ 5",
    "Betsy Giron",
    "https://betsygiron.com/",
    [types.TS, types.CSS, types.HTML],
    "This is my mom's 3D art gallery that I made for her for Christmas!",
    2
  ),
  new Project(
    "12/ 1/ 14/ 8",
    "Tech Chad 10x Developer Brogrammers",
    "https://techchad.netlify.app/",
    [types.TS, types.CSS, types.HTML],
    "For our art class we were tasked to make a stylistic project. So I decided to infuse my beliefs+my humor into one project. I presented it during class with the pictures provided and everyone was laughing. After genuinely explaining the meaning behind the mentality required to be a tech chad, a girl raised her hand and thanked me for helping her realize that CS can be for everyone.",
    3
  ),
  new Project(
    "4/ 5/ 7/ 8",
    "Allbrite Family Dental",
    "https://allbritefamilydental.com/",
    [types.JS, types.HTML, types.CSS, types.RESPONSIVE],
    "This is my second ever web development project. I made this for my mom's dentist :).",
    4
  ),
  new Project(
    "7/ 1/ 10/ -4",
    "Team8s",
    "https://github.com/exortme1ster/teameights",
    [types.REACT, types.JS, types.SC, types.RESPONSIVE],
    "Joining the team in February of 2023, I have contributed quite a bit as we are planning to launch this app over the summer. I have gained a ton of frontend experience with the use of React Query and React Formik. Also, this is my first time working with a designer, and it makes me a better frontend developer since I have to adhere to specific qualities.",
    5
  ),
  new Project(
    "8/ 8/ 10/ 11",
    "Maps With Friends",
    "",
    [types.REACT, types.CSS, types.SUPABASE, types.TS],
    "In my software engineering class at UIC, CS 440, we had to make a project. We decided to make our version of GeoGuessr! We were put into teams of 4, and I contributed to make basically the entire UI apart from the game and how section. I made most of the backend with profiles and login.",
    6
  ),
  new Project(
    "10/ 1/ 12/ 8",
    "Intent",
    "https://github.com/dserra22/intent",
    [types.REACT, types.SUPABASE, types.TS, types.CSS],
    "This is my first ever full stack app, built in React, TypeScript, and Supabase. I genuinely learned a lot from this. Despite the fact that the supabase backend is currently paused because I am using the free-tier, I am proud of how far it has made me come. Supabase backend is paused, and I can restart it if you want.",
    7
  ),
  new Project(
    "1/ 1/ 4/ 6",
    "Accential",
    "https://accential.pages.dev",
    [types.TS, types.GO, types.BUN, types.LIT, types.RUST, types.WASM],
    `
    There is a video posted on the website that explains everything!
    `,
    8
  ),
  new Project(
    "1/ 8/ 4/ 11", 
    "Headifier",
    "https://github.com/serranoio/headifier",
    [types.RUST],
    `Add headers to all of your projects using a neat terminal UI. Written in Rust,
    and this is my first published project on crates.io!
    `,
    9
  ),
  new Project(
    "1/ 6/ 4/ 8", 
    "Soflare",
    "https://github.com/serranoio/soflare",
    [types.GO, types.CSS, types.TS],
    `VERY early in production. Nonetheless it is an exciting project: it automates deployment of backend by
    calling Fly API with fly.toml and an app {name}. The deployed backend API becomes available at: https://{name}.fly.dev/.
    It clones the frontend and sets the Pocketbase instance connection to be https://{name}.fly.dev/ and pushes the change.
    Then it calls the Netlify API to clone the selected repo and deploys it onto Netlify!
    `,
    10
  ),
];
