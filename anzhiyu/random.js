var posts=["posts/35779054.html","posts/177574ba.html","posts/d25cdecd.html","posts/2930152c.html","posts/5fc129b0.html","posts/6c6b907f.html","posts/ef0aaf19.html"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };