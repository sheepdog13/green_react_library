import { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const ProductDisplay = (props) => {
    const {product} = props;
    const [index, setIndex] = useState(0)
    return (  
        <Container>
            <Row>
                <Col>
                    <div>
                        <img src={require(`../img/${product.productPicture[index]}`)} alt="상품이미지" />
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1>{product.productName}</h1>
                        <p>{product.productDetail}</p>
                        <p></p>
                        <div>
                            {
                            // productColor에 있는 color 값을 백그라운드로 사용
                            product.productColor.map((color, i)=>(
                                <div className="m-2" style={{ display:"inline-block",
                                              width: "30px", 
                                              height:"30px",
                                              backgroundColor: color,
                                              border: "3px solid lightgrey"
                                            }}
                                onMouseEnter={()=>{setIndex(i)}}      
                                ></div>
                            ))
                            }
                        </div>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg">
                                구매
                            </Button>
                            <Button variant="secondary" size="lg">
                                장바구니
                            </Button><Button variant="secondary" size="lg">
                                찜하기
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
 
export default ProductDisplay;