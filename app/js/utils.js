const cl = console.log,
jp = JSON.parse,
js = JSON.stringify,
LS = localStorage,
SS = sessionStorage,
ls = {
  get: function(i){
    return jp(LS.getItem(i))
  },
  set: function(i, e){
    LS.setItem(i, js(e))
  }
},
ss = {
  get: function(i){
    return jp(SS.getItem(i))
  },
  set: function(i, e){
    SS.setItem(i, js(e))
  }
}

$.ajax({
  'url': 'https://www.youporn.com/api/webmasters/search/search=hard&tags%5B0%5D=Teen%2Camateur&thumbsize=medium',
  'contentType': 'application/x-www-form-urlencoded',
  'beforeSend': function (xhr){
     xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
     xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
     xhr.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, X-Requested-With, Session');
   }
})
.done(function() {
  console.log("success");
})
.fail(function() {
  console.log("error");
})
