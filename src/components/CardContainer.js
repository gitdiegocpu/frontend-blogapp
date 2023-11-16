import { useState, useEffect } from "react"
import BlogCards from "./BlogsCards"
export default function CardContainer() {
    const [data, setData] = useState([])
    //1. As soon as comonents loads/mounting -fetch data
    useEffect(() => {
        fetch('http://localhost:8080')
            .then((res) => res.json())
            //2. Put data in state variable
            .then((cleanData) => setData(cleanData))
            .catch((err) => console.error(err))
    }, [])
    const handleFormSubmit = (evt) => {
        evt.preventDefault()
        const formData = {}
        formData.title = evt.target.title.value
        formData.content = evt.target.content.value
        console.log(formData)
        fetch('http://localhost:8080', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(cleanData => setData(cleanData))
            .catch(err => console.error(err))
    }
    return (
        <>
            <form action='' onSubmit={(e) => handleFormSubmit(e)}>
                <label htmlFor="title">
                    <input type="text" name="title" id='' />
                </label>
                <label htmlFor="">
                    <input type="text" name='content' id='' />
                </label>
                <button type="submit">Add BlogPost</button>
            </form>
            <h2>This is Card Container </h2>
            <div className="cardContainer">
                {
                    //3. Map data from state variable
                    data && data.map((singlePosts, index) => {
                        //4. Then return jsx from the Map -
                        return (
                            <div className="singleCard" key={singlePosts._id}>
                                <BlogCards key={singlePosts._id} title={singlePosts.title} content={singlePosts.content} index={index} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}





















