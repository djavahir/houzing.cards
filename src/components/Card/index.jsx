import React, { Component } from "react";
import {
  Button,
  Icon,
  Content,
  Container,
  Img,
  User,
  Title,
  Heart,
  Wraper,
  Price,
  Strelka,
} from "./style";
import img from "../../assets/images/house.png";
import user from "../../assets/images/User.png";
import iconDivan from "../../assets/icons/divan.svg";
import iconDush from "../../assets/icons/dush.svg";
import iconCar from "../../assets/icons/car.svg";
import iconChizgich from "../../assets/icons/chizgich.svg";
import iconHeart from "../../assets/icons/heart.svg";
import iconHeartFill from "../../assets/icons/heart_fill.svg";
import iconstrelka from "../../assets/icons/strelka.svg";

export default class Root extends Component {
  render() {
    return (
      <Container>
        <Button>Featured</Button>
        <Button right>For sale</Button>
        <Img src={img} />
        <Wraper>
          <User src={user} />
          <Title>New Apartment Nice Wiew</Title>
          <Title desc>Quincy St, Brooklyn, NY, USA</Title>
          <Content wrap>
            <Content>
              <Icon src={iconDivan} />
              <Content.Title desc>Beds</Content.Title>
            </Content>
            <Content>
              <Icon src={iconDush} />
              <Content.Title desc>Baths</Content.Title>
            </Content>
            <Content>
              <Icon src={iconCar} />
              <Content.Title desc>Garage</Content.Title>
            </Content>
            <Content>
              <Icon src={iconChizgich} />
              <Content.Title desc>Sq Ft</Content.Title>
            </Content>
          </Content>
          <Price>
            <Price.Container>
              <Price.Title desc>
                <del>$2,800/mo</del>
              </Price.Title>
              <Price.Title>$7,500/mo</Price.Title>
            </Price.Container>
            <Price.Container wrap>
              <Strelka strel src={iconstrelka} />
              <Heart src={true ? iconHeartFill : iconHeart} />
            </Price.Container>
          </Price>
        </Wraper>
      </Container>
    );
  }
}
