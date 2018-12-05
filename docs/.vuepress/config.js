module.exports = {
  title: 'Dastuurka',
  description: 'Jamhuuriyadda Federaalka ee Soomaaliya',
  //Displays options for langugaes
  locales: {
    "/": { lang: "Soomaali" },
    "/lang/": { lang: "English" }
  },
  //Displays favicon
  head: [["link", { rel: "icon", href: "/images/Somalia.png" }]],

  themeConfig: {

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dastuurka', link: '/dastuurka/' },
      { text: 'Guide', link: '/guide/' },
      {}
    ],

    sidebar: 'auto'

  }
}