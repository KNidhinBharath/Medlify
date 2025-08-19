import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import  "../../Styles/SearchBar.css"
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import axios from "axios"
import MenuItem from "@mui/material/MenuItem";
import {Navigate, useNavigate} from "react-router-dom"



export default function SearchBar() {

    const [formData,setFormData] = useState({state:"",city:""})
    const [states,setStates] = useState([])
    const [cities,setCities] = useState([])
    
    

    useEffect(() => {
        const fetchStates = async() => {
            try {
                const statesData = await axios.get("https://meddata-backend.onrender.com/states")
                setStates(statesData.data)
                console.log(statesData.data)
            } catch (error) {
                console.error("Api not Found")
            }
        }
        fetchStates()
    },[])

    useEffect(() => {
        const fetchCities = async() => {
            setCities([]);
            setFormData((prev) => ({ ...prev, city: "" }));
            try {
                const citiesData = await axios.get(`https://meddata-backend.onrender.com/cities/${formData.state}`)
                setCities(citiesData.data)
                console.log(citiesData.data)
            }

            catch(error) {
            console.error("Api no loading")            
            }
        } 
        if (formData.state !== "") {
        fetchCities();
         }
    },[formData.state])

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormData((prev) => ({...prev,[name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.city && formData.state) {
            Navigate(`/search?state=${formData.state}&city=${formData.city}`)
        }

    }

    return (
        <Box 
            component= "form"
            onSubmit={handleSubmit}
            sx={{
                display:"flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
                gap:4,
                p:2
                
            }}>                    
                        <Select
                                
                                displayEmpty
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                startAdornment = {
                                  <InputAdornment position="start">
                                      <SearchIcon/>
                                  </InputAdornment>
                                }
                                required
                                sx={{ minWidth: 200, width: "100%"}}
                            > 
                        
                            <MenuItem disabled value ="" selected
                                sx={{
                                    textAlign:"start",
                                    color:""
                                }}>
                                    State
                            </MenuItem>

                            {states.map((state) => (
                            
                                <MenuItem 
                                    key = {state} 
                                    value = {state}
                                    >{state}
                                </MenuItem>

                             ))}
                        
                        </Select>
                 
                        <Select
                            id="city"
                            name="city"
                            displayEmpty
                            value={formData.city}
                            onChange={handleChange}
                            startAdornment = {
                                         <InputAdornment position="start">
                                            <SearchIcon/>
                                         </InputAdornment>
                                    }
                             required
                             sx={{ minWidth: 200, width: "100%" }}
                        >
                             
                        <MenuItem disabled value ="" selected>
                                Cities
                        </MenuItem>

                        {cities.map((city) => (
                        
                            <MenuItem 
                                key = {city} 
                                value = {city}
                                >{city}
                            </MenuItem>

                        ))}
                            
                            
                        </Select>

                           <Button 
                                variant="contained" 
                                startIcon ={<SearchIcon/>}
                                size="large"
                                disableElevation
                                sx={{
                                    backgroundColor:"#2AA8FF",
                                    borderRadius:"8px",
                                    font:"2rem",
                                    px:9
                                }}>
                                        Search
                           </Button>
                               
        </Box>
    )}