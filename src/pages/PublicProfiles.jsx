import React from 'react';
import './PublicProfiles.css';

const PublicProfiles = () => {
    return (
        <div className='public-profiles-container '>
            <div className='mt-24 w-48'>
                <div className='profile-link flex justify-center  w-52 hover:bg-slate-700 rounded-xl'>
                    <a href='https://www.linkedin.com/in/kuldeepsingh2468/' target='_blank' rel='noopener noreferrer' className='hover:scale-110 transition-transform'>
                        <img src='public/linkedin.svg'  style={{ height: '50px' }} alt='Linkedin' />
                        <span className='p-2 text-lg hover:text-white'>Linkedin</span>
                    </a>
                </div>

                <div className='profile-link w-52 flex justify-center hover:bg-slate-700 rounded-xl '>
                    <a href='https://www.codechef.com/users/ks7824795' target='_blank' rel='noopener noreferrer' className='hover:scale-110 transition-transform'>
                        <img src='public/icons8-codechef (1).svg' style={{ height: '50px', }} alt='Codechef' />
                        <span className='p-2 text-lg '>Codechef</span>
                    </a>
                </div>
                <div className='profile-link w-52 flex justify-center hover:bg-slate-700 rounded-xl'>
                    <a href='https://github.com/Kuldeep246' target='_blank' rel='noopener noreferrer' className='hover:scale-110 transition-transform'>
                        <img src='public/github.svg' style={{ width: '50px', height: '50px' }} alt='Github' />
                        <span className='p-2 text-lg '>Github</span>
                    </a>
                </div>
                <div className='profile-link w-52 flex justify-center hover:bg-slate-700 rounded-xl'>
                    <a href='https://codeforces.com/profile/kuldeep_88' target='_blank' rel='noopener noreferrer' className='hover:scale-110 transition-transform'>
                        <img src='public/code-forces.svg' style={{ height: '50px', }} alt='Codeforces' />
                        <span className='p-2 text-lg '>Codeforces</span>
                    </a>
                </div>
                <div className='profile-link w-52 flex justify-center hover:bg-slate-700 rounded-xl'>
                    <a href='https://leetcode.com/kuldeep_88/' target='_blank' rel='noopener noreferrer' className='hover:scale-110 transition-transform'>
                        <img src='public/leetcode.svg' style={{ width: '50px', height: '50px' }} alt='Leetcode' />
                        <span className='p-2 text-lg '>Leetcode</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PublicProfiles;
