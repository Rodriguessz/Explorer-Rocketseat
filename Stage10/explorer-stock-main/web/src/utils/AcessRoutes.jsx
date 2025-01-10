import { FiTruck, FiTag, FiShoppingCart } from 'react-icons/fi';

//Routes
import { AdminRoutes } from "../routes/admin.routes";
import { CustomerRoutes } from "../routes/customer.routes";

//Components
import { Feature } from '../components/Feature';



export function AccessRoutes({ user }){
    
    const avaiableRoutes = {
        customer: <CustomerRoutes />,
        admin: <AdminRoutes />
    }


    return(
        <>
            {avaiableRoutes[user.role]}
        </>
    )
}

export function AccessResources({user}){

    const avaiableResources = {
        customer: [ 
            <Feature title="Produto" icon={FiTag} to="/product" key="R1"/>,
    ],
        admin: 
        [ 
            <Feature title="Produto" icon={FiTag} to="/product" key="R1"/>,
            <Feature title="Fornecedores" icon={FiTruck} to="/suppliers" key="R2" />,
            <Feature title="Relatório de vendas" icon={FiShoppingCart} to="/sales-report" key="R3" />
        ],

    }
    
    return(
        <>
            {avaiableResources[user.role].map((resource, index) => resource)}
        </>
    )
}