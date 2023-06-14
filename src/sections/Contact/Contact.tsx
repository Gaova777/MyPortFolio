import Button from '@/components/Button'
import React, { FormEvent, useRef } from 'react'
import { motion } from 'framer-motion'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef(null)

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_z46t8we', 'template_ekk6a5a', form.current, 'RBuKzHUTj4bJcx-ov')
                .then(
                    (result) => {
                        console.log(result.text);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    return (
        <motion.div
            className='contact'
            id='contact'
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
            }}
        >
            <h2 className='contact-title'>What&apos;s Next?</h2>
            <h2 className="contact-sub-title">Get in Touch</h2>
            <p className='contact-text'>
                If you have a Question or just want to say hi, I&apos;ll try my best to  get back to you!
            </p>
            <div className="contact-cta">
                <Button text="Say Hello" link="mailto:gaova777@utp.edu.co" />
            </div>

            <div className="container contact_container">
                <div className="contact_options">

                    <motion.article
                        className='contact_option'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        variants={{
                            visible: { opacity: 1, y: -50 },
                            hidden: { opacity: 0, y: 0 },
                        }}
                    >
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <a href='mailto:gaova777@utp.edu.co' target='__blank'>Send a Message</a>
                    </motion.article>

                    <motion.article
                        className='contact_option'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        variants={{
                            visible: { opacity: 1, y: -50 },
                            hidden: { opacity: 0, y: 0 },
                        }}
                    >
                        <RiMessengerLine className='contact_option-icon' />
                        <h4>Messenger</h4>
                        <a href='https://m.me/jgarzonovalle/' target='__blank'>Send a Message</a>
                    </motion.article>

                    <motion.article
                        className='contact_option'
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        variants={{
                            visible: { opacity: 1, y: -50 },
                            hidden: { opacity: 0, y: 0 },
                        }}
                    >
                        <BsWhatsapp className='contact_option-icon' />
                        <h4>WhatsApp</h4>
                        <a href='https://api.whatsapp.com/send?phone=573136887616' target='__blank'>Send a Message</a>
                    </motion.article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <motion.form
                    ref={form}
                    onSubmit={sendEmail}
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    variants={{
                        visible: { opacity: 1, y: -50 },
                        hidden: { opacity: 0, y: 0 },
                    }}
                >
                    <input type="text" name='name' placeholder='Your Full name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name='message' rows={7} placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send a Message</button>
                </motion.form>

            </div>


        </motion.div>
    )
}

export default Contact