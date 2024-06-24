import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Style/Selecteduser.css'; // Make sure you have this file for styling

const Selecteduser = () => {
    const [user, setUser] = useState([]);
    const [userData, setuserData] = useState({});

    const fetchData = async (id) => {
        try {
            const result = await axios.get(`https://internproject2.onrender.com/userdetail/${id}`, {
                withCredentials: true,
            });
            setuserData(prevState => ({ ...prevState, [id]: result.data }));
        } catch (error) {
            console.error("Failed to show card profile", error);
        }
    };

    useEffect(() => {
        const fetchmemberData = async () => {
            try {
                const { data } = await axios.get('https://internproject2.onrender.com/showmember');
                setUser(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchmemberData();
    }, []);

    useEffect(() => {
        user.forEach(items => {
            console.log(items.members[0]);
            fetchData(items.members[0]);
        });
    }, [user]);

    return (
        <div className='selecteduser-container'>
            {Object.values(userData).map((item, index) => (
                <div className='profile_card' key={index}>
                    <img src={item.avatar} alt='Avatar' className='avatar' />
                    <div className='profile_details'>
                        <h5 className='username'>{item.profile.username}</h5>
                        <p className='job_title'>{item.jobTitle}</p>
                        <p className='email'>{item.profile.email}</p>
                        <p className='bio'>{item.Bio}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Selecteduser;
