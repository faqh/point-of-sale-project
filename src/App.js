import ProductCard from './components/ProductCard'
import CardItem from './components/CardItem'
import ListMenu from './components/ListMenu'
import CalculateBox from './components/CalculateBox'
import Account from './components/Account'
import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import * as theme from "./styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
`
const MenuContainer = styled.div`
  width:  20%;
`
const ListMenuContainer = styled.div`
  width: 100%;
  height: 85%;
  padding: 1.5rem 0;
  padding-left: 1rem;
  background: ${props => props.theme.light};
  border-radius: 0.5rem;
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.11);
  margin-bottom: 1rem;

`
const AccountContainer = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${props => props.theme.light};
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.11);
`
const Test = styled.div`
  width: 54%;
`
const ProductContainer = styled.div`
  width:  100%;
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const MainCartContainer = styled.div`
  width:  24%;
  height: 100%;
  position: relative;
  background: ${props => props.theme.light};
`
const FirstCartContainer = styled.div`
  width: 100%;
  height: 75%;
  padding: 1rem 1rem;
  background: ${props => props.theme.light};
  border-radius: 0.5rem;
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.11);
  margin-bottom: 1rem;
  color: #444444;
`
const SecondCartContainer = styled.div`
  width: 100%;
  background: ${props => props.theme.light};
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.11);
  border-radius: 0.5rem;  
`

function App() {
  const products = useSelector(state => state.product.products)
  const carts = useSelector(state => state.product.carts)
  const menu = useSelector(state =>   state.product.categories)
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MenuContainer>
          <ListMenuContainer>
            {/* {products.filter(item =>  */}
              <ListMenu/>

            {/* // )} */}
          </ListMenuContainer>
          <AccountContainer>
            <Account />
          </AccountContainer>
        </MenuContainer>
        <Test>
          <Scrollbars>
            <ProductContainer>
              {products.map(product => 
                <ProductCard data-simplebar key={product.id} item={product}/>
                )}
            </ProductContainer>
            </Scrollbars>
        </Test>
        <MainCartContainer>
          <FirstCartContainer>
            <Scrollbars>
            {/* {carts.length > 8 ? <OverScroll>{carts.map(item => <CardItem key={item.id} item={item}/>)}</OverScroll> : <OverHidden>{carts.map(item => <CardItem key={item.id} item={item}/>)}</OverHidden>} */}
            <p style={{fontWeight: 'bold', textAlign: 'left', marginBottom: '1rem'}}>{carts ? `Order Carts (${carts.length})` : ``}</p>
            {carts.map(item => 
              <CardItem key={item.id} item={item}/>              
            )}
            </Scrollbars>
          </FirstCartContainer>
          <SecondCartContainer>
            <CalculateBox />
          </SecondCartContainer>          
        </MainCartContainer>        
      </Container>
    </ThemeProvider>
  );
}

export default App;
