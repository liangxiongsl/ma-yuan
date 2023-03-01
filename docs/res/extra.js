// 快捷键(导航)
keyboard$.subscribe(function(key) {
    // 判断模式类型, 按键的值
    if (key.mode === "global" && key.type === "x") {
        /* Add custom keyboard handler here */
        key.claim() 
    }
})

// 可排序表(数据表)
document$.subscribe(function() {
  var tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(function(table) {
    new Tablesort(table)
  })
})

// MathJax(配置3/3)
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

document$.subscribe(() => { 
  MathJax.typesetPromise()
})


// 添加标签
// function get(str){
// 	return document.createElement(str)
// }
// var x = get('li')
// var y = get('p')
// x.setAttribute('class', 'md-select__item')
// y.setAttribute('class', 'md-select__link')
// y.appendChild(document.createTextNode('屌屌屌'))
// x.appendChild(y)
// document.getElementsByClassName('md-select__list')[0].appendChild(x);
//

function g(str){
	return document.getElementsByTagName(str)
}

// 改变标题(h1,h2)背景（按c 或 鼠标移动）
function refleshColor(flag){
	var h1 = g('h1');
	
	for(i=0; i<h1.length; ++i){
		if(flag == 0){
			h1[i].style.background = 'red'
		}else h1[i].style.background = 'white'
	}
	var h2 = g('h2');
	for(i=0; i<h2.length; ++i){
		if(flag == 0){
			h2[i].style.background = 'cyan'
		}else h2[i].style.background = 'white'
	}
	var h3 = g('h3');
	for(i=0; i<h3.length; ++i){
		if(flag == 0){
			h3[i].style.color = 'blue'
		}else h3[i].style.color = 'black'
	}
}
var flag = 0;
refleshColor(flag)
document.onmousemove = function(){
	refleshColor(flag)
}
document.onkeypress = function(e){
	if(e.key == 'c'){
		refleshColor(flag = flag==0 ? 1 : 0)
	}
}

// 添加导航标签
function insertAfter(curNode, newNode){
    curNode.parentNode.insertBefore(newNode,curNode.nextElementSibling);
}
var obj = document.createElement('div')
obj.innerHTML = `<div>
	<a styles="display: table-cell"></a>
</div>`

var end = document.getElementsByClassName('md-header__option');
end = end[end.length-1];
insertAfter(end, obj)


