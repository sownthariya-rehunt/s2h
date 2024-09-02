const menu_data = [
  {
    id: 1,
    has_dropdown: false,
    title: "Home",
    link: "/",
    // sub_menus: [
      // { link: "/", title: "Home One" },
      // { link: "/home-two", title: "Home Two" },
      // { link: "/home-three", title: "Home Three" },
    // ],
  },
  {
    id: 2,
    has_dropdown: false,
    title: "About",
    link: "/about",
  },
  // {
  //   id: 3,
  //   has_dropdown: true,
  //   title: "Service",
  //   link: "#",
  //   sub_menus: [
  //     { link: "/service-one", title: "Service 01" },
  //     { link: "/service-two", title: "Service 02" },
  //     { link: "/ac-service", title: "AC Service" },
  //     { link: "/window-cleaning", title: "Window Cleaning" },
  //     { link: "/office-cleaning", title: "Office Cleaning" },
  //     { link: "/commercial-cleaning", title: "Commercial Cleaning" },
  //     { link: "/house-cleaning", title: "House Cleaning" },
  //     { link: "/car-cleaning", title: "Car Cleaning" },
  //   ],
  // },
  {
    id: 4,
    has_dropdown: true,
    title: "Service",
    link: "#",
    sub_menus: [
      {
        link: "/ac-service",
        title: "AC Service",
        has_dropdown: true,
        sub_menus: [
          { link: "/ac-service", title: "AC Cleaning" },
          { link: "/ac-service", title: "AC Maintenance" },
        ],
      },
      {
        link: "/window-cleaning",
        title: "Plumbing",
        has_dropdown: true,
        sub_menus: [
          { link: "/window-cleaning", title: "Leakage repair" },
          { link: "/window-cleaning", title: "Gneral Repair" },
        ],
      },
      {
        link: "/house-cleaning",
        title: "Cleaning",
        has_dropdown: true,
        sub_menus: [
          { link: "/house-cleaning", title: "House cleaniing" },
          { link: "/house-cleaning", title: "Office Cleaning" },
        ],
      },
      {
        link: "/commercial-cleaning",
        title: "Home Appliance Re-pair",
        has_dropdown: true,
        sub_menus: [
          { link: "/commercial-cleaning", title: "Fridge" },
          { link: "/commercial-cleaning", title: "Gas Stove" },
          { link: "/commercial-cleaning", title: "Microwave oven" },
        ],
      },
      {
        link: "/office-cleaning",
        title: "LadiesSaloon",
        has_dropdown: true,
        sub_menus: [
          { link: "/office-cleaning", title: "Hair Cutting & Colouring" },
          { link: "/office-cleaning", title: "Kerotin treatment" },
          { link: "/office-cleaning", title: "Nail Treatment" },
          { link: "/office-cleaning", title: "Nail Colouring" },
        ],
      },
      {
        link: "/car-cleaning",
        title: "Car Service",
        has_dropdown: true,
        sub_menus: [
          { link: "/car-cleaning", title: "Car wash at home" },
          { link: "/car-cleaning", title: "car Oil change" },
          { link: "/car-cleaning", title: "car towing" },
        ],
      },
      
    ],
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Pages",
    link: "#",
    sub_menus: [
      { link: "/team", title: "Team" },
      { link: "/team-details", title: "Team Details" },
      { link: "/project", title: "Project" },
      { link: "/project-details", title: "Project Details" },
      { link: "/pricing", title: "Pricing" },
      { link: "/testimonial", title: "Testimonial" },
      { link: "/gallery-one", title: "Gallery 01" },
      { link: "/gallery-two", title: "Gallery 02" },
      { link: "/gallery-details", title: "Gallery Details" },
      { link: "/client", title: "Client" },
      { link: "/faq", title: "Faq" },
      { link: "/error", title: "404 Error" },
    ],
  },
  // {
  //   id: 6,
  //   has_dropdown: true,
  //   title: "Blog",
  //   link: "/#",
  //   sub_menus: [
  //     { link: "/blog", title: "Blog" },
  //     { link: "/blog-grid", title: "Blog Grid" },
  //     { link: "/blog-list", title: "Blog List" },
  //     { link: "/blog-standard", title: "Blog Standard" },
  //     { link: "/blog-details", title: "Blog Details" },
  //   ],
  // },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
];
export default menu_data;
