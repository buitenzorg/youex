import React, { Component } from "react";
import {
  Container,
  Card,
  CardItem,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text,
  Icon,
  Form,
  Input,
  Item,
  List,
  ListItem
} from "native-base";
import { View, FlatList } from "react-native";
import styles from "./styles";
import PickupList from "./PickupList";

class Pickup extends Component {
  state = {data:[
                  {
                    title:'Home',
                    sub:'Queen Street V no. 18d',
                    fav:true
                  },
                  {
                    title:'Work',
                    sub:'King Street V no. 18d',
                    fav:false
                  },
                  {
                    title:'Dialy Market',
                    sub:'Queen Street V no. 18d',
                    fav:true
                  },
                  {
                    title:'Hospital',
                    sub:'Queen Street V no. 18d',
                    fav:false
                  }
                ]
  }

  iconPress = (e,event) =>{
    const w = 'lel';
  }

  render() {
    const xx = this.state.data.map((item, i) =>{
      return <PickupList title={item.title} sub={item.sub} fav={item.fav} key={i} iconPress={this.iconPress}/>
    })
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Pick Up Location</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form>
            <Item regular>
              <Icon name="pin" />
              <Input placeholder="Pick Up Location"/>
            </Item>
          </Form>

          <Card>
            <CardItem>
              <Body>
                <Item>
                  <Icon name="map" />
                  <Text> Set route from favourite list</Text>
                </Item>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
                <Item>
                  <Icon name="pin" />
                  <Text> Set location on the map</Text>
                </Item>
              </Body>
            </CardItem>
          </Card>
        {xx}
        {/*<FlatList data={this.state.data} renderItem={this.renderItem} />*/}

        </Content>
      </Container>
    );
  }
}

export default Pickup;
