import React from 'react'

const FormCreate = () => {
    return (
        <div>
            <form action="" style={{display:"flex", flexDirection:"column", width:"200px", marginLeft:"45%"}}>
                <label htmlFor="">Id:</label>
                <input type="text" />

                <label htmlFor="">Name:</label>
                <input type="text" />

                <label htmlFor="">Image:</label>
                <input type="file" />

                <label htmlFor="">Platform:</label>
                <select name="" id="">
                <option value="">PS4</option>
                <option value="">PS5</option>
                <option value="">PC</option>
                </select>

                <label htmlFor="">Description:</label>
                <input type="text" />

                <label htmlFor="">Release Date:</label>
                <input type="date" />

                <label htmlFor="">Rating:</label>
                <input type="text" />

                <label htmlFor="">Generes:</label>
                <select name="" id="">
                <option value="">Action</option>
                <option value="">Adventure</option>
                <option value="">Adventure</option>
                </select>
            </form>
        </div>
    )
}

export default FormCreate