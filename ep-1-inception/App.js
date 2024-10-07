

const parent = React.createElement('h1',{id:"heading",style:{"color":"red"}},[
    React.createElement('div',{id:"child1"},[
        React.createElement('h1',{},"i am h1 from child 1"),
        React.createElement('h2',{},"i am h2 from child 1")
    ]),
    React.createElement('div',{id:"child2"},[
        React.createElement('h1',{},"i am h1 from child 2"),
        React.createElement('h2',{},"i am h2 from child2")
    ])
]);
console.log(parent)
const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);