import FaqItem from './FaqItem'

const Faq = () => {
  return (
    <div>
        <div className='flex flex-col w-[70%] m-auto pt-10 mt-10 pb-16 text-center'>
            <h2 className='text-2xl font-medium pb-12'>Frequently asked questions</h2>
            <div className='w-10/12 m-auto'>
                <FaqItem 
                    title="How does EV home charging work?"
                    desc="By installing a residential charging station at your home or apartment, you can charge as you eat, sleep, and play, all while making sure your vehicle is ready-to-go the next morning.
                    Generally speaking, there are three different types of EV charging: Level 1, Level 2, and Level 3. Level 2 charging stations are by far the most convenient charging stations for homes and apartments due to the fact that theyre significantly faster than Level 1 stations, and dont usually require costly upgrades to power supply like their Level 3 DC fast charging counterparts.
                    Residential charging stations are usually Level 2 charging stations and can deliver somewhere between 3.7 - 22 kW of power output. These electric car charging ports work by connecting to your homes electricity supply via either 1-phase or 3-phase connectors. With a Level 2 charging station at maximum power output, one hour of charging will provide approximately 75 miles of range.*"
                />
                <FaqItem 
                    title="How fast are home charging stations?"
                    desc="By installing a residential charging station at your home or apartment, you can charge as you eat, sleep, and play, all while making sure your vehicle is ready-to-go the next morning.
                    Generally speaking, there are three different types of EV charging: Level 1, Level 2, and Level 3. Level 2 charging stations are by far the most convenient charging stations for homes and apartments due to the fact that theyre significantly faster than Level 1 stations, and dont usually require costly upgrades to power supply like their Level 3 DC fast charging counterparts.
                    Residential charging stations are usually Level 2 charging stations and can deliver somewhere between 3.7 - 22 kW of power output. These electric car charging ports work by connecting to your homes electricity supply via either 1-phase or 3-phase connectors. With a Level 2 charging station at maximum power output, one hour of charging will provide approximately 75 miles of range.*"
                />
                <FaqItem 
                    title="Do EV home charging stations work with all electric vehicles?"
                    desc="By installing a residential charging station at your home or apartment, you can charge as you eat, sleep, and play, all while making sure your vehicle is ready-to-go the next morning.
                    Generally speaking, there are three different types of EV charging: Level 1, Level 2, and Level 3. Level 2 charging stations are by far the most convenient charging stations for homes and apartments due to the fact that theyre significantly faster than Level 1 stations, and dont usually require costly upgrades to power supply like their Level 3 DC fast charging counterparts.
                    Residential charging stations are usually Level 2 charging stations and can deliver somewhere between 3.7 - 22 kW of power output. These electric car charging ports work by connecting to your homes electricity supply via either 1-phase or 3-phase connectors. With a Level 2 charging station at maximum power output, one hour of charging will provide approximately 75 miles of range.*"
                />
                <FaqItem 
                    title="How much does it cost to charge my EV at home?"
                    desc="By installing a residential charging station at your home or apartment, you can charge as you eat, sleep, and play, all while making sure your vehicle is ready-to-go the next morning.
                    Generally speaking, there are three different types of EV charging: Level 1, Level 2, and Level 3. Level 2 charging stations are by far the most convenient charging stations for homes and apartments due to the fact that theyre significantly faster than Level 1 stations, and dont usually require costly upgrades to power supply like their Level 3 DC fast charging counterparts.
                    Residential charging stations are usually Level 2 charging stations and can deliver somewhere between 3.7 - 22 kW of power output. These electric car charging ports work by connecting to your homes electricity supply via either 1-phase or 3-phase connectors. With a Level 2 charging station at maximum power output, one hour of charging will provide approximately 75 miles of range.*"
                />
            </div>
        </div>
    </div>
  )
}

export default Faq