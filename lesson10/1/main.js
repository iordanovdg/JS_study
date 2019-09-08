function DomElement (selector, height, width, bg, fontSize) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.backgroundColor = bg;
	this.fontSize = fontSize;
}

DomElement.prototype.mymethod = function(){
	let body = document.querySelector('body');
	if(this.selector[0] === '.') {
		let div = document.createElement("div");
		div.innerHTML = 'любой текст';
		div.style.cssText = `height:${this.height}; width: ${this.width}; background-color: ${this.backgroundColor}; font-size: ${this.fontSize} `;
		body.appendChild(div);
	} 
	if (this.selector[0] === '#') {
		let p = document.createElement("p");
		p.innerHTML = 'любой текст2';
		p.style.cssText = `height:${this.height}; width: ${this.width}; background-color: ${this.backgroundColor}; font-size: ${this.fontSize} `;
		body.appendChild(p);
	}

}

let obj = new DomElement('#test', '150px', '150px', '#ccc', '18px' );

obj.mymethod();
console.log(obj);

