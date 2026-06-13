import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Omar Kandil",
  role: "Unity Game Developer",
  introduction: "Game Developer with a dream of opening his own studio.",
  description: "focused on creating unique experiences, currently targeting Multiplayer game development as well as General Game Development, Interested in VFX creation using shadergraph and particle systems , With proven experience in AI-Training@outlier   Focused on learning and improving to acquire the skillset to achieve my dream of opening my own game studio.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/Omar Kandil CV.pdf`,
  uiUri: `${process.env.PUBLIC_URL}/files/UI.pdf`,
  links: {
    github: "https://github.com/Omarjellyfish",
    itchIO: "https://NAME.itch.io",
    linkedIn: "https://www.linkedin.com/in/omar-kandil-jf/",
  }
};

export const games: Game[] = [{
    name: "simple 2d platformer",
    description: `simple 2d platformer.
    `,
    genres: ["Platformer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/Omarjellyfish/match-master" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/2D-Platformer/2D-Platformer-Jump.png", type: MediaType.Image },
      { source: "/images/games/2D-Platformer/2D-Platformer.mp4", type: MediaType.Video },
      { source: "/images/games/2D-Platformer/2D-Platformer-JumpZone.png", type: MediaType.Image },
    ],
  },

  {
    name: "Top-down hotline miami style prototype",
    description: `Inspired by hotline miami, implementing similar level layout but in a dark enviroment.
    `,
    genres: ["Action", "Topdown Shooter", "horror"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/Omarjellyfish/match-master" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/TopDown/TopDownEnemies.png", type: MediaType.Image },
      { source: "/images/games/TopDown/TopdownShooter.mp4", type: MediaType.Video },
      { source: "/images/games/TopDown/TopDownRoom.png", type: MediaType.Image },
      { source: "/images/games/Topdown/TopDownShooterCar.png", type: MediaType.Image },

    ],
  },
  {
    name: "simple 2d platformer",
    description: `simple 2d platformer.
    `,
    genres: ["Platformer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/Omarjellyfish/match-master" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/2D-Platformer/2D-Platformer-Jump.png", type: MediaType.Image },
      { source: "/images/games/2D-Platformer/2D-Platformer.mp4", type: MediaType.Video },
      { source: "/images/games/2D-Platformer/2D-Platformer-JumpZone.png", type: MediaType.Image },
    ],
  },

  {
    name: "Top-down hotline miami style prototype",
    description: `Inspired by hotline miami, implementing similar level layout but in a dark enviroment.
    `,
    genres: ["Action", "Topdown Shooter", "horror"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/Omarjellyfish/match-master" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/TopDown/TopDownEnemies.png", type: MediaType.Image },
      { source: "/images/games/TopDown/TopdownShooter.mp4", type: MediaType.Video },
      { source: "/images/games/TopDown/TopDownRoom.png", type: MediaType.Image },
      { source: "/images/games/Topdown/TopDownShooterCar.png", type: MediaType.Image },

    ],
  },

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
    name: "Blind Leap",
    description: `its a strategic puzzle game where you place walls to direct the player towards the goal

you can equip walls using 1,2,3 num keys

left clicking to place the wall and left clicking to pick it up

red walls are normal bounce walls, green are speed walls, and L shaped walls direct the player in a specific direction

there are currently 5 levels in the game

A game made for a 2 day minijam using SFML and Box2d Only
    `,
    genres: ["Puzzles", "Strategy"],
    platforms: [Platform.Windows],
    engine: GameEngine.CPP,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/Hobafizo/ITI-Game-MiniJam" },
      { source: LinkImageSource.ItchIo, url: "https://omarjellyfish.itch.io/blind-leap" },
    ],
    media: [
      { source: "/images/games/BlindLeap/Level.png", type: MediaType.Image },
      { source: "/images/games/BlindLeap/BlindLeap.mp4", type: MediaType.Video },
      { source: "/images/games/BlindLeap/MainMenu.png", type: MediaType.Image },
      { source: "/images/games/BlindLeap/Pause.png", type: MediaType.Image },

    ],
  },
  {
    name: "FPS Movement game",
    description: `An FPS game where u have movement mechanics, interactions with the enviroment and abilities.`,
    genres: ["FPS", "Movement"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/Omarjellyfish/FPS-Movement-Game" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/fps/fps1.png", type: MediaType.Image },
      { source: "/images/games/fps/fps.mp4", type: MediaType.Video },
      { source: "/images/games/fps/fps2.png", type: MediaType.Image },
      { source: "/images/games/fps/fps3.png", type: MediaType.Image },

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
  },
  {
    name: "Maze Game using sfml only",
    description: `A maze game made with sfml and C++ only.
    `,
    genres: ["Maze", "C++"],
    platforms: [Platform.Windows],
    engine: GameEngine.CPP,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/Omarjellyfish/MazeGame" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/sfmlMaze/MazeGame.png", type: MediaType.Image },
      { source: "/images/games/sfmlMaze/win.png", type: MediaType.Image },

    ],
  },
  {
    name: "first person Maze Game using OpenGLonly",
    description: `A maze game made with OpenGL and C++ only.
    `,
    genres: ["Maze", "C++"],
    platforms: [Platform.Windows],
    engine: GameEngine.CPP,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/Omarjellyfish/MazeOpenGL" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/openGLMaze/maze1.png", type: MediaType.Image },
      { source: "/images/games/openGLMaze/maze2.png", type: MediaType.Image },

    ],
  },
  {
    name: "Web battleship game ",
    description: `classic battle ship game made with html css js`,
    genres: ["guessing", "..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Web,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/Omarjellyfish/Projects" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/battleship/battle1.png", type: MediaType.Image },
      { source: "/images/games/battleship/battleship.mp4", type: MediaType.Video },
      { source: "/images/games/battleship/battle2.png", type: MediaType.Image },

    ],
  },
  {
    name: "offline dino game ",
    description: `chrome dino game using python with opengl and turtle`,
    genres: ["jumping", "..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Other,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/Omarjellyfish/Projects" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/dino/dino1.png", type: MediaType.Image },
      { source: "/images/games/dino/dino.mp4", type: MediaType.Video },
      { source: "/images/games/dino/dino2.png", type: MediaType.Image },
      { source: "/images/games/dino/dino3.png", type: MediaType.Image },

    ],
  }
];
