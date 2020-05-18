import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={ dish.image } alt={ dish.name } />
                    <CardBody>
                        <CardTitle>{ dish.name }</CardTitle>
                        <CardText>{ dish.description }</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4> Comments </h4>
                    { comments.map( (comment) => {
                        return (
                            <li key={ comment.id } className="list-unstyled">
                                <p>{ comment.comment }</p>
                                <p> -- { comment.author } 
                                    , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                </p>
                            </li>
                        );
                    })
                }
                </div>
            ); 
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        { this.renderDish(this.props.selectedDish) }
                    </div>
                    { this.renderComments(this.props.selectedDish ? this.props.selectedDish.comments : null) }
                </div>
            </div>
        );
    }
}

export default DishDetail;