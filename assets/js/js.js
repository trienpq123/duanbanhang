activeHeart();
function activeHeart() {

    const favorite = document.querySelector('.heart');
   

    favorite.addEventListener('click', () => {
        saveLocal = localStorage.getItem('heart');
        if(saveLocal){
            saveLocal = localStorage.removeItem('heart');   
            favorite.innerHTML = `<i class="fa-solid fa-heart-circle-plus"></i>`
        }else{
            localStorage.setItem('heart', true);
            favorite.innerHTML = `<i class="fa-solid fa-heart">`

        }
        
    })
}