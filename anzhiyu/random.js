var posts=["posts/86c75619.html","posts/177574ba.html","posts/35779054.html","posts/ef0aaf19.html","posts/12da5a1b.html","posts/6c6b907f.html","posts/5fc129b0.html","posts/d25cdecd.html","posts/2930152c.html","posts/6c7d87d6.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };