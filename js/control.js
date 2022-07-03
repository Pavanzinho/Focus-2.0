export function Controls({
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
})

{

    function controlForest(){
        buttonForest.classList.add('button-after-click')
        buttonRain.classList.remove('button-after-click')
        buttonCoffe.classList.remove('button-after-click')
        buttonFirePlace.classList.remove('button-after-click')
    }

    function controlRain(){
        buttonCoffe.classList.remove('button-after-click')
        buttonRain.classList.add('button-after-click')
        buttonForest.classList.remove('button-after-click')
        buttonFirePlace.classList.remove('button-after-click')
    }

    function controlCoffe(){
        buttonCoffe.classList.add('button-after-click')
        buttonRain.classList.remove('button-after-click')
        buttonForest.classList.remove('button-after-click')
        buttonFirePlace.classList.remove('button-after-click')
    }

    function controlFirePlace(){
        buttonCoffe.classList.remove('button-after-click')
        buttonRain.classList.remove('button-after-click')
        buttonForest.classList.remove('button-after-click')
        buttonFirePlace.classList.add('button-after-click')

    }

    function controlDarkMode(){
        bodyDarkMode.classList.add('background_darkMode' ,'colorText_darkMode')
        buttonDarkMode.classList.add('hide')
        buttonWhiteMode.classList.remove('hide')
        buttonPlay.classList.add('background_darkMode')
        buttonStop.classList.add('background_darkMode')
        buttonMoreMinutes.classList.add('background_darkMode')
        buttonLessMinutes.classList.add('background_darkMode')
    }

    function controlWhiteMode(){
        bodyDarkMode.classList.remove('background_darkMode','colorText_darkMode')
        buttonDarkMode.classList.remove('hide')
        buttonWhiteMode.classList.add('hide', 'background_darkMode')
        buttonPlay.classList.remove('background_darkMode')
        buttonStop.classList.remove('background_darkMode')
        buttonMoreMinutes.classList.remove('background_darkMode')
        buttonLessMinutes.classList.remove('background_darkMode')
    }

    function controlMute(){
        buttonForest.classList.remove('button-after-click')
        buttonRain.classList.remove('button-after-click')
        buttonCoffe.classList.remove('button-after-click')
        buttonFirePlace.classList.remove('button-after-click')
    }



    return{
        controlForest,
        controlRain,
        controlCoffe,
        controlFirePlace,
        controlDarkMode,
        controlWhiteMode,
        controlMute
    }
}