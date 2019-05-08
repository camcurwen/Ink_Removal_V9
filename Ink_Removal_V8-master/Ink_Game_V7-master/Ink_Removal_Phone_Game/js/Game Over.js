//Game Over
class EndGame extends Phaser.Scene{
        constructor(){
            super("EndGame");
        }
    preload() {
        //console.log ("tattoo_game_with_scenes");
        this.load.image('playAgain', 'assets/End_Game.png');
        this.load.image('button', 'assets/Play_Again?.png');
    }

    create() {
        currentScene = this.sys.config;

        this.add.image(0, 0, 'Play_Again?').setOrigin(0, 0);
        this.button = this.add.image(230, 920, 'button').setOrigin(0, 0).setInteractive();

        this.input.once('Play_Again?', function (pointer) {
            this.scene.start('NoRegratzScene');
        }.bind(this));
     }
           
    update() {      
        
    }

}


