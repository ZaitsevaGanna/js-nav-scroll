class Nav {
  static #HOME_PAGE = 'https://google.com'

  static #back() {
    return history.back()
  }

  static #forward() {
    return history.forward()
  }

  static #reload() {
    return location.reload()
  }

  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }

  static #go = () => {
    try {
      const url = new URL(window.input.value)
      this.#changePage(url.href)
    } catch (e) {
      alert('Введіть коректну адресу')
      console.log(e)
    }
  }

  static #changePage(href) {
    return location.assign(href)
  }
  //  если писать не через стрелковые функции может потерятся контекст(поэтому нужен bind(this))
  static init() {
    window.back.onclick = this.#back.bind(this)
    window.forward.onclick = this.#forward.bind(this)
    window.reload.onclick = this.#reload.bind(this)
    window.home.onclick = this.#home
    window.go.onclick = this.#go

    window.input.value = location.href
  }
}

Nav.init()
