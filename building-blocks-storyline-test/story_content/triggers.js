function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6hu2NpD4BHo":
        Script1();
        break;
      case "6imlQHUFcyE":
        Script2();
        break;
      case "5rpnveLpU6B":
        Script3();
        break;
      case "634SUPL5QMg":
        Script4();
        break;
      case "6AyoKy5a1p9":
        Script5();
        break;
      case "5ZtU3080wtY":
        Script6();
        break;
      case "69YKmIU8aYB":
        Script7();
        break;
      case "6ASB8hR85I5":
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
