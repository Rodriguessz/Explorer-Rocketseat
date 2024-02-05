
import state from "./state.js" //Estado inicial do meu timer
import * as events from "./events.js"

export function start(minutes, seconds){
    state.minutes = minutes
    state.seconds = seconds

    events.registerControls()
}