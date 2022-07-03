export function Songs({
    forestTheme,
    rainTheme,
    coffeTheme,
    fireplaceTheme,
    volumeRangeForest,
    volumeRangeRain,
    volumeRangeCoffe,
    volumeRangeFirePlace
})
{
    function setVolume(currentTheme,value){  //Função global que será utilizada em todas as funções
                                            //de reprodução de som: 
                                            //-currentTheme= musica atual;value= Seletor do input 
                                            //de volume.value, obs: value é um propriedade do js.
        currentTheme.volume= value / 100;
    }


    function forestSong(){
        forestTheme.play()
        
        volumeRangeForest.addEventListener('change', function()
            {
            setVolume(forestTheme,volumeRangeForest.value)
    
            }
        )

    }

    function rainSong(){
      
        rainTheme.play()

        volumeRangeRain.addEventListener('change', function()
            {
            setVolume(rainTheme,volumeRangeRain.value)
            
            }
        )
    }

    function coffeSong(){
        // let coffeTheme=new Audio("./Cafeteria.wav") 
        coffeTheme.play()

        volumeRangeCoffe.addEventListener('change', function()
            {
            setVolume(coffeTheme,volumeRangeCoffe.value)
            
            }
        )
    }

    function fireplaceSong(){
        // let fireplaceTheme=new Audio("Lareira.wav")
        fireplaceTheme.play()

        volumeRangeFirePlace.addEventListener('change', function()
            {
            setVolume(fireplaceTheme,volumeRangeFirePlace.value)
            
            }
        )
    }

    function mute(){
        forestTheme.pause()
        rainTheme.pause()
        coffeTheme.pause()
        fireplaceTheme.pause()
    }

    
    
    function forestCurrentSong(){
        rainTheme.pause()
        coffeTheme.pause()
        fireplaceTheme.pause()
    }

    function rainCurrentSong(){
        forestTheme.pause()
        coffeTheme.pause()
        fireplaceTheme.pause()
    }

    function coffeCurrentSong(){
        rainTheme.pause()
        forestTheme.pause()
        fireplaceTheme.pause()
    }

    function fireplaceCurrentSong(){
        
        rainTheme.pause()
        coffeTheme.pause()
        forestTheme.pause()
    }

    return{
        forestCurrentSong, 
        rainCurrentSong,
        coffeCurrentSong,
        fireplaceCurrentSong,
        forestSong,
        rainSong,
        coffeSong,
        fireplaceSong,
        mute
    }
}