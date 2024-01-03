const guess = document.querySelector('.hidden');
        const btn = document.querySelector('.btn');
        const msg = document.querySelector('.msg');

        const arr = ['git', 'c++', 'python', 'java', 'react', 'mern', 'nodejs', 'expressjs', 'mongodb', 'git', 'github', 'html', 'javascript', 'angular', 'bootstrap', 'tailwind']

        let msgfun = () => {
            let ranword = Math.floor(Math.random() * arr.length)
            let newwrd = arr[ranword]
            return newwrd
        }
        let scrumbleword = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                let temp = array[i]
                // console.log(array[i])
                let j = Math.floor(Math.random() * i)
                // console.log(i)
                // console.log(j)
                array[i] = array[j]
                array[j] = temp
            }
            return array
        }
        let createword;
        let srmword
        let play = false;
        btn.addEventListener('click', () => {
            if (!play) {
                play = true;
                console.log('click');
                btn.innerHTML = 'Guess';
                guess.style.display = "block"
                createword = msgfun()
                srmword = scrumbleword(createword.split(""))
                // console.log(srmword)
                msg.innerHTML = srmword.join("")

            }
            else {
                let checkwrd = guess.value
                if (checkwrd === createword) {
                    msg.innerHTML = `Awesome, it's Correct. It is "${createword}"`
                    play = false;
                    btn.innerHTML = 'Start Again'
                    guess.value = ""
                    guess.style.display = "none"


                }
                else {
                    msg.innerHTML = `Sorry, It's not correct. Plz try again "${srmword.join("")}"`;
                    btn.innerHTML = 'Try Again';
                    guess.value = ""
                }
            }
        })