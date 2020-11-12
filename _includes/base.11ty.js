exports.render = (data) => {
  return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Our site</title>
          <link rel="stylesheet" href="/assets/style.css">
        </head>
        <body>
          <nav>
            <div class="navbar">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact-us">Contact Us</a>
            <div class="dropdown">
                <button class="dropbtn">Blog
                    <i class="fa fa-caret-down"></i>
                </button>
            <div class="dropdown-content">
                <a href="/blog/blog1">Cheese</a>
                <a href="/blog/blog2">Feet</a>
            </div>
            </div>
            </div>
          </nav>
          ${data.content}
        </body>
      </html>
    `;
};
