'use strict'

class AuthController {
  login({ view }){
    return view.render('/Account/login')
  }
  register({ view }){
    return view.render('/Account/register')
  }
}

module.exports = AuthController
