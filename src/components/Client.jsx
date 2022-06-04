import React from 'react'
import Client1 from "../assets/client1.png"
import Client2 from "../assets/client2.png"
import Client3 from "../assets/client3.png"
import Client4 from "../assets/client4.png"
import Client5 from "../assets/client5.png"

const Client = () => {
    const clients = [Client1,Client2,Client3,Client4,Client5];
  return (
    <section className='clients'>
        {
            clients.map(client => (
                <div key={client} className="client">
                    <img src={client} alt="" />
                </div>
            ))
        }
    </section>
  )
}

export default Client