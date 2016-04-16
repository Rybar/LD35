Game = {};
var w = 600;
var h = 400;

Game.Boot = function (game) {};

Game.Boot.prototype = {
    preload: function () {
        game.stage.backgroundColor = "#030303";
        //anything needed for loading screen goes here
    },

    create: function() {
        this.game.state.start('Load');
    }
};

Game.Load = function (game) {};

Game.Load.prototype = {
    preload: function() {
        label2 = game.add.text(Math.floor(w/2)+0.5, Math.floor(h/2)-15+0.5, 'loading...', { font: '30px Arial', fill: '#fff' });
        label2.anchor.setTo(0.5, 0.5);
        label3 = game.add.text(Math.floor(w/2)+0.5, Math.floor(h/2)-30+0.5, game.load.progress + "%", { font: '30px Arial', fill: '#fff' });
        //init loading bar

        //load game assets
    },

    create: function () {
        game.state.start('Menu');
    }
}

