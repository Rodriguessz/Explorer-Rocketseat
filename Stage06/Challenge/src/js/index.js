import Router from "./modules/Router.js"


// Instanciando a nossa classe Router

const router = new Router()

router.addRoute("/", "/src/pages/home.html")
router.addRoute("/universe", "/src/pages/universe.html")
router.addRoute("/exploration", "/src/pages/exploration.html")


// router.replaceState()
router.handleRoute()



window.route = ()=> router.route()

window.onpopstate = () => router.handleRoute()