const UserMenu = [
  {
    label: " Profile",
    url: "/profilepage",
    // field: "Attorney",
  },
  {
    label: " Attorney",
    url: "/profilepage/search/Attorney",
    field: "Attorney",
  },
];

const AttorneyMenu = [
  {
    label: " Profile",
    url: "/profilepage",
    // field: "Attorney",
  },

  {
    label: " Attorneys",
    url: "/profilepage/search/Attorney",
    field: "Attorney",
  },
  {
    label: " Vendors",
    url: "/profilepage/search/Vendor",
    field: "Vendor",
  },
  {
    label: "Law Firms",
    url: "/profilepage/search/Lawfirm",
    field: "Lawfirm",
  },
];
const VendorMenu = [
  {
    label: " Profile",
    url: "/profilepage",
    // field: "Attorney",
  },
  {
    label: "Vendors",
    url: "/profilepage/search/Vendor",
    field: "Vendor",
  },
  {
    label: "Attorney",
    url: "/profilepage/search/Attorney",
    field: "Attorney",
  },
  {
    label: "Law Firm",
    url: "/profilepage/search/Lawfirm",
    field: "Lawfirm",
  },
];
export const GetMenu = (role) => {
  if (role == "User") {
    return UserMenu;
  } else if (role == "Attorney") {
    return AttorneyMenu;
  } else if (role == "Vendor") {
    return VendorMenu;
  }
};

// export default MenuItems;
