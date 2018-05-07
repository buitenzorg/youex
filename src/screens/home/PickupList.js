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
import { View } from "react-native";
import styles from "./styles";


class PickupList extends Component {
  render() {
    const {title, fav, sub, iconPress} = this.props;
    return(
        <Card>
          <CardItem>
            <Body>
              <View style={styles.radioView}>
                <View style={ styles.header }>
                  <Text style={styles.headerText}>{title}</Text>
                  <Text style={styles.text}>{sub}</Text>
                </View>
                <Right>
                  <Icon active={fav} name='star' onPress={()=>iconPress} />
                </Right>
              </View>
            </Body>
          </CardItem>
        </Card>
    );
  }
}

export default PickupList;
