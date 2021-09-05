const findall = async () => {
    const inputTel = document.querySelector('input[name="tel"]')
    const inputUsername = document.querySelector('input[name="username"]')
    const tel = inputTel.value
    const username = inputUsername.value
    const response = await XHR(
        'get',
        `http://127.0.0.1:3714/findall?tel=${tel}&username=${username}`
    )
    if (response.data.result) alert(`아이디 : ${response.data.email}`)
    else alert('계정을 찾을 수 없습니다. 다시 입력해주세요.')
}
