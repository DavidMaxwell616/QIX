const linewidth = 2;
const speed = 4;
const markersize = 6;
const threshold = 75;
const slowcolor = "#952B0F";
const fastcolor = "#007484";
const yellow = "#FFFF00";
var player;
var startGame;
var gameOver;
const GAME_TOP = 20;
const GAME_BOTTOM = 565;
const GAME_LEFT = 20;
const GAME_RIGHT = 780;
var letters = [];
var font;

var keyUp;
var keyDown;
var keyRight;
var keyLeft;
const KEYCODE_UP = 38;
const KEYCODE_DOWN = 40;
const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;
var textTiles;

const textFrames = {
A : 1,
B : 2,
C : 3,
D : 4,
E : 5,
F : 6,
G : 7,
H : 8,
I : 9,
J : 10,
K : 11,
L : 12,
M : 13,
N : 14,
O : 15,
P : 16,
Q : 17,
R : 18,
S : 19,
T : 20,
U : 21,
V : 22,
W : 23,
Y : 24,
Z : 25,
0 : 26,
1 : 27,
2 : 28,
3 : 29,
4 : 30,
5 : 31,
6 : 32,
7 : 33,
8 : 34,
9 : 35
};
  