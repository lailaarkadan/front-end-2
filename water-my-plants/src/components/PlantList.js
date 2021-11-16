import { useState } from 'react';
import Plant from './Plant';


const initFormVal = {
    nickname: '',
    image: '',
    h20frequency: '',
    species: ''
}

const testPlant = {
    nickname: 'Test Plant 1',
    image: 'Test Image',
    h20frequency: '5',
    species: 'Test Species'
}

const PlantList = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [formVal, setFormVal] = useState(initFormVal);
    const [plants, setPlants] = useState([testPlant]);

    const handleChange = (e) => {
        setFormVal({
            ...formVal,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        // Submit formVal
    }

    return(
        <div>
            {isEditing && (
                <form>
                    <label>Nickname</label>
                    <input type='text' name='nickname' onChange={handleChange} value={formVal.nickname}/>

                    <label>Species</label>
                    <input type='text' name='species' onChange={handleChange} value={formVal.species}/>

                    <label>h20frequency</label>
                    <input type='text' name='h20frequency' onChange={handleChange} value={formVal.h20frequency}/>

                    <label>Image</label>
                    <input type='text' name='image' onChange={handleChange} value={formVal.h20frequency}/>

                    <button onClick={handleSubmit}>Save</button>
                </form>)
            }

            {plants.map(item => <Plant key={item.id} data={item} setIsEditing={setIsEditing} isEditing={isEditing} setFormVal={setFormVal}/>)}
        </div>
    )
}

export default PlantList;