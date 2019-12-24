import React, { useState } from 'react'

import { Card, Button } from 'react-bootstrap'



const BookInfo = (props) => {
    console.log({ props })

    return (
        <>
            <Card>
                <Card.Header as="h5">{props.title}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.author}</Card.Title>
                    <Card.Text>
                        {props.info}
                        </Card.Text>
                    <Button 
                        variant="primary" 
                        onClick={()=>console.log('GOOGLE PLAY BUTON')}><a style={{color:'yellow'}} href={props.link}>Google Play >></a>
                            </Button>
                    
                    <Button 
                    variant="danger" 
                    onClick={()=>console.log('OTHER BUTTON')}>SAVE_BOOK-method
                        </Button>
                </Card.Body>
            </Card>

        </>
    )
}
export default BookInfo