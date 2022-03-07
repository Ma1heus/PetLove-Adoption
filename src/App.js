import React, { Component } from "react";
import "./styles.css";
import angora from "./angora.png";
import belgian from "./belgian.png";
import chiwawa from "./chiwawa.png";
import lhasa from "./lhasa.png";
import persa from "./persa.png";
import siames from "./siames.png";
import periquito from "./periquito.png";
import coruja from "./coruja.png";
import anao from "./anao.png";

export default class PetLove extends Component {
  state = {
    dogs: [
      {
        name: "Tulio",
        breed: "Chiwawa",
        age: "5 years",
        img: chiwawa
      },
      {
        name: "Thor",
        breed: "Lhasa Apso",
        age: "1 year",
        img: lhasa
      },
      {
        name: "Spike",
        breed: "Belgian Shepherd",
        age: "2 years",
        img: belgian
      }
    ],
    cats: [
      {
        name: "Oliver",
        breed: "Angorá",
        age: "3 years",
        img: angora
      },
      {
        name: "Lola",
        breed: "Persa",
        age: "5 years",
        img: persa
      },
      {
        name: "Charloth",
        breed: "Siamês",
        age: "2 months",
        img: siames
      }
    ],
    others: [
      {
        name: "Teobaldo",
        breed: "Russian Dwarf",
        age: "1 Year",
        img: anao
      },
      {
        name: "Cósmico",
        breed: "Australian",
        age: "5 months",
        img: periquito
      },
      {
        name: "Wobles",
        breed: "church Owl",
        age: "1 Year",
        img: coruja
      }
    ],
    animals: null
  };

  dogs = () => {
    let { dogs } = this.state;

    this.setState({
      animals: dogs.map((item) => (
        <div class="content">
          <img src={item.img} />
          <h3>Dog's Name : {item.name}</h3>
          <h3>Age : {item.age}</h3>
        </div>
      ))
    });
  };

  cats = () => {
    let { cats } = this.state;

    this.setState({
      animals: cats.map((item) => (
        <div class="content">
          <img src={item.img} />
          <h3>Cat's Name : {item.name}</h3>
          <h3>Age : {item.age}</h3>
        </div>
      ))
    });
  };

  others = () => {
    let { others } = this.state;

    this.setState({
      animals: others.map((item) => (
        <div class="content">
          <img src={item.img} />
          <h3>Pet's Name : {item.name}</h3>
          <h3>Age : {item.age}</h3>
        </div>
      ))
    });
  };

  clear = () => {
    this.setState({
      animals: null
    });
  };

  render() {
    let { animals } = this.state;
    return (
      <div class="container">
        <h1>PetLove Adoption</h1>
        <div class="botoes">
          <button onClick={this.dogs}>Dogs</button>
          <button onClick={this.cats}>Cats</button>
          <button onClick={this.others}>Others Animals</button>
          <button onClick={this.clear}>CLEAR</button>
        </div>
        <h2>{animals}</h2>
      </div>
    );
  }
}
