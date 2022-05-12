/* global bootstrap: false */

document.addEventListener('DOMContentLoaded', (event) => {
  var dl = localStorage.getItem("dl-init");
  var gcs = localStorage.getItem("gcs-init");

  if(dl == undefined){
    value = '{"page_type": "blog post", "article_category": "analytics", "author": "krista seiden"}';
  }

  if(gcs == undefined){
    gcs = '{"ad_storage": "denied", "analytics_storage": "denied","functionality_storage": "denied","personalization_storage": "denied", "security_storage": "granted", "wait_for_update": 500 }';
  }

  try{
    if(document.location.pathname == "/"){
      JSON.parse(dl);
      document.getElementById("dl-init").innerHTML = dl;
    }else{
      JSON.parse(dl);
      document.getElementById("gcs-init").innerHTML = gcs;
    }
    return true;
  }catch(e){
    console.log("that's not valid object");
    return;
  }
})


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

function saveToLocalStorage(item){
  var value;

  if(item == "dl"){
    value = document.getElementById("dl-init").value;
  }else if(item == "gcs"){
    value = document.getElementById("gcs-init").value
  }

  console.log(event);
  
  try{
    JSON.parse(value);
  }catch(e){
    console.log("that's not valid object");
    return;
  }

  if(item == "dl"){
    localStorage.setItem("dl-init",value);
  }else if(item == "gcs"){
    localStorage.setItem("gcs-init",value);
  }

  return true;
}

(function (){
  var dl = localStorage.getItem("dl-init");
  var gcs = localStorage.getItem("gcs-init");

    try{
      if(document.location.pathname == "/"){
        JSON.parse(dl);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(JSON.parse(dl));
      }else{
        JSON.parse(gcs);
        function gtag() { window.dataLayer.push(arguments); }
        gtag("consent", "default", JSON.parse(gcs));
      }

      return true;
    }catch(e){
      console.log("that's not valid object");
      return;
    }
})();