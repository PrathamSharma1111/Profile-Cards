const buttons = document.querySelectorAll('.color_button');
// console.log(buttons)
const body = document.querySelector("body");
const cardContainer = document.getElementById('card-container')
const skills = document.getElementById('skills')
const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const image = document.getElementById('image')

console.log(skills)

buttons.forEach((button) => {
    console.log(button)
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)

        switch (e.target.id) {
            case "green":    
                // color 1: #a3b18a
                body.style.backgroundColor = '#a3b18a'
                cardContainer.style.color = '#a3b18a'
                // color 2: #344e41
                cardContainer.style.backgroundColor = '#344e41'
                skills.style.color = '#344e41'
                b1.style.color = '#344e41'
                b2.style.color = '#344e41'
                b1.style.border = '1px solid #344e41'
                b2.style.border = '1px solid #344e41'

                // color 3: #dad7cd
                skills.style.backgroundColor = '#dad7cd'
                b1.style.backgroundColor = '#dad7cd'
                b2.style.backgroundColor = '#dad7cd'

                b3.style.border = '1px solid #dad7cd'
                b3.style.color = '#dad7cd'
                image.style.border = '1px solid #dad7cd'
                break;

            case "violet":
                // color 1: #F8EAD8
                body.style.backgroundColor = '#F8EAD8'
                cardContainer.style.color = '#F8EAD8'
                // color 2: #A7727D
                cardContainer.style.backgroundColor = '#A7727D'
                skills.style.color = '#A7727D'
                b1.style.color = '#A7727D'
                b2.style.color = '#A7727D'
                b1.style.border = '1px solid #A7727D'
                b2.style.border = '1px solid #A7727D'

                // color 3: #EDDBC7
                skills.style.backgroundColor = '#EDDBC7'
                b1.style.backgroundColor = '#EDDBC7'
                b2.style.backgroundColor = '#EDDBC7'
                b3.style.border = '1px solid #EDDBC7'
                b3.style.color = '#EDDBC7'
                image.style.border = '1px solid #EDDBC7'
                break;

            case "blue":
                // color 1: #e1e5f2
                body.style.backgroundColor = '#e1e5f2'
                cardContainer.style.color = '#e1e5f2'
                // color 2: #022b3a
                cardContainer.style.backgroundColor = '#022b3a'
                skills.style.color = '#022b3a'
                b1.style.color = '#022b3a'
                b2.style.color = '#022b3a'
                b1.style.border = '1px solid #022b3a'
                b2.style.border = '1px solid #022b3a'
                // color 3: #bfdbf7
                skills.style.backgroundColor = '#bfdbf7'
                b1.style.backgroundColor = '#bfdbf7'
                b2.style.backgroundColor = '#bfdbf7'
                b3.style.border = '1px solid #bfdbf7'
                b3.style.color = '#bfdbf7'
                image.style.border = '1px solid #bfdbf7'
                break;

            case "yellow":
                // color 1: #fff9b3
                body.style.backgroundColor = '#fff9b3'
                cardContainer.style.color = '#fff9b3'
                // color 2: #303030
                cardContainer.style.backgroundColor = '#303030'
                skills.style.color = '#303030'
                b1.style.color = '#303030'
                b2.style.color = '#303030'
                b1.style.border = '1px solid #303030'
                b2.style.border = '1px solid #303030'
                // color 3: #ffff98
                skills.style.backgroundColor = '#ffff98'
                b1.style.backgroundColor = '#ffff98'
                b2.style.backgroundColor = '#ffff98'
                b3.style.border = '1px solid #ffff98'
                b3.style.color = '#ffff98'
                image.style.border = '1px solid #ffff98'
                break;



        }
    })
})