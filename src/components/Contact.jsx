import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

//0V_vLrWglpX2kkb4P
//template_n0b578m
//service_u5th0sp

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const[loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send('service_u5th0sp', "template_n0b578m", {
      from_name: form.name,
      to_name: "Carlos Eduardo",
      from_email: form.email,
      to_email: 'cadu.010808@gmail.com',
      message: form.message,
    }, '0V_vLrWglpX2kkb4P').then(() => {
      setLoading(false);
      alert("Obrigado. Irei responder seu email assim que possível.")

      setForm({name: '', email: '', message: ''})
    }), (error) => {
      setLoading(false)

      console.log(error)

      alert("Algo deu errado.")
    } 
    
  }

  //0V_vLrWglpX2kkb4P
//template_n0b578m
//service_u5th0sp

  return ( 
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
             variants={slideIn('lef', "tween", 0.2, 1)}
             className='flex-[0.75] bg-black-100 p-8 rounded-2x1'
             >
              <p className={styles.sectionSubText}>Entre em contato</p>

              <h3 className={styles.sectionHeadText}>Contato.</h3>

              <form
                 ref={formRef}
                 onSubmit={handleSubmit}
                 className='mt-12 flex flex-col gap-8'
                 >
                  <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>
                      Seu nome
                    </span>
                    <input 
                         type='text'
                         name='name'
                         value={form.name}
                         onChange={handleChange}
                         placeholder='Qual o seu nome?' 
                         className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
                  </label>

                  <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>
                      Seu email
                    </span>
                    <input 
                         type='email'
                         name='email'
                         value={form.email}
                         onChange={handleChange}
                         placeholder='Qual o seu email?' 
                         className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
                  </label>

                  <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>
                      Seu mensagem
                    </span>
                    <textarea 
                         rows="5"
                         name='message'
                         value={form.message}
                         onChange={handleChange}
                         placeholder='O que você gostaria de dizer?' 
                         className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
                  </label>

                  <button 
                      type='submit'
                      className='bg-tertiary py-3 px-8 rounded-x1 outline-none w-fit text-white font-bold shadow-md shadow-primary'
                      >
                    {loading ? "Enviando..." : "Enviar" }
                  </button>                

              </form>

      </motion.div>

      <motion.div
           variants={slideIn('right', "tween", 0.2, 1)}
           className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
           >
            <EarthCanvas />        
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, 'contact')