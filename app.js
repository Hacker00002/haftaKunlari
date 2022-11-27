const allInput = document.querySelector('input')
const allForm = document.querySelector('form')
const allBtn = document.querySelector('button')
const allText = document.querySelector('#textOne')
const allText2 = document.querySelector('#textTwo')
const allReset = document.querySelector('#reset')

allForm.addEventListener('submit', function(e){
    e.preventDefault()

    allText.textContent = allInput.value

    switch(allInput.value){
        case '1':
            allText.textContent = 'Dushanba'
            break
        case '2':
            allText.textContent = 'Seshanba'
            break
        case '3':
            allText.textContent = 'Chorshanba'
            break
        case '4':
            allText.textContent = 'Payshanba'
            break
        case '5':
            allText.textContent = 'Juma'
            break
        case '6':
            allText.textContent = 'Shanba'
            break
        case '7':
            allText.textContent = 'Yakshanba'
            break
        case 'dushanba':
            allText.textContent = 'Dushanba-haftaning 1 kuni'
            break
        case 'seshanba':
            allText.textContent = 'Seshanba-haftaning 2 kuni'
            break
        case 'chorshanba':
            allText.textContent = 'Chorshanba-haftaning 3 kuni'
            break
        case 'payshanba':
            allText.textContent = 'Payshanba-haftaning 4 kuni'
            break
        case 'juma':
            allText.textContent = 'Juma-haftaning 5 kuni'
            break
        case 'shanba':
            allText.textContent = 'Shanba-haftaning 6 kuni'
            break
        case 'yakshanba':
            allText.textContent = 'Yakshanba-haftaning dam olish kuni 😍😍😍'
            break
        default:
            alert("1-7 gaca bolgan hafta kunlar sonini yoki nomini kiriting 😒😒😒😒😒")
            break
    }
})