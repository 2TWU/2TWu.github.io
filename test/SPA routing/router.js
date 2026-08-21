// 參考 : https://stackoverflow.com/questions/65665619/routing-in-a-single-page-appspa-without-framework-just-javascript
// 主要架構 : https://youtu.be/LXg8VYbqrZ0?si=RAecAv4_XlFfT80l

document.addEventListener("DOMContentLoaded",()=>{
  // 要注入的元素
  const contentInject = document.getElementById("content") ;

  // Routing table 路由表
  // --------------
  const routes = {
    "" : "./src/pages/home.html",
    "about" : "./src/pages/about.html",
    "post" : "./src/pages/post.html"
  }

  // 設定路由根節點( 被注入內容的元素 )
  var Routing_root = "./index.html" ;
  
  // 偵測 URL 變化
  // 當 hashchange 發生時觸發將網址變化傳入 loadPage 函式
  window.addEventListener("hashchange",()=>{
    console.log("url change to " + window.location.hash)
    loadPage(window.location.hash);
  })


  // 切換 content 內容
  // 
  function loadPage(hash){
    const page = hash.replace("#","");
    console.log("current page is " + page);
    console.log(routes[page] , "is loading");
    fetch(routes[page])
      .then(response => response.text())
      .then(html => {
        contentInject.innerHTML = html ;
      }
    );

    // contentInject.innerHTML = routes[page] || routes["/"];
  }


  // 初始化，預設先讀 home.html
  loadPage(window.location.hash);




  // 取值測試
  var value = Object.values(routes);
  var skeys = "/"

  // console.log(value);

  // console.log("value is "+routes["/"]);

  // console.log("key is "+skeys+" , value is "+routes[skeys]);
})

