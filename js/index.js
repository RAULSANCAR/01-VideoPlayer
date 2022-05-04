
const $video = document.querySelector('#video')
const $backward = document.querySelector('#backward')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $forward = document.querySelector('#forward')
const $progress = document.querySelector('#progress')

$backward.addEventListener('click', handleBackward)
$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePausa)
$forward.addEventListener('click', handleForward)
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleInput)

function handleBackward(){
    $video.currentTime = $video.currentTime - 10
    console.log('-10', $video.currentTime)
}

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('Play')
}

function handlePausa(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('Pause')
}

function handleForward(){
    $video.currentTime = $video.currentTime + 10
    console.log('+10', $video.currentTime)
}

function handleLoaded(){
    $progress.max = $video.duration
    console.log('Ha cargado mi video', $video.duration)
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
}

function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}