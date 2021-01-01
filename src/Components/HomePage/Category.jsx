import React from "react";
import styles from "./MiddleBox.module.css"
import { SubCategory } from "./SubCategory";


export const Category = ({category}) => {
    return category.map((item) => (
        <div>
            <div className = {styles.sub_category_heading}>
            {item.sub_category_name}
            </div>
            <SubCategory subCategory = {item.text_names}/>
        </div>
    ))
}