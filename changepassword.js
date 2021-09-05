const changePassword = async () => {
    const inputEmail = document.querySelector('input[name="email"]')
    const inputPassword = document.querySelector('input[name="password"]')
    const changePassword = document.querySelector(
        'input[name="changepassword"]'
    )
    const email = inputEmail.value
    const password = inputPassword.value
    const change = changePassword.value

    const response = await XHR('put', 'http://127.0.0.1:3714/put', {
        email: email,
        password: password,
        changePassword: change,
    })
    if (response.data.success == true) {
        alert('비밀번호가 성공적으로 변경되었습니다.')
        location.href = 'http://127.0.0.1:5500/index.html'
    } else {
        errorMsg = response.data.errorMsg
        alert(`${errorMsg}`)
    }
}
