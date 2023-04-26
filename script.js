//your JS code here. If required.
let tbody = document.getElementById("output");
let initial = document.createElement('tr');
initial.setAttribute('id', 'loading');
let load = document.createElement('td');
load.colSpan = 2;
load.innerText = "Loading..."
initial.appendChild(load);
tbody.appendChild(initial);

function getRandom(){
	let random = Math.floor((Math.random()*3)+1);
	return random;
}

// console.log(getRandom());
let start = Date.now();
let strt1 = Date.now();
let promise1 = new Promise((resolve)=>{
	let timeout = getRandom()*1000
	setTimeout(()=>{
		resolve("resolve1");
	}, timeout)
});


let strt2 = Date.now();
let promise2 = new Promise((resolve)=>{
	let timeout = getRandom()*1000
	setTimeout(()=>{
		resolve("resolve2");
	}, timeout)
});


let strt3 = Date.now();
let promise3 = new Promise((resolve)=>{
	let timeout = getRandom()*1000
	setTimeout(()=>{
		resolve("resolve3");
	}, timeout)
});


let promises = [promise1, promise2, promise3];
 
async function resolveAll(){
	await promise1;
	let time1 = Math.floor((Date.now() - strt1)/1000);
	await promise2;
	let time2 = Math.floor((Date.now() - strt2)/1000);;
	await promise3;
	let time3 = Math.floor((Date.now() - strt3)/1000);;
	await Promise.all(promises);
	let total = (Date.now() - start)/1000;
	
	tbody.removeChild(tbody.firstElementChild);
	
	let cur1 = document.createElement('tr');
	let prmname1 = document.createElement('td');
	let taken1 = document.createElement('td');
	prmname1.innerText = "Promise 1";
	taken1.innerText = time1;
	cur1.appendChild(prmname1);
	cur1.appendChild(taken1);
	tbody.appendChild(cur1);
	
	let cur2 = document.createElement('tr');
	let prmname2 = document.createElement('td');
	let taken2 = document.createElement('td');
	prmname2.innerText = "Promise 2";
	taken2.innerText = time2;
	cur2.appendChild(prmname2);
	cur2.appendChild(taken2);
	tbody.appendChild(cur2);
	
	let cur3 = document.createElement('tr');
	let prmname3 = document.createElement('td');
	let taken3 = document.createElement('td');
	prmname3.innerText = "Promise 3";
	taken3.innerText = time3;
	cur3.appendChild(prmname3);
	cur3.appendChild(taken3);
	tbody.appendChild(cur3);
	
	let cur4 = document.createElement('tr');
	let prmname4 = document.createElement('td');
	let taken4 = document.createElement('td');
	prmname4.innerText = "Total";
	taken4.innerText = total;
	cur4.appendChild(prmname4);
	cur4.appendChild(taken4);
	tbody.appendChild(cur4);
}

resolveAll();

// function resolveAll(){
// 	tbody.removeChild(tbody.firstElementChild);
// 	let h = document.createElement('p');
// 	h.innerText = getRandom()*1000;
// 	document.body.appendChild(h);
// 	let res = getRandom()*1000
// 	console.log(res);
// }

// resolveAll();

