const heading = React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},[React.createElement('h1',{id:"heading1"},"this is heading 1"),React.createElement('h1',{id:"heading2"},"this is heading 2")]))

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(heading);