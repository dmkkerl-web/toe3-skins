export default function Publish(){
    return(
        <div className="container">
                <div className="PublishForm">
            <h3>Publish New Skin</h3>
            <div className="InputFields">
                <div className="Name">
            <label>Skin Name</label>
                <input type="text"placeholder=" eg: Genshin Impact"></input>
                </div>
                
                   <label>Category</label>
                <select>
                 
                    <option value="">Select Category</option>
                    <option value="Moon-THA">Moon-THA</option>
                    <option value="Fiora">Fiora</option>
                    <option value="Stream">Stream</option>
                    <option value="Marieles">Marieles</option>
                </select>
                <label>Description</label>
                <textarea></textarea>
                <div className="Media">
                    <label>Attach File</label>
                    <input type="file"
                    accept="image/*"></input>
                </div>
                <div className="Buttons">
                    <button className="PublishBtn">Publish</button>
                    <button className="DeleteBtn">Delete</button>
                </div>
                </div>
                
        </div>
        </div>
        
    )
}