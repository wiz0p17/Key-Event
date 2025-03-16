const insert = document.querySelector('#sub-container');


window.addEventListener('keydown',(e) => {

    insert.innerHTML = `
    <div class= "event">
    <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " "? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    
  </table>
  </div>`
    
})