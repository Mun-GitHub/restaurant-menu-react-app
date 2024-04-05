export type THeaderData = {
  website_title: string;
  logo: {
    url: string;
  };
  navigation_links: {
    link: {
      href: string;
      title: string;
    }[];
  };
};

export type TFooterData = {
  copyright: string;
};

export type THomePageData = {
  sections: {
    home_banner: {
      banner: {
        url: string;
      }[];
    };
  }[];
};

export type TLink = {
  href: string;
  title: string;
};

// COMMENT: Uncomment below lines

export type TDishes = {
  uid: string;
  image: {
     url: string;
   };
   title: string;
 };

 export type TMenu = {
  course_name: string;
   dishes: TDishes[];
 };
