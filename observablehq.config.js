// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "Raided Lost Ark",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    // { name: "Logs", path: "/loa-logs" },
    //{name: "Analysis", path: "/loa-analysis"},
    { name: "진행", path: "/prog" },
    { name: "향후", path: "/future" }
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: `
    <link rel="icon" href="AndrexTransparentSquare.png" type="image/png" sizes="32x32">
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RNR717Y3QC"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
    
      gtag("config", "G-RNR717Y3QC");
    </script>

    <script type="text/javascript">
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "nyin3rlqic");
    </script>
  `,

  // Some additional configuration options and their defaults:
  theme: ["cotton", "ink"], // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  footer: "A Raided Project",
  toc: false, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  root: "src", // path to the source root for preview
  // output: "dist", // path to the output root for build
  search: false,
};
