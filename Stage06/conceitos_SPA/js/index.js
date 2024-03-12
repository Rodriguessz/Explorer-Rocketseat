import {Router} from "./router.js"

//Instanciando a nossa classe - Router
const router = new Router()

router.add("/", "Stage06/conceitos_SPA/pages/home.html")
router.add("/about", "Stage06/conceitos_SPA/pages/about.html")
router.add("/contact", "Stage06/conceitos_SPA/pages/contact.html")
router.add(404, "Stage06/conceitos_SPA/pages/404.html")

//Handle Method
router.handle()

//Tornando route um elemento global
window.route = () => router.route()

//Permitindo navegação via setas do browser
window.onpopstate = () => router.handle()








