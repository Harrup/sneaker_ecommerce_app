'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'PageController.home')
Route.get('/about', 'PageController.about')

//products
Route.get('/products', 'ProductController.index')
Route.get('/products/new-arrivals', 'ProductController.newArrivals')
Route.get('/:brand/:subcategory/:name', 'ProductController.show')

//cart
Route.get('/cart/checkout', 'CartController.checkout')

//User Authentication and user account
Route.get('/account', "AuthController.index")
Route.get('/account/change-password',"AuthController.changePassword")
Route.get('/account/login', 'AuthController.login')
Route.get('/account/register', 'AuthController.register')
