import axios from 'axios';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Favorite extends React.Component{
    constructor(props){
        super(props);
        this.state={
            server:'http://localhost:3010',
            favDrinks:[],
            showFav: false,
            showForm: false,
            strDrink: '',
            strDrinkThumb: '',
            idDrink: '',
            index:0
        }
    }

    componentDidMount = async () => {
        const favorite = await axios.get(`${this.state.server}/getfavorite`);
        this.setState({
            favDrinks: favorite.data,
            showFav: true
        })
    }

    delete = async (index) => {
        const id = this.state.favDrinks[index]._id;
        const newData = await axios.delete(`${this.state.server}/delete/${id}`);
        this.setState({
            favDrinks: newData.data
        })
    }

    updateDrink = async (e) => {
        e.preventDefult();
        const updatedDri = {strDrink:e.target.strDrink.value,strDrinkThumb:e.target.strDrinkThumb.value,idDrink:e.target.idDrink.value}
        const updatedData = await axios.put(`${this.state.server}/updateDri/update/${this.state.index}`,updatedDri);
    }

    showForm = (idx) => {
        const drink = this.state.favDrinks[idx];
        this.setState({
            showForm: true,
            strDrink:drink.strDrink,
            strDrinkThumb:drink.strDrinkThumb,
            idDrink:drink.idDrink,
            index: idx
        })
    }

    onHide = () => {
        this.setState({showForm:false})
    }

    render() {
        return (
            <div>
            <Row xs={1} md={3}>
                {this.state.showFav && 
                this.state.favDrinks.map ((item,idx) => {
                    return (
                        <Col>
                        <Card style={{ width: '18rem', display:'inline-block', margin:'45px 45px' }}>
                        <Card.Img variant="top" src={item.strDrinkThumb} />
                        <Card.Body>
                            <Card.Title>{item.strDrink}</Card.Title>
                            <Card.Text>{item.idDrink}</Card.Text>
                            <Button variant="danger" onClick={() => this.delete(idx)}>Delete</Button>
                            <Button variant="primary" onClick={() => this.showForm(idx)}>Update</Button>
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

export default Favorite;