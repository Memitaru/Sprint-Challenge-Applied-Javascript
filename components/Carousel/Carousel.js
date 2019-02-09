class Carousel {

    constructor(element) {
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.images = document.querySelectorAll('.carousel-img');
        this.currentIndex = 0;
        this.images[this.currentIndex].style.display = 'block';
        this.leftButton.addEventListener('click', () => this.left());
        this.rightButton.addEventListener('click', () => this.right());
        setInterval(() => this.right(), 3000);
    }

    left(){
        this.images.forEach(image => image.style.dispay = 'none');

        if (this.currentIndex === 0){
            this.currentIndex = this.images.length -1;
        } else {
            this.currentIndex = this.currentIndex -1;
        }
        
        this.images[this.currentIndex].style.display = 'block';
    }

    right(){
        this.images.forEach(image => image.style.display = 'none');

        if (this.currentIndex === this.images.length -1){
            this.currentIndex = 0
        } else {
            this.currentIndex = this.currentIndex +1;
        }

        this.images[this.currentIndex].style.display = 'block';
    }

}

let carousels = document.querySelectorAll('.carousel').forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
