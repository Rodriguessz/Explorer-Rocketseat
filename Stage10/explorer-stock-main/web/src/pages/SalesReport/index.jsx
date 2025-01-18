import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function SalesReport() {

  useEffect((
    
  ) => {
    async function fetchSalesReport(){
      const  { data } = await api.get("/sales", { withCredentials: true})
      console.log(data)
    } 
    
    fetchSalesReport();

  }, [])

  return (
    <Container>
      <h1>Relatório de Vendas</h1>
    </Container>

  )
}