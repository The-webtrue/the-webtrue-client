import React from 'react';
import AboutUs from '../../component/Shared/AboutUs/AboutUs';
import founder from '../../assets/sojib1.jpg';

const About = () => {
    return (
        <div>
            <AboutUs/>
            <div className='sm:flex-row md:flex p-5'>
                <div className='md:w-2/5 text-center'>
                    <img className='mx-auto border-[3px] border-komla' src={founder} alt="founder" />
                    <div className="grid grid-cols-4 w-3/4 p-5 mx-auto gap-5">
                    <p className=" bg-komla  rounded-3xl w-10 h-10">0</p>
                    <p className=" bg-komla  rounded-3xl w-10 h-10">0</p>
                    <p className=" bg-komla  rounded-3xl w-10 h-10">0</p>
                    <p className=" bg-komla  rounded-3xl w-10 h-10">0</p>
                </div>
                </div>
                <div className='md:w-3/5  my-auto p-5'>
                   <div>
                   <h1 className='text-5xl  font-bold font-serif'>SOJIB DAS</h1>
                    <h1 className='text-xl  text-komla my-2'>Founder</h1>
                   </div>
                   <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque nisi modi quos, illo minus libero alias reprehenderit pariatur doloribus et suscipit delectus, laudantium eum, ab obcaecati. Repellendus placeat itaque, ad commodi modi vitae, culpa dicta aperiam tempore sit natus deleniti corporis, harum cupiditate dolor dignissimos! Ea quidem vero ad, perferendis similique iusto aspernatur voluptatum quam sint facere eligendi minus, laudantium fugit ducimus, alias hic eum exercitationem neque at est?</p>
                   </div>
                </div>
            </div>
            <div className='sm:flex-row md:flex p-5'>
            <div className='md:w-3/5  my-auto p-5'>
                   <div>
                   <h1 className='text-5xl  font-bold font-serif'>SOJIB DAS</h1>
                    <h1 className='text-xl my-2 text-komla'>CEO</h1>
                   </div>
                   <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eaque nisi modi quos, illo minus libero alias reprehenderit pariatur doloribus et suscipit delectus, laudantium eum, ab obcaecati. Repellendus placeat itaque, ad commodi modi vitae, culpa dicta aperiam tempore sit natus deleniti corporis, harum cupiditate dolor dignissimos! Ea quidem vero ad, perferendis similique iusto aspernatur voluptatum quam sint facere eligendi minus, laudantium fugit ducimus, alias hic eum exercitationem neque at est?</p>
                   </div>
                </div>
                <div className='md:w-2/5 text-center'>
                    <img className='mx-auto border-[3px] border-komla' src={founder} alt="founder" />
                    <div className="grid grid-cols-4 w-3/4 p-5 mx-auto gap-5">
                    <p className=" bg-komla  rounded-3xl w-10 h-10">0</p>
                    <p className=" bg-komla  rounded-3xl w-10 h-10">0</p>
                    <p className=" bg-komla  rounded-3xl w-10 h-10">0</p>
                    <p className=" bg-komla  rounded-3xl w-10 h-10">0</p>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default About;