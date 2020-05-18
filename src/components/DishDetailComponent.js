import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    
function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
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

const DishDetail = (props) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={ props.selectedDish } />
                </div>
                <RenderComments comments={ props.selectedDish ? props.selectedDish.comments : null } />
            </div>
        </div>
    );
}

export default DishDetail;