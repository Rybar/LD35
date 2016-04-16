Game.Play = function (game) { };

Game.Play.prototype = {
    preload: function() {

        var ball;
        var paddle;
        var bricks;

        var lives = 5;
        var score = 0;

        var scoreText;
        var livesText;
        var isPacman;
        var ballOnPaddle;

},
    create: function () {

        game.physics.startSystem(Phaser.Physics.ARCADE);

        game.stage.backgroundColor = '#222035';

        isPacman = false;
        ballOnPaddle = true;

        //-----paddle-----

        paddle = game.add.sprite(w/2, h-30, 'spr', 'spr_paddle.png');
        paddle.anchor.set(0.5);
        game.physics.enable(paddle, Phaser.Physics.ARCADE);
        paddle.body.collideWorldBounds = true;
        paddle.body.bounce.set(1);
        paddle.body.immovable = true;


        //-----ball-----

        ball = game.add.sprite(w/2, paddle.y - 24, 'spr', 'spr_ball.png');
        ball.anchor.set(0.5);
        game.physics.enable(ball, Phaser.Physics.ARCADE);
        ball.checkWorldBounds = true;
        ball.body.collideWorldBounds = true;
        ball.body.bounce.set(1);
        //ball.body.velocity.y = 100;


        //----walls/bricks group-------

        bricks = game.add.group();
        bricks.enableBody = true;
        bricks.physicsBodyType = Phaser.Physics.ARCADE;

        this.makeWalls();
        this.makeBricks();

        cursors = game.input.keyboard.createCursorKeys();

        game.input.onDown.add(this.releaseBall, this);

    },

    update: function() {
        paddle.body.velocity.x = 0;
        paddle.body.velocity.y = 0;

        if (cursors.left.isDown)
        {
            paddle.body.velocity.x = -200;
        }
        else if (cursors.right.isDown)
        {
            paddle.body.velocity.x = 200;
        }

        if(isPacman){
            if (cursors.up.isDown)
            {
                paddle.body.velocity.y = -200;
            }
            else if (cursors.down.isDown)
            {
                paddle.body.velocity.y = 200;
            }
        }

        if (paddle.y > 600){
            this.ballLost();
        }


        if(ballOnPaddle){
            ball.body.x = paddle.x;
        }
        else{
            game.physics.arcade.collide(ball, paddle, this.ballHitPaddle, null, this);
            game.physics.arcade.collide(ball, paddle, this.ballHitBrick, null, this);

        }


    },

    makeWalls: function() {

        for(var i = 0; i < 24; i++){
            wall = bricks.create(i*25,0, 'spr', "spr_wallBrick.png");
            //wall.frameName = "spr_wallBrick.png";
        }

        for(i = 1; i < 40; i++){
            wall = bricks.create(0, i*25, 'spr', 'spr_wallBrick.png');
            //wall.frameName = "spr_wallBrick.png";

            wall = bricks.create(23*25, i*25, 'spr', 'spr_wallBrick.png');
            //wall.frameName = "spr_wallBrick.png";
        }
    },
    makeBricks: function() {

        for(var x = 3; x < 21; x++) {
            for(var y = 3; y < 21; y++) {
                brick =  bricks.create(x*25, y*25, 'spr', "spr_brick1.png");
                brick.body.bounce.set(1);
                brick.body.immovable = true;
            }
        }
    },
    ballHitPaddle: function(_ball, _paddle) {

        var delta = 0;

        if (_ball.x < _paddle.x) {
            delta = _paddle.x - _ball.x;
            _ball.body.velocity.x = (-10 * delta);
        }
        else if (_ball.x > _paddle.x) {
            delta = _ball.x - _paddle.x;
            _ball.body.velocity.x = (10 * delta);
        }
        else {
            _ball.body.velocity.x = 2 + Math.random() * 8;
        }
    },

    ballHitBrick: function(_brick, _paddle) {

        _brick.kill();

        score +=100;


    },
    releaseBall: function() {
        if (ballOnPaddle)
        {
            ballOnPaddle = false;
            ball.body.velocity.y = -300;
            ball.body.velocity.x = -75;
        }
    },
    ballLost: function() {
        lives -=1;

        if(lives < 0){
            game.state.start('Over');
        }
        else{
            ballOnPaddle=true;
            ball.reset(paddle.body.x, paddle.y -25);
        }

    },


    pac: function() {

    },
};
