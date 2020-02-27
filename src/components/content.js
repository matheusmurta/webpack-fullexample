/* 
 const content = () => {  return console.log("content")  };
 export default content */
 const content  = () => {
    let textContent = document.getElementById("content");
    textContent.innerHTML = `<div class="flex-container-center">content</div>`;
  };
 export default content