import Router from "./modules/Router.js"


// Instanciando a nossa classe Router

const router = new Router()

router.addRoute("/", "./pages/home.html")
router.addRoute("/universe", "./pages/universe.html")
router.addRoute("/exploration", "./pages/exploration.html")

router.handleRoute()
router.replaceState()


window.route = ()=> router.route()