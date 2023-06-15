const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
    
  })
  
  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
    adadad()
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}


function adadad(){
  // drag = document.querySelectorAll(".container")
  // nod = document.querySelectorAll("p")
  // // drag = d1[0]
  // // console.log(nod[1])
  
  
  // const  d = document.querySelectorAll('.ddd')
  // let arr = Array.from(d)
  
  let dlu = document.getElementsByClassName('ddd').length
  
  // let ad = arr.innerHTML
  
  // console.log(ad)
  
  console.clear()
  console.log(dlu)
for (let i = 0; i < dlu; i++) {
  let d = document.getElementsByClassName('ddd')[i].attributes[0]
  // str = str + i;
  console.log(d)


}
  // let dsdsdd = 
  // console.log(dsdsdd)
}

