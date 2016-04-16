# Ludum Dare 35 Entry

Here we go! Theme is shapeshift.

designdoc:

Pacanoid

An arkanoid-pacman mashup where the bricks shapeshift into pellets as you hit them and the player paddle shapeshifts into pacman to eat the pellets and complete the level.

user stories:
    as a paddle, I can move along the the bottom of the screen, left-right only.
    
    as pacman, I can freely move in all directions eating pellets and bricks that have been fully transformed into pellets

    when I hit a brick (square) with the ball, the brick changes state towards a pellet (round)
    
    when I hit a brick 4 times, the brick visually changes into a pellet
    
    when I hit the (transform button) when the ball is near or touching the paddle, I eat the ball and transform into pacman.
    
    
description:
    
    the playfield will consists of a mixture of brick and paths of pellets, and somewhere within the field will be an exit that you must reach as pacman to proceed to the next level.
    
powerups:

    must be eaten by pacman. paddle will deflect them. 
    
    Rotate playfield
        entire playfield will be rotated 90 left or right
        
    Reversal:
        entire playfield will flip state, pellets will become blocks, blocks become pellets. Rare. 
    
    
    