'use strict'

class AuthController {
  login({ view }){
    return view.render('/Account/login')
  }
  register({ view }){
    return view.render('/Account/register')
  }

  index({ view }){
    return view.render('/Account/index')
  }
  changePassword( { view } ){
    return view.render('Account/changePassword')
  }
}

module.exports = AuthController
