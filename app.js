let num = 0;
const btns = document.querySelectorAll('.button2')

btns.forEach(
    btn => {
        btn.addEventListener('click', evt => {
            btn.style.backgroundColor = "grey"
            num = btn.innerHTML
        })
    }
)

const submit = document.querySelector('.button3')

submit.addEventListener('click', evt => {
    submit.style.backgroundColor = 'white'
    submit.style.color = 'orange'
    console.log(evt);
    evt.path[1].innerHTML = `
        <div class="container2">
        <img src="images/illustration-thank-you.svg" class="illustrater" alt="">
        <button class="button button4">You selected ${num} out of 5</button>
        <h1 class="thanks-h">Thank you!</h1>
        <p class="thanks-p">We appreciate you taking the time to give a rating if you ever need more support.Don't hesitate to get in touch</p>
</div>
    `
})