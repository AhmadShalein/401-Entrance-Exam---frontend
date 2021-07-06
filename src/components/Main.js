import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            server:'http://localhost:3010',
            drinksData: [],
            showDrinks: false
        }
    }

    componentDidMount = async () => {
        //console.log(this.state.server)
        const drinks = await axios.get(`${this.state.server}/getdrinks`);
        this.setState({
            drinksData: drinks.data,
            showDrinks: true
        })
    }

    addToFav = async (idx) => {
        const drink = {strDrink:this.state.drinksData[idx].strDrink,strDrinkThumb:this.state.drinksData[idx].strDrinkThumb,idDrink:this.state.drinksData[idx].idDrink};
        await axios.post(`${this.state.server}/addtofavorite`, drink);
    }

    render() {
        return (
            <div>
                <Row xs={1} md={3}>
                    {this.state.showDrinks && 
                    this.state.drinksData.map ((item,idx) => {
                        return (
                            <Col>
                            <Card style={{ width: '18rem', display:'inline-block', margin:'45px 45px' }}>
                            <Card.Img variant="top" src={item.strDrinkThumb} />
                            <Card.Body>
                                <Card.Title>{item.strDrink}</Card.Title>
                                <Card.Text>{item.idDrink}</Card.Text>
                                <Button variant="primary" onClick={() => this.addToFav(idx)}>Add To Favorite</Button>
                            </Card.Body>
                            </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        );
    }
}

export default Main;