/**
 * Created by conor on 12/10/16.
 */

function playSound(e) {
    const AUDIO = document.querySelector(`audio[data-key = '${e.keyCode}']`);
    const KEY = document.querySelector(`.key[data-key = '${e.keyCode}']`);
    //Stop the function from running if AUDIO key doesn't exist
    if (!AUDIO) return;
    //Rewind to start to play consecutively
    AUDIO.currentTime = 0;
    AUDIO.play();

    //Add class in vanilla JS
    KEY.classList.add('playing');
}


    
    function removeTransition(e) {
        //Skip if it is not a transform
        if(e.propertyName !== 'transform') return;
        //This will refer to the 'key'
        this.classList.remove('playing');
    }
    
    const KEYS = document.querySelectorAll('.key');
    KEYS.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
