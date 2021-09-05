const XHR = async (method, url, params = {}, headers = {}) => {
    // ----------------- ENTER YOUR CODE HERE -----------------
    // API를 호출하는 General 코드를 작성하라
    // --------------------------------------------------------
    const result = await axios({
        method: method,
        url: url,
        data: params,
        params: params,
        headers: headers,
    })
    return result
}

const validateEmail = (email) => {
    let regExp =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    return regExp.test(email)
}
// const submit = (e) => {
//     e.preventDefault()
//     let email = document.getElementById('email')
//     if (validateEmail(email.value)) {
//         alert('Email is correct format')
//     } else {
//         alert('Email is not correct format return false.')
//     }
//     form1.addEventListener('submit', submit)
// }
const change = (e) => {
    let submit = document.getElementById('submit')
    if (e.value.length > 12) submit.value = '제출'
}

const login = async () => {
    const inputEmail = document.querySelector('input[name="email"]')
    const inputPassword = document.querySelector('input[name="password"]')
    const email = inputEmail.value
    const password = inputPassword.value
    const response = await XHR('post', 'http://127.0.0.1:3714/login', {
        email: email,
        password: password,
    })
    if (response.data.result) {
        const token = response.data.token
        document.cookie = `token=${token}`
        location.reload()
    } else {
        alert('계정을 찾을 수 없습니다. 다시 입력해주세요.')
        location.reload()
    }
}

const listing = async () => {
    const cookietoken = document.cookie.split('=')
    const token = cookietoken[1]
    const response = await XHR(
        'get',
        `http://127.0.0.1:3714/cheaktoken`,
        {},
        {
            token: token,
        }
    )
    const loginDiv = document.createElement('label')
    const section = document.querySelector('section')
    const div = section.querySelector('div')
    const jbBtnText = document.createTextNode(response.data + '님 환영합니다!')
    loginDiv.append(jbBtnText)
    document.body.append(loginDiv)
    section.insertBefore(loginDiv, div)
}

const logout = async () => {
    document.cookie =
        document.cookie + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;'
    location.reload()
}
;(async () => {
    await listing()
})()
