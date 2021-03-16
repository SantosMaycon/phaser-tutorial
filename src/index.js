import Phaser from "phaser";
import SceneGame from "./scenes/SceneGame.js";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: SceneGame,
};

const game = new Phaser.Game(config);
