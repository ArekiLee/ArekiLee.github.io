var posts=["posts/35779054.html","posts/177574ba.html","posts/5fc129b0.html"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };