const dirBtn = document.getElementById('dir-btn')
const direcRes = document.getElementById('dir-resume')
const closeDir = document.getElementById('close-dir')

const eduBtn = document.getElementById('edu-btn')
const eduRes = document.getElementById('edu-res')
const closeEdu = document.getElementById('close-edu')

const authBtn = document.getElementById('writer-btn')
const playRes = document.getElementById('writer-res')
const closeWrit = document.getElementById('close-writer')

const featBtn = document.getElementById('feature-more')
const featBody = document.getElementById('feature-body')
const featClose = document.getElementById('feature-close')
const featBlurb = document.getElementById('feat-blurb')

// const recOne = document.getElementById('recent-one')
// const recOneBtn = document.getElementById('r-one-more')
// const recOneClose = document.getElementById('r-one-close')
// const recOneBlurb = document.getElementById('rec-one-blurb')

// const recTwo = document.getElementById('recent-two')
// const recTwoBtn = document.getElementById('r-two-more')
// const recTwoClose = document.getElementById('r-two-close')
// const recTwoBlurb = document.getElementById('rec-two-blurb')

// const recThree = document.getElementById('recent-three')
// const recThreeBtn = document.getElementById('r-three-more')
// const recThreeClose = document.getElementById('r-three-close')
// const recThreeBlurb = document.getElementById('rec-three-blurb')

dirBtn.addEventListener('click', function(){
    direcRes.style.display = 'block'
})
closeDir.addEventListener('click', function(){
    direcRes.style.display = 'none'
})
eduBtn.addEventListener('click', function(){
    eduRes.style.display = 'block'
})
closeEdu.addEventListener('click', function(){
    eduRes.style.display = 'none'
})
authBtn.addEventListener('click', function(){
    playRes.style.display = 'block'
})
closeWrit.addEventListener('click', function(){
    playRes.style.display = 'none'
})

featBtn.addEventListener('click', function(){
    featBtn.style.display = 'none';
    featBlurb.style.display = 'none';
    featBody.style.display = 'block';
})
featClose.addEventListener('click', function(){
    featBody.style.display = 'none';
    featBlurb.style.display = 'block';
    featBtn.style.display = 'block';
})
// recThreeBtn.addEventListener('click', function(){
//     recThreeBlurb.style.display = 'none';
//     recThreeBtn.style.display = 'none';
//     recThree.style.display = 'block';
// })
// recThreeClose.addEventListener('click', function(){
//     recThree.style.display = 'none';
//     recThreeBlurb.style.display = 'block';
//     recThreeBtn.style.display = 'block';
// })

// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         To : 'moozek2u@gmail.com',
//         From : document.getElementById('email').value,
//         Subject : 'New Message From Website',
//         Body : "Name: " + document.getElementById('name').value
//         + "<br> Email: "  + document.getElementById('email').value
//         + "<br> Message: " + document.getElementById('message').value,
//     }).then(
//       message => message('Message Sent Successfully')
//     );
// }
