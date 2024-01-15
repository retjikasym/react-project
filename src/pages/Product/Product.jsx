import ApiList from "../../apiFirebase/ApiFIrebase";
import cls from '../Product/product.module.scss'

export default function Product (){
    return(
        <div className={cls.content}>
            <ApiList/>
        </div>
    )
}