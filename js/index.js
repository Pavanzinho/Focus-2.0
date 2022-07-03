
import {Controls} from "./control.js"
import {Songs} from "./songs.js"

//Buttons
let  buttonPlay= document.querySelector('.play')
let  buttonStop=document.querySelector('.stop')
let  buttonMoreMinutes=document.querySelector('.add-minutes') 
let  buttonLessMinutes=document.querySelector('.subtract-minutes')
let  buttonForest=document.querySelector('.forest-theme')
let  buttonRain=document.querySelector('.rain-theme')
let  buttonCoffe=document.querySelector('.coffe-theme')
let  buttonFirePlace=document.querySelector('.fireplace-theme')
let  bodyDarkMode=document.querySelector('.body-dark-mode')
let  buttonDarkMode= document.querySelector('.buttonDarkMode')
let  buttonWhiteMode=document.querySelector('.buttonWhiteMode')

//Variáveis para controle do Timer.
let controlMinutes=document.querySelector('.minutes')
let controlSeconds=document.querySelector('.seconds')
let TimerTimeOut;
let newMinutes;
let minutes=controlMinutes.textContent
let currentMinutes=25;
let currentSeconds=0;
 
//Variáveis para controle de som.

let volumeRangeForest=document.querySelector('.volume-forest')
let volumeRangeRain=document.querySelector('.volume-rain')
let volumeRangeCoffe=document.querySelector('.volume-coffe')
let volumeRangeFirePlace=document.querySelector('.volume-firePlace')
let buttonMute=document.querySelector('.mute')





//Configurações do temporizador.
function updateDisplay(){
    currentSeconds=currentSeconds===undefined ? 0:currentSeconds
    currentMinutes=currentMinutes===undefined ? 0 : currentMinutes
    
    controlMinutes.textContent=String(currentMinutes).padStart(2, "0")
    controlSeconds.textContent=String(currentSeconds).padStart(2, "0")
}


function defineMinutes(){
    
    currentMinutes=Number(prompt("Quantos minutos ?"))
    updateDisplay()
}



function start(){
    defineMinutes()
    updateDisplay()
    
}

start(); // definição dos minutos/jogar prompt na tela.



function countDown(){
    TimerTimeOut=setTimeout(function(){
        // let minutes=Number(controlMinutes.textContent)
        // let seconds=Number(controlSeconds.textContent)
        let finish=currentMinutes<=0 && currentSeconds<=0

        updateDisplay()
        
        if(currentSeconds<=0){
            currentSeconds=5
            --currentMinutes
        }
        
        if(finish){
            
            return
        }

        currentSeconds= currentSeconds-1
        updateDisplay()
        

        countDown();
    
    
    },1000)
}






//SONS


//Variáveis que contêm os aúdios.
let forestTheme=new Audio( "./Audios/Floresta.wav ")
let rainTheme= new Audio("./Audios/Chuva.wav")
let coffeTheme=new Audio("./Audios/Cafeteria.wav") 
let fireplaceTheme=new Audio("./Audios/Lareira.wav")
   


    
    // function setVolume(currentTheme,value){
    //         currentTheme.volume= value / 100;       //Função global que será utilizada em todas as funções
    //                                                 //de reprodução de som: 
    //                                                 //-currentTheme= musica atual;value= Seletor do input 
    //                                                 //de volume.value, obs: value é um propriedade do js.

    
    
    // }
    // function forestSong(){
    //     // let forestTheme=new Audio( "./Floresta.wav ")
    //     forestTheme.play()
        
    //     volumeRangeForest.addEventListener('change', function()
    //         {
    //         setVolume(forestTheme,volumeRangeForest.value)
            
    //         }
    //     )

    // }

    // function rainSong(){
      
    //     rainTheme.play()

    //     volumeRangeRain.addEventListener('change', function()
    //         {
    //         setVolume(rainTheme,volumeRangeRain.value)
            
    //         }
    //     )
    // }

    // function coffeSong(){
    //     // let coffeTheme=new Audio("./Cafeteria.wav") 
    //     coffeTheme.play()

    //     volumeRangeCoffe.addEventListener('change', function()
    //         {
    //         setVolume(coffeTheme,volumeRangeCoffe.value)
            
    //         }
    //     )
    // }

    // function fireplaceSong(){
    //     // let fireplaceTheme=new Audio("Lareira.wav")
    //     fireplaceTheme.play()

    //     volumeRangeFirePlace.addEventListener('change', function()
    //         {
    //         setVolume(fireplaceTheme,volumeRangeFirePlace.value)
            
    //         }
    //     )
    // }



//Variáveis para refatoração:
let controls=Controls(
    { 
        buttonForest,
        buttonRain,
        buttonCoffe,
        buttonFirePlace,
        bodyDarkMode,
        buttonDarkMode,
        buttonWhiteMode,
        buttonPlay,
        buttonStop,
        buttonMoreMinutes,
        buttonLessMinutes
    }
)

let songs=Songs(
    {
        forestTheme,
        rainTheme,
        coffeTheme,
        fireplaceTheme,
        volumeRangeForest,
        volumeRangeRain,
        volumeRangeCoffe,
        volumeRangeFirePlace
    }
)



//EVENTOS ; Funções que serão executadas ao clicar nos buttons respectivos

buttonDarkMode.addEventListener('click', function(){
    controls.controlDarkMode()
    }   
)

buttonWhiteMode.addEventListener('click', function(){
    controls.controlWhiteMode()
    }  
)


buttonPlay.addEventListener('click', function(){
    countDown();
    }
)


buttonStop.addEventListener('click', function(){
    clearTimeout(TimerTimeOut)
    updateDisplay(newMinutes,0)
    }
)

buttonMoreMinutes.addEventListener('click', function(){
    currentMinutes=currentMinutes+10
    updateDisplay()
    }
)

buttonLessMinutes.addEventListener('click', function(){
    currentMinutes=currentMinutes-10
    updateDisplay()
    }
)

buttonForest.addEventListener('click', function()
    {
    songs.forestSong()
    controls.controlForest()

    // Pausando as outras musicas ao clicar
    songs.forestCurrentSong()
    buttonMute.classList.remove('muteAfterClick')
    
    }  
)

buttonRain.addEventListener('click',function(){
    songs.rainSong()
    controls.controlRain()

    // Pausando as outras musicas ao clicar
    songs.rainCurrentSong()
    buttonMute.classList.remove('muteAfterClick')
    }
)

buttonCoffe.addEventListener('click',function(){
    songs.coffeSong()
    controls.controlCoffe()
    
    // Pausando as outras musicas ao clicar
    songs.coffeCurrentSong()
    buttonMute.classList.remove('muteAfterClick')
    }
)

buttonFirePlace.addEventListener('click',function(){
    songs.fireplaceSong()
    controls.controlFirePlace()
    
    // Pausando as outras musicas ao clicar
    songs.fireplaceCurrentSong()
    buttonMute.classList.remove('muteAfterClick')
    }
)

buttonMute.addEventListener('click', function(){
    songs.mute()
    buttonMute.classList.add('muteAfterClick')
    controls.controlMute()

})