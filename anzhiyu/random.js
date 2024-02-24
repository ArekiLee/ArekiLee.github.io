var posts=["posts/5fc129b0.html","posts/177574ba.html","posts/35779054.html"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };