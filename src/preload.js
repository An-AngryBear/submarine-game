'use strict';

import { game } from './game';

function preload() {
    game.load.image('Sky', './assets/Sky.jpg');
    game.load.image('ground', './assets/platform.png');
    game.load.image('star', './assets/star.png');
    game.load.spritesheet('dude', './assets/dude.png', 32, 48);
}

export { preload }; 
