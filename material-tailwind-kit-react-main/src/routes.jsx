import { Home, Profile, SignIn, SignUp , Form, Product, Newbalance, Adidas, Converse, Jordan, ProductDetail, ProductPage, Cart, AddressForm, Summary,Payment,OrderTransaction} from "@/pages";
import { featuresData, featuresDatas, teamData, contactData, datanb, dataadidas, datajordan, dataconvers } from "@/data";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "products ▼",
    path: "/product",
    element: <Product/>,    
    children: [
      {
        name: "New Balance",
        path: "/product/newbalance",
        icon: "/img/nbhome.png",
      },
      {
        name: "Adidas",
        path: "/product/adidas",
        icon: "/img/adidashome.png",
      },
      {
        name: "Converse",
        path: "/product/converse",
        icon: "../../img/converse/convers1.png",
      },
      {
        name: "Nike Jordan",
        path: "/product/jordan",
        icon: "../../img/jordan/jordan1.png",
      },
    ],
   
  },
  {
    name: "transaction",
    path: "/profile",
    element: <Profile />,
  },
  
  {
    path: "/form",
    element: <Form />,
  },

    
  {
    path: "/product/newbalance",
    element: <Newbalance />,
  },

  {
    path: "/product/adidas",
    element: <Adidas />,
  },
 
  {
    path: "/product/converse",
    element: <Converse />,
  },

  {
    path: "/product/jordan",
    element: <Jordan />,
  },
  {
    path: "/product-detail/:category/:title",
    element: <ProductPage />
    
  },
  {
    path: "/cart",
    element: <Cart />
    
  },

  {
    path: "/address",
    element: <AddressForm />
    
  },

  {
    path: "/summary",
    element: <Summary />
    
  },

  {
    path: "/payment",
    element: <Payment />
    
  },

  {
    path: "/transactions",
    element: <OrderTransaction />
    
  },


];

export default routes;
