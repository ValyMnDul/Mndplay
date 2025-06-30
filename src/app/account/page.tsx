'use client';
import './style.css';
import Navbar from '@/components/Navbar';
export default function Profile(){
    return (
        <>
            <Navbar/>
            <div className='container'>
                <div className='card'>
                    <p>100</p>
                </div>
                <div className='card delailsCard'>
                    <h2>Welcome</h2>
                    <h4>Here you can manage your account details.</h4>
                    <h4>Feel free to update your information.</h4>
                    <h4>For any issues, please contact support.</h4>

                    <img src="/favicon.ico" alt="profileImage"/>
                </div>
            </div>
        </>
    );
}