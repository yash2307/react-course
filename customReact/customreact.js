function customRender(reactElement, container){
   const domElm = document.createElement(reactElement.type)
   domElm.innerHTML = reactElement.childen
    for (const prop in reactElement.props) {
        domElm.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElm)
}
cd 
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    childen: 'Click me to visit Google'
}
const rootContainer = document.querySelector('#root')

customRender(reactElement, rootContainer)