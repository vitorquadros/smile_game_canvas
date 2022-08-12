import Circ from './geometries/Circ';
import { animate } from './handleAnimation';
import { addKeyEvents } from './keyboard';
import { Player } from './geometries/Player';
import { CANVAS, CTX } from './utils/createCanvas';
import { createPoints } from './utils/createPoints';

// DEFINIR NUMERO DE PONTOS NA TELA
let numberOfPoints: number = 1;
// DEFINIR DE QUANTO EM QUANTO TEMPO SURGEM INIMIGOS (segundos)
let enemyRate: number = 0.5;
// DEFINIR VELOCIDADE DO PLAYER
let playerSpeed: number = 10;
// DEFINIR COR DO PLAYER
let playerColor: string = 'red';
// DEFINIR COR DO INIMIGO
let enemyColor: string = 'blue';
// DEFINIR COR DO PONTO
let pointColor: string = 'orange';
// DEFINIR TAMANHO DO INIMIGO
let enemyRadius: number = 20;

let player = new Player(
  CANVAS.width / 2,
  CANVAS.height / 2,
  20,
  playerColor,
  playerSpeed
);
let keys: boolean[] = [];
let enemies: Circ[] = [];
let points: Circ[] = createPoints(numberOfPoints, pointColor);

addKeyEvents(keys, player);

setInterval(() => {
  enemies.push(
    new Circ(Math.random() * CANVAS.width, 0, enemyRadius, enemyColor, 5)
  );
}, 1000 * enemyRate);

animate(CTX, player, enemies, points, keys);
