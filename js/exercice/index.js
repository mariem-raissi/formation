 /*const listusers = [
    { id: 1, name: "Jean Dupont" },
    { id: 2, name: "Claire Martin" },
    { id: 3, name: "Paul Durand" }
  ];

  const listposts = [
    { id: 1, userId: 1, title: "Post 1 de Jean" },
    { id: 2, userId: 1, title: "Post 2 de claire" },
    { id: 3, userId: 2, title: "Post 3 de paul" }
  ];

  const usersEl = document.getElementById("users");
  const postsEl = document.getElementById("posts");

  // Affichage des utilisateurs
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.name;
    usersEl.appendChild(li);

    li.addEventListener("click", () => {
      document
        .querySelectorAll("#users li")
        .forEach(el => el.classList.remove("active"));

      li.classList.add("active");
      afficherPosts(user.id);
    });

    usersEl.appendChild(li);
  });

  // Affichage des posts par utilisateur
  function afficherPosts(userId) {
    postsEl.innerHTML = "";

    const userPosts = posts.filter(p => p.userId === userId);

    if (userPosts.length === 0) {
      postsEl.innerHTML = "<li>Aucun post</li>";
      return;
    }

    userPosts.forEach(post => {
      const li = document.createElement("li");
      li.textContent = post.title;
      postsEl.appendChild(li);
    });
  }*/
 const usersEl=document.getElementById(users);
 usersEl.addEventListener("click",()=>{
  usersEl.querySelectorAll("li")
 })
 usersEl.querySelectorAll("li")  