var posts=["posts/177574ba.html","posts/5fc129b0.html","posts/35779054.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };