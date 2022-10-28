import { Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
const Comment = () => {
    return (  
        <div>
            <Container>
                <ListGroup.Item>
                <h4>이름</h4>
                <p>댓글내용</p>
                </ListGroup.Item>
            </Container>
        </div>
    );
}
 
export default Comment;