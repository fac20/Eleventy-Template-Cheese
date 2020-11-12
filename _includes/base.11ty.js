exports.render = (data) => {
  return /*html*/ `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Praise Gouda</title>
          <link rel="stylesheet" href="/assets/style.css">
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
          <link rel="manifest" href="/site.webmanifest">
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
            <marquee  behavior=alternate width="100%" direction="right" height="20px" scrollamount="50">
            🧀      
            </marquee>
          </nav>

          ${data.content}
          <marquee width="100%" direction="right" height="20px" scrollamount="50">
          🧀      
          </marquee>
        </body>
      </html>
    `;
};
