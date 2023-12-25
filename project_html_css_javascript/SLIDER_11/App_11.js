const slides = document.querySelectorAll(".slide")
// console.log(slides)
var counter = 0;
slides.forEach(
    (slide,index) => {
        // slide.style.left = `${index * 100}%`
        slide.style.bottom = `${index * 100}%`
    }
)

const goPrev = () => {
    // alert()
    counter--
    slideImage()
}

const goNext = () => {
    // alert()  iska use hame button chal rhi hai yha nhi isliye hame alert ka use karte hai
    counter++
    slideImage()
}

const slideImage = () =>{
    slides.forEach(
        (slide) =>{
            // slide.style.transform = `translateX(-${counter * 100}%)`
            slide.style.transform = `translateY(+${counter * 100}%)`
        }
    )
}