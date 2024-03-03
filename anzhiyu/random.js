var posts=["posts/86c75619.html","posts/177574ba.html","posts/12da5a1b.html","posts/35779054.html","posts/ef0aaf19.html","posts/d25cdecd.html","posts/5fc129b0.html","posts/2930152c.html","posts/6c6b907f.html"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };