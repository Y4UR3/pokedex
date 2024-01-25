import { useRef } from "react"
import { setTrainerG } from "../store/states/trainer.state"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import  '../components/HomePage/styles/HomePage.css'

const HomePage = () => {

    const inputTrainer = useRef()


    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmint = e => {
        e.preventDefault()
        dispatch(setTrainerG(inputTrainer.current.value.trim()))
        navigate('/pokedex')
    }

  return (
    <div className="home">
        <img className="home_img" src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/436/896/datas/original.png" alt="" />
        <h2 className="home_title">Hi Trainer!</h2>
        <p className="home_description">To start this app, give me your trainer name</p>
        <form className="home_form" onSubmit={handleSubmint}>
            <input className="home_input" ref={inputTrainer} type="text" placeholder="Enter your trainer name" />
            <button className="home_btn">Catch them all</button>
        </form>
        <div className="rectangle">
          <div className="rblack"></div>
          <div className="circle"></div>
        </div>
    </div>
  )
}

export default HomePage