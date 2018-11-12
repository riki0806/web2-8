var li = document.createElement('li');
li.textContent='アイテム';
document.getElementById('list').appendChild(li);

for(var i = 1; i < 10; i++){
  var li = document.createElement('li');
  li.textContent = i + '回目';
  document.getElementById('list').appendChild(li);
}

var HP=100;
while(0 < HP){
  var li =document.createElement('li');
  var damage = Math.floor(Math.random()* 100);
  HP -= damage;
  HP = (HP < 0) ? 0; HP;
  li.textContent = damage + 'のダメージを受けた。残りHP:' + HP;
  document.getElmentById('while').appendChild(li);
}
