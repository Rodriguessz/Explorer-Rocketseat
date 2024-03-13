import {Router} from "./router.js"

//Instanciando a nossa classe - Router
const router = new Router()

router.add("/", "pages/home.html")
router.add("/about", "pages/about.html")
router.add("/contact", "pages/contact.html")
router.add(404, "pages/404.html")

//Replace the initial path - Apenas ao utilizar o live-server
// router.replaceState()

//Handle Method
router.handle()

//Tornando route um elemento global
window.route = () => router.route()

//Permitindo navegação via setas do browser
window.onpopstate = () => router.handle()


