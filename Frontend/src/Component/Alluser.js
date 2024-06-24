import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from './Loader'; // Import the Loader component
import '../Style/Alluser.css';

const Alluser = () => {
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading

    useEffect(() => {
        axios.get("https://internproject2.onrender.com/Alluser", { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
                setLoading(false); // Data fetched, set loading to false
            })
            .catch((err) => {
                console.error("Error fetching data: ", err);
                setLoading(false); // Error occurred, set loading to false
            });
    }, []);

    const collectdata = async (id) => {
        console.log("registration started");
        await axios.post('https://internproject2.onrender.com/member', {
            memberid: [id]
        }, { withCredentials: true })
            .then((res) => {
                alert("Team member added");
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <div className='All_user'>
            {loading ? (
                <Loader /> // Show loader while loading
            ) : (
                Data.map((item) => (
                    <div className='profile_card' key={item._id}>
                        <img src={item.avatar} alt='Avatar' className='avatar' />
                        <div className='profile_details'>
                            <h5 className='username'>{item.profile.username}</h5>
                            <p className='job_title'>{item.jobTitle}</p>
                            <p className='email'>{item.profile.email}</p>
                        </div>
                        <button className="add_users" onClick={() => collectdata(item._id)}>Add Team</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Alluser;
