import React, { Component } from "react";
import { View } from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Body, Icon, Button, Separator, Radio, Left, Right } from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import styles from "./styles";
import AccordionView from "./AccordionView";
const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {
  state = {
    rSelected: 'sender'
  }

  _onPressHandler = (e, event) =>{
    console.log(e)
    console.log(event)
  }
  render() {
    return (
      <Container>
        <Content >
          <Content style={styles.content}>
          <Card>
            <CardItem>
              <Body>
                <View style={styles.radioView}>
                  <Text>Your Package Photo</Text>
                  <Right>
                    <Button rounded small>
                      <Icon active name="add" />
                    </Button>
                  </Right>
                </View>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
                <View>
                  <AccordionView navigation={this.props.navigation}/>
                </View>
              </Body>
            </CardItem>
          </Card>
          </Content>

          <Card>
            <CardItem  style={styles.content}>
              <Body>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <Text>Price</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={{textAlign: 'right'}}>IDR 200.000</Text>
                  </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <Text>Door to door (driver)</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={{textAlign: 'right'}}>IDR 50.000</Text>
                  </View>
                </View>
              </Body>
            </CardItem>

            <View
              style={styles.lineStyle}
            />
            
            <CardItem  style={styles.content} >
              <Body>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 1}}>
                    <Text>Total Payment</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={{textAlign: 'right'}}>IDR 250.000</Text>
                  </View>
                </View>
              </Body>
            </CardItem>
            <View
              style={{borderWidth: 0.5, borderColor:'grey',}}
            />
            <CardItem style={styles.content} >
              <Body>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View>
                      <Text>Reponsible for Payment</Text>
                    </View>
                </View>
                <View></View>
                <View style={styles.radioView}>
                  <View style={styles.radioView}>
                    <Radio selected={this.state.rSelected==='sender'} onPress={()=>this.setState({rSelected:'sender'})}/>
                    <Text> Sender</Text>
                  </View>
                  <View style={styles.radioView}>
                    <Radio selected={this.state.rSelected==='reciever'} onPress={()=>this.setState({rSelected:'reciever'})}/>
                    <Text> Reciever</Text>
                  </View>
                </View>
              </Body>
            </CardItem>
            <CardItem style={styles.content} >
              <Body>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View>
                      <Text>Pay With</Text>
                    </View>
                </View>
              </Body>
            </CardItem>

            <CardItem>
            <Body style={{alignItems:'center'}}>
              <View style={styles.buttonGroup}>
                <View >
                  <Button bordered large>
                    <View>
                      <Icon active name="cash" />
                      <Text style={styles.buttonGroupText}>Cash</Text>
                    </View>
                  </Button>
                </View>

                <View style={styles.buttonSeparator}></View>
                <View >
                  <Button bordered large>
                    <View>
                      <Icon active name="filing" />
                      <Text style={styles.buttonGroupText}>Wallet</Text>
                    </View>
                  </Button>
                </View>
                
                <View style={styles.buttonSeparator}></View>
                <View >
                  <Button bordered large>
                    <View>
                      <Icon active name="card" />
                      <Text style={styles.buttonGroupText}>Billed</Text>
                    </View>
                  </Button>
                </View>

              </View>
            </Body>

            </CardItem>
              <Button full>
                <Text>Order</Text>    
              </Button>
            <CardItem>
                
            </CardItem>

          </Card>
        </Content>
      </Container>
    );
  }
}

export default Home;
