var posts=["posts/177574ba.html","posts/35779054.html","posts/5fc129b0.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };