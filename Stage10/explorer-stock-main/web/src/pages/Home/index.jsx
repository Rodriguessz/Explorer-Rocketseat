import { FiTruck, FiTag, FiShoppingCart } from 'react-icons/fi';

import { Container } from "./styles";
import { Feature } from '../../components/Feature';
import { Header } from '../../components/Header';
import { AccessResources } from '../../utils/AcessRoutes';
import { useAuth } from '../../hooks/auth';

export function Home() {

  const { user } = useAuth();

  return (
    <Container>
      <Header />

      <main>
        <AccessResources  user={user}/>
      </main>
    </Container>
  )
}