const signUp = async () => {
    const inputEmail = document.querySelector('input[name="email"]')
    const inputPassword = document.querySelector('input[name="password"]')
    const inputTel = document.querySelector('input[name="tel"]')
    const inputUsername = document.querySelector('input[name="username"]')
    const email = inputEmail.value
    const password = inputPassword.value
    const tel = inputTel.value
    const username = inputUsername.value

    const response = await XHR('post', 'http://127.0.0.1:3714/signup', {
        email: email,
        password: password,
        tel: tel,
        username: username,
    })
    if (!response.data.success) {
        alert('이미 있는 아이디 입니다.')
        location.reload()
        return
    } else if (!validateEmail(email)) {
        alert('이메일 형식이 잘못되었습니다. 다시 입력해주세요')
        location.reload()
        return
    }
    alert('회원가입이 성공적으로 완료되었습니다')
    location.href = 'http://127.0.0.1:5500/index.html'
}
