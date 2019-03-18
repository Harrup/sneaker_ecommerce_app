'use strict'

class ProductController {
  index({view}){
    return view.render('Products/all')
  }
}

module.exports = ProductController
