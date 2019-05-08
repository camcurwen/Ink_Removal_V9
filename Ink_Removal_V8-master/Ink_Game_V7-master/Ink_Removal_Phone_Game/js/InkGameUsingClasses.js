
var config = {
    type: Phaser.AUTO,
    width: 1440,
    height: 2960,
    pixelArt: false,

    physics: {
        default: 'matter',
        matter: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [LoginPage, FaceScene, NoRegratzScene]
        
};

var currentScene;

var game = new Phaser.Game(config);