// ** React Imports
import { Outlet } from "react-router-dom";

// ** Core Layout Import
// !Do not remove the Layout import
import Layout from "@layouts/HorizontalLayout";

// ** Menu Items Array
import navigation from "@src/navigation/horizontal";

const HorizontalLayout = ({role, ...props}) => {
  // const [menuData, setMenuData] = useState([])

  // ** For ServerSide navigation
  // useEffect(() => {
  //   axios.get(URL).then(response => setMenuData(response.data))
  // }, [])

  return (
    <Layout menuData={navigation(role)} {...props}
      role={role}
    >
      <Outlet />
    </Layout>
  );
};

export default HorizontalLayout;
