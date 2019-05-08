class LoginPage extends Phaser.Scene{
        constructor(){
            super("LoginPage");
        }
    preload() {
        //console.log ("tattoo_game_with_scenes");
        this.load.image('login', 'assets/start.png');
        this.load.image('button', 'assets/placeholder.png');
    }

    create() {
        currentScene = this.sys.config;

        this.add.image(0, 0, 'login').setOrigin(0, 0);
        this.button = this.add.image(230, 920, 'button').setOrigin(0, 0).setInteractive();

        this.input.once('pointerdown', function (pointer) {
            this.scene.start('FaceScene');
        }.bind(this));
     }
           
    update() {      
        
    }

}
