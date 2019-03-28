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
  order( { view } ){
    return view.render('Account/order')
  }
  settings( { view } ){
    return view.render('Account/settings')
  }
}

module.exports = AuthController
