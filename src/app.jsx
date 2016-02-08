import networkFinder from './state/reducers/networkFinderReducer.jsx'
import NetworkFinderContainer from './containers/NetworkFinderContainer.jsx'
import CytoFramework from 'cyto-framework'
require("./styles/app.scss")

console.log(CytoFramework)

var cyto = new CytoFramework({ networkFinder })

cyto.dev(document.getElementById('devtools'))
cyto.render(document.getElementById('frame'), NetworkFinderContainer)
