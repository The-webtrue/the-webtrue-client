import React from 'react';
import web from '../../assets/web.jpg' ;
import WebBanner from '../../component/Service/webBanner/WebBanner';
import frontend from '../../assets/frontend.png';
import frontback from '../../assets/frontback.png';
import portfolio from '../../assets/logo.png';
const WebDev = () => {
    return (
        <div>
            <div className='items-center grid   md:grid-cols-2 gap-5 p-5'>
                <div >
                    <h1 className='text-5xl my-3 text-komla font-semibold'>Web Design <br /> & <br />Development</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, perferendis enim. Eum voluptatibus molestias in alias ipsum officia sequi laboriosam voluptate, enim vitae vel! Fugiat, accusamus illum ipsum omnis voluptatum, inventore, atque aut similique odit totam deserunt eius laboriosam libero magnam et mollitia optio nobis! Nesciunt fugit illum cupiditate perferendis.</p>
                </div>
                <div>
                    <img src={web} alt="web" />
                </div>
            </div>
            <WebBanner/>
            <div className='my-5 lg:w-3/4 m-auto'>
            <div className='flex-row-reverse sm:flex items-center justify-center gap-5'>
                
                <div className='md:w-2/5'>
                    <img src={frontend} alt="" />
                </div>
                <div className='md:w-3/5 lg:text-right'>
                    <h1 className='text-2xl py-3  text-komla'>Front-End Development Services</h1>
                    <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quo iusto nesciunt nulla, molestiae natus ad dolorem alias optio. In eligendi dolore atque reiciendis dolorem consectetur mollitia excepturi impedit officiis dolorum, explicabo aliquid quaerat odit sit inventore exercitationem? Placeat inventore dicta odit repellendus ipsam enim, molestiae ducimus maxime iusto repellat?</p>
                </div>
            </div>
            <div className='sm:flex-row md:flex items-center justify-center gap-5'>
                <div className='md:w-2/5'>
                    <img src={frontend} alt="" />
                </div>
                <div className='md:w-3/5'>
                    <h1 className='text-2xl py-3 text-komla'>Back-End Development Services</h1>
                    <p className='text-md'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quo iusto nesciunt nulla, molestiae natus ad dolorem alias optio. In eligendi dolore atque reiciendis dolorem consectetur mollitia excepturi impedit officiis dolorum, explicabo aliquid quaerat odit sit inventore exercitationem? Placeat inventore dicta odit repellendus ipsam enim, molestiae ducimus maxime iusto repellat?</p>
                </div>
                
            </div>
            </div>
            <img className='mx-auto img-fluid' src={frontback} alt="" />
            <div>
                <h1 className='text-6xl text-center p-5 font-bold'>Our Portfolio</h1>
                <div className="items-center grid  lg:w-3/4 mx-auto md:grid-cols-3 gap-5 p-5">
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        <img className="img-fluid border-komla border-[3px]"  src={portfolio} alt="" />
                        
                                         
                    </div>
            </div>
        </div>
    );
};

export default WebDev;