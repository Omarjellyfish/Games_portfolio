import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Omar Kandil",
  role: "Unity Game Developer",
  introduction: "Trained at ATHR as a game developer with unity. Experience as an AI data trainer and a MERN stack trainee at DEPI.",
  description: "Flexibilty and creativity makes me distinct from most developers, with my deep understanding of OOP DS and Algorithms makes me able to find my way through most frameworks. having a vast range of experience in different fields due to my work as an AI data trainer where i completed over 200 tasks and became a reviewer on some projects, proving my adaptability to different enviroments and workflows.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/Omar Kandil CV.pdf`,
  links: {
    github: "https://github.com/Omarjellyfish",
    itchIO: "https://NAME.itch.io",
    linkedIn: "https://www.linkedin.com/in/omar-kandil-jf/",
  }
};

export const games: Game[] = [
  {
    name: "MATCH MASTER CLONE",
    description: `a puzzle game inspired by Candy Crush, featuring unique abilities such as adjacent tile explosions, same-color chain clears, and row/column bombs.
    `,
    genres: ["Puzzles", "Matching"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/Omarjellyfish/match-master" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/Match_Master/bigboard.png", type: MediaType.Image },
      { source: "/images/games/Match_Master/matchmaster.mp4", type: MediaType.Video },
      { source: "/images/games/Match_Master/bomb.png", type: MediaType.Image },
      { source: "/images/games/Match_Master/smallboard.png", type: MediaType.Image },
    
    ],
  },
  {
    name: "Flappy Bird Clone ",
    description: `Flappy bird like game with a couple menus`,
    genres: ["clones", "..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/Flappy/flappymenu.png", type: MediaType.Image },
      { source: "/images/games/Flappy/flappy.mp4", type: MediaType.Video },
      { source: "/images/games/Flappy/flappy_end.png", type: MediaType.Image },
      { source: "/images/games/Flappy/flappy_scene.png", type: MediaType.Image },

    ],
  },
  {
    name: "Movement and mechanics prototype ",
    description: `simple movement game including walljumping with grapple rope(grabs objects), box launching and a flashbang`,
    genres: ["movement", "abilities"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/movement/movement1.png", type: MediaType.Image },
      { source: "/images/games/movement/movement.mp4", type: MediaType.Video },
      { source: "/images/games/movement/movement2.png", type: MediaType.Image },

    ],
  }
];