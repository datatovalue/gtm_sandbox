/* global bootstrap: false */

function pushToDataLayer(event){
  window.dataLayer = window.dataLayer || [];
  var value = document.getElementById("dl-"+event).value;

  console.log(event);
  
  try{
    JSON.parse(value);
  }catch(e){
    console.log("that's not valid object");
    return;
  }

  if(JSON.parse(value).ecommerce != undefined){
    dataLayer.push({"ecommerce": null});
  }

  window.dataLayer.push(JSON.parse(value));
  console.log("data successfully pushed to dataLayer");
  console.log(JSON.parse(value));
}

(function () {
  'use strict'

  // Tooltip and popover demos
  document.querySelectorAll('.tooltip-demo')
    .forEach(function (tooltip) {
      new bootstrap.Tooltip(tooltip, {
        selector: '[data-bs-toggle="tooltip"]'
      })
    })

  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(function (popover) {
      new bootstrap.Popover(popover)
    })

  document.querySelectorAll('.toast')
    .forEach(function (toastNode) {
      var toast = new bootstrap.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Disable empty links
  document.querySelectorAll('[href="#"]')
    .forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault()
      })
    })

  function setActiveItem() {
    var hash = window.location.hash

    if (hash === '') {
      return
    }

    var link = document.querySelector('.bd-aside a[href="' + hash + '"]')
    var active = document.querySelector('.bd-aside .active')
    var parent = link.parentNode.parentNode.previousElementSibling

    link.classList.add('active')

    if (parent.classList.contains('collapsed')) {
      parent.click()
    }

    if (!active) {
      return
    }

    var expanded = active.parentNode.parentNode.previousElementSibling

    active.classList.remove('active')

    if (expanded && parent !== expanded) {
      expanded.click()
    }
  }

  setActiveItem()
  window.addEventListener('hashchange', setActiveItem)
})();

function saveToLocalStorage(){
  var value = document.getElementById("dl-init").value;

  console.log(event);
  
  try{
    JSON.parse(value);
  }catch(e){
    console.log("that's not valid object");
    return;
  }

  localStorage.setItem("dl-init",value);

  return true;
}

(function (){
  var value = localStorage.getItem("dl-init");
  if(value){
    try{
      JSON.parse(value);
    }catch(e){
      console.log("that's not valid object");
      return;
    }
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(JSON.parse(value));

  return true;
})();
