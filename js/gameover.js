Game.Over = function (game) { };

Game.Over.prototype = {
    create: function () {
        game.camera.follow(null);
        game.camera.setPosition(0,0);

        this.cursor = this.game.input.keyboard.createCursorKeys();

        var label = game.add.text(w/2, h-100, 'you died.\npress UP to restart', { font: '25px Arial', fill: '#fff', align: 'center' });
        label.anchor.setTo(0.5, 0.5);
        label.alpha = 0;
        game.add.tween(label).delay(500).to({ alpha: 1}, 500).start();

        game.add.tween(label).to({ angle:1 }, 500).to({ angle:-1 }, 500).loop().start();

        this.time = this.game.time.now + 500;
    },

    update: function() {
        if (this.cursor.up.isDown && this.time < this.game.time.now)
            game.state.start('Play');
    }
};