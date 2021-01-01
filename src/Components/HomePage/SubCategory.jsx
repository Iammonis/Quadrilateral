import React from "react";
import styles from "./MiddleBox.module.css"

export const SubCategory = ({subCategory}) => {
    return (
        <div className = {styles.text_box}>
            {
                subCategory.map((item) => (
                    <div className = {styles.name}>
                        {item.name}
                    </div>
                ))
            }
        </div>
    )
}