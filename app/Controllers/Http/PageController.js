'use strict'

class PageController {
  home({view}){
    return view.render('Pages/home')
  }
  about({view}){
    return view.render('Pages/about')
  }
}

module.exports = PageController
