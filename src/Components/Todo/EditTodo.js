import React from 'react'



const EditTodo = (props) => {
    return (
        <div className="col-6 mb-2">
            <div className="d-flex justify-content-between align-items-center border rounded p-3">
                <div>
                    <input
                        type='text'
                        value={props.item.text}
                        onChange={(e) => props.edit(props.item.key, e.target.value)} />
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-info btn-sm ml-1"
                        onClick={props.clicked}
                    >edit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditTodo