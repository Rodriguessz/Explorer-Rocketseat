
import { Container } from "./styles";
import { Header } from '../../components/Header';
import { AccessResources } from '../../utils/AcessRoutes';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { useEffect } from 'react';

export function Home() {

  const { user, signOut } = useAuth();

  useEffect(() => {
   async function validateUser(){

      try{
        await api.get("users/validate", {withCredentials: true});
      }catch(error){
        if(error.response?.status === 401) signOut();
      }
    };

    validateUser();
  } , [])

  return (
    <Container>
      <Header />

      <main>
        <AccessResources user={user}/>
      </main>
    </Container>
  )
}