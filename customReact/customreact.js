const reactElement = {
type: 'a',
props:{
    href: 'https://google.com',
    target : '_blank'
},
children: 'Click me'
}
const mainConainer =document.querySelector('#root')
 customRender(reactElement, mainConainer)