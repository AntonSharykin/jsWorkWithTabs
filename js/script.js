window.addEventListener('DOMContentLoaded',function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info=document.querySelector('.info-header'),
        tabContent=document.querySelectorAll('.info-tabcontent');
    
        function hideTabContent(a){
        for(let i =a;i<tabContent.length;i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }   
    
    hideTabContent(1);

    function showTabContent(b){
                if(tabContent[b].classList.contains('hide')){
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        
    }
    
    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i=0;i<tab.length;i++){
                if(target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

let deadline= '2019-06-14';

function getTimeRemaining(endTime){
    let t=Date.parse(endTime)-Date.parse(new Date()),
    seconds=Math.floor((t/1000)%60),
    minutes=Math.floor(((t/1000)/60)%60),
    hours=Math.floor((t/(1000*60*60)));
    return {
        'total':t,
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds
    };
    //days=Math.floor((t/(1000*60*60*24)));
}

function setClock(id,endTime){
    let timer = document.getElementById('timer'),
    hours = timer.querySelector('.hours'),
    minutes=timer.querySelector('.minutes'),
    seconds=timer.querySelector('.seconds'),
    timeInterval=setInterval(updateClock,1000); 
    function updateClock(){
        let t = getTimeRemaining(endTime);
        hours.textContent=t.hours;
        minutes.textContent=t.minutes;
        seconds.textContent=t.seconds;
        if(t.total<=0) {
            clearInterval();
        }
    }
}

setClock('timer',deadline);

//modal

let more = document.querySelector('.more'),
    overlay=document.querySelector('.overlay'),
    close=document.querySelector('.popup-close');
    more.addEventListener('click',function(){
        overlay.style.display="block";
        this.classList.add('more-splash');
        document.body.style.overflow='hiden';
    });

    close.addEventListener('click',function(){
        overlay.style.display="none";
        more.classList.remove('more-splash');
        document.body.style.overflow='';
    });

  class Options{
      constructor(height=50, width=50, bg='#fff', fontSize=14, textAlign='center'){
        this.height=height;
        this.width=width;
        this.background=bg;
        this.fontSize=fontSize;
        this.textAlign=textAlign;
      }

      createDiv(){
          var optDiv=document.createElement('div');
          
          optDiv.style.width=this.width+"px";
          optDiv.style.height=this.height+"px";
          optDiv.style.background=this.background;
          optDiv.style.fontSize=this.fontSize;
          optDiv.style.textAlign=this.textAlign;
          optDiv.textContent="some text";  
          document.body.appendChild(optDiv);
      }
  }
  
  let div = new Options();
  div.createDiv();

});