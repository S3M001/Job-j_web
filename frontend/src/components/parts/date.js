import React, { useState } from "react";

const DatePicker = (props) => {
    const [selected, setSelected] = useState(props.data);

    const onChangeSelected = (e) => {
        if(selected){
            setSelected(e.target.value)
        }
        props.setDate(e)
        console.log(e.target.value)
    }

    return (
        <div className="form-check">
            <input type="datetime-local" defaultValue={selected} name={props.name}
                onChange={event => onChangeSelected(event)}></input>

            {/* <div>{selected
            }が選択されました！</div> */}
        </div>
    )
}
export default DatePicker;