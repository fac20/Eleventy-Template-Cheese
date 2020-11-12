exports.data = {
  layout: "base",
  title: "Contact Us",
};

exports.render = (data) => {
  const posts = data.collections.blog;
  //dynamically build up this string of html
  let postItems = "";
  for (let post of posts) {
    postItems += `<li><a href="${post.url}">${post.data.title}</a></li>`;
  }

  return `
  <h1>Contact us about our blog posts</h1>
  ${postItems}
  <p>Email: hotstuff420@devsloveprotonmail.com</p>`;
};
