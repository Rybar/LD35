Game.Menu = function (game) { };

Game.Menu.prototype = {
    create: function () {
        this.cursor = this.game.input.keyboard.createCursorKeys();

        var label = game.add.text(w/2, h-50, 'press UP to start', { font: '25px Arial', fill: '#fff' });
        label.anchor.setTo(0.5, 0.5);
        label.alpha = 0;
        game.add.tween(label).delay(300).to({ alpha: 1}, 300).start();
    },

    update: function() {
        if (this.cursor.up.isDown)
            this.game.state.start('Play');
    },
};