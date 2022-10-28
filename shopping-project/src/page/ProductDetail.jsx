import Comment from "../components/Comment";
import CommentInput from "../components/CommentInput";
import ProductDisplay from "../components/ProductDisplay";
import ListGroup from 'react-bootstrap/ListGroup'
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetaile = () => {
    const data = useContext(DataContext);
    const [comments, setComments] = useState("");

    const {id} = useParams()

    // 마운트 하자마자 값을 들고와서 출력함
    useEffect(()=> {

    });

    // data의 state의 값을 바로 수정해서 사용
    const getProduct = () => { return data.state.productList.find((product)=>(product.productId == id))}
    return (  
        <div>
            <ProductDisplay product={ getProduct() }/>
            <br />
            <hr />
            <CommentInput></CommentInput>
            <ListGroup style={{textAlign : "left"}} className="mt-3">
                {
                    // 이 내용은 월요일에 값을 따로 저장해서 수정할 예정
                    data.state.allComments
                        .filter((comment)=>(comment.productId == id))
                        .map((comment)=>(<Comment />))
                }
            </ListGroup>
        </div>
    );
}
 
export default ProductDetaile;