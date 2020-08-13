'use strict'

let next = document.getElementById('com-next');
let prev = document.getElementById('com-prev');
let pos = document.getElementById('com-position');
let count = document.getElementById('com-count');
let slides = Array.prototype.slice.call(document.getElementById('com-top-card').children);
console.log(slides);
console.log(next);
console.log(pos);
let k = 0;


	next.addEventListener('click', ()=>{

		if(true) k=k+1;
			if(k<0) k=2;
			else if(k>2) k=0;

    if(k==0){
    	
    	slides[0].style.display = 'flex';
    	slides[1].style.display = 'none';
    	slides[2].style.display = 'none';
    }
    else if(k==1){
    	
    	slides[0].style.display = 'none';
    	slides[1].style.display = 'flex';
    	slides[2].style.display = 'none';
    }
    else if(k==2){
    	
    	slides[0].style.display = 'none';
    	slides[1].style.display = 'none';
    	slides[2].style.display = 'flex';
    }
    
		
		pos.innerHTML = k+1;
    console.log(k);
    
	})

	prev.addEventListener('click', ()=>{
		if(true) k=k-1;
			
			if(k<0) k=2;
    	else if(k>2) k=0;
    
    if(k==0){
    	slides[0].style.display = 'flex';
    	slides[1].style.display ='none';
    	slides[2].style.display ='none';
    }
    else if(k==1){
    	
    	slides[0].style.display = 'none';
    	slides[1].style.display = 'flex';
    	slides[2].style.display = 'none';
    }
    else if(k==2){
    	
    	slides[0].style.display = 'none';
    	slides[1].style.display = 'none';
    	slides[2].style.display = 'flex';
    }
   
		
		pos.innerHTML = k+1;
		console.log(k);
	})
		

