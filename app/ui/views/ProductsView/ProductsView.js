import React, {useEffect, useContext} from 'react';
import {ScrollView} from 'react-native';
import {Appbar, Button, Card, Paragraph} from 'react-native-paper';
import styled from 'styled-components/native';
import {productsResponse} from '../../../data/actions/ProductActions';
import {ApiService} from '../../../data/services/ApiService';
import {ProductContext} from '../../provider/ProductProvider';
import { NumberService } from '../../../data/services/NumberService';

const ViewContainer = styled.SafeAreaView`
  flex: 1;
`;

const ProductCard = styled(Card)`
  margin: 7px;
`;

export default function ProductsView(props) {
  const [{productList}, productDispatch] = useContext(ProductContext);

  useEffect(() => {
    ApiService.get('/products').then(productList =>
      productDispatch(productsResponse(productList)),
    );
  });

  return (
    <ViewContainer>
      <Appbar.Header>
        <Appbar.Content title={'Produtos'} />
      </Appbar.Header>
        <ScrollView>
          {productList.map(item => (
            <ProductCard key={item.id}>
              <Card>
                <Card.Cover
                  source={
                    {uri: item.image}
                  }
                />
                <Card.Title
                  title={item.name}
                  right={props => <Button>Selecionar</Button>}
                />
                <Card.Content>
                  <Paragraph>{NumberService.currency(item.price)}</Paragraph>
                </Card.Content>
              </Card>
            </ProductCard>
          ))}

          {/* <Card>
            <Card.Cover
              source={{
                uri: 'https://www.correiodosmunicipios-al.com.br/wp-content/uploads/2022/04/BolodeBrigadeiro4-e1648825943494.jpg',
              }}
            />
            <Card.Title
              title={'Bolo Brigadeiro'}
              right={props => <Button>Selecionar</Button>}
            />
            <Card.Content>
              <Paragraph>R$ 80,00 Kg</Paragraph>
            </Card.Content>
          </Card> */}
        </ScrollView>
    </ViewContainer>
  );
}
