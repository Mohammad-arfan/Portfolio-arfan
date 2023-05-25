console.log("hello world");

let theme = localStorage.getItem('theme')

if (theme ==null){
    setTheme('light')
}
else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')
for ( var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('option clicked:', mode)
        setTheme(mode)
    })
}
function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'css/main.css'
    }
     if(mode == 'blue'){
        document.getElementById('theme-style').href = 'css/blue.css'
    }
     if(mode == 'green'){
        document.getElementById('theme-style').href = 'css/green.css'
    }
     if(mode == 'purple'){
        document.getElementById('theme-style').href = 'css/purple.css'
    }
    localStorage.setItem('theme', mode)
}

// class Episode {
//     constructor(title, duration, hasBeenWatched){
//         this.title = title;
//         this.duration = duration;
//         this.hasBeenWatched = hasBeenWatched;

//     }
// }
// let firstEpisode = new Episode('the story of my life',350, true);
// let secondEpisode = new Episode('the story of our life',350, false);
// let thirdEpisode = new Episode('the story of happy life',350, false);
// console.log(firstEpisode);
// console.log(secondEpisode);
// console.log(thirdEpisode);
let guests = ['sarah' , 'alfie', 'steve'];
console.log(guests[2]);