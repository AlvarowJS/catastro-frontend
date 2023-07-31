import { Mail, Home, Upload, Eye, Folder, CreditCard, Users, MessageSquare, File, User, MessageCircle } from "react-feather";

const filteredMenuItems = (role) => {
  const menuItems = [
    {
      id: "fichas",
      title: "Fichas",
      icon: <Home size={20} />,
      navLink: "/fichas",
    },
    {
      id: "users",
      title: "Personal",
      icon: <Users size={20} />,
      navLink: "/personal",
    },
  ];

  // const role = localStorage?.getItem("role");

  return role === "2" ? menuItems?.filter(item => item.id === "inventario" || item.id === "clientes") : menuItems;
}


export default filteredMenuItems;

