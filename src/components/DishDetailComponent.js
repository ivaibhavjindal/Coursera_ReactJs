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
                            <ul key={ comment.id } className="list-unstyled">
                                <li>{ comment.comment }</li>
                                <li> -- { comment.author }, { comment.date }</li>
                            </ul>
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
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    { this.renderDish(this.props.selectedDish) }
                </div>
                { this.renderComments(this.props.selectedDish ? this.props.selectedDish.comments : null) }

            </div>
        );
    }
}

export default DishDetail;