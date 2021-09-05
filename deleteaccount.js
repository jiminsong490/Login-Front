const deleteAccount = async () => {
    const inputEmail = document.querySelector('input[name="email"]')
    const inputPassword = document.querySelector('input[name="password"]')
    const email = inputEmail.value
    const password = inputPassword.value

    const response = await XHR('delete', 'http://127.0.0.1:3714/delete', {
        email: email,
        password: password,
    })
    if (response.data.success == true) {
        alert('계정이 성공적으로 탈퇴되었습니다.')
        location.href = 'http://127.0.0.1:5500/index.html'
    } else {
        errorMsg = response.data.errorMsg
        alert(
            `다음과 같은 에러가 발생하여 계정이 성공적으로 탈퇴되지 않았습니다:\n${errorMsg}`
        )
    }
}
