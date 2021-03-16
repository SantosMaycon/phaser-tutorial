import SkyImage from "../assets/sky.png";
import GroundImage from "../assets/platform.png";
import StarImage from "../assets/star.png";
import BombImage from "../assets/bomb.png";
import DudSprite from "../assets/dude.png";

class SceneGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image("sky", SkyImage);
    this.load.image("ground", GroundImage);
    this.load.image("star", StarImage);
    this.load.image("bomb", BombImage);
    this.load.spritesheet("dude", DudSprite, {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    this.add.image(0, 0, "sky").setOrigin(0, 0);
  }
}

export default new SceneGame();
