function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6i52aUAnZcp":
        Script1();
        break;
      case "6A9wNwA1CNT":
        Script2();
        break;
      case "5h8Q1V8alIq":
        Script3();
        break;
      case "6bRkwjtkHmo":
        Script4();
        break;
      case "6cCwJmiwYCV":
        Script5();
        break;
      case "6Xl2CBh47bf":
        Script6();
        break;
      case "5htiltANAX3":
        Script7();
        break;
      case "5mTpwC701dT":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  const target = object('5qhnFy1wEn6');
const duration = 250;
const easing = 'ease-out';
const id = '6N7uZmZp168';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5qhnFy1wEn6');
const duration = 250;
const easing = 'ease-out';
const id = '6N7uZmZp168_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5ykjWCQlAhg');
const duration = 250;
const easing = 'ease-out';
const id = '5rCYALz5LrO';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5ykjWCQlAhg');
const duration = 250;
const easing = 'ease-out';
const id = '5rCYALz5LrO_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('6XOrtgt8spj');
const duration = 250;
const easing = 'ease-out';
const id = '6EPt3eYeQoD';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('6XOrtgt8spj');
const duration = 250;
const easing = 'ease-out';
const id = '6EPt3eYeQoD_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('5hUzFwwg4Jb');
const duration = 250;
const easing = 'ease-out';
const id = '6iscI7t6jp2';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('5hUzFwwg4Jb');
const duration = 250;
const easing = 'ease-out';
const id = '6iscI7t6jp2_reverse';
const growAmount = 0;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
