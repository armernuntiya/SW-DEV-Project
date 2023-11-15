import RestaurantCard from "./RestaurantCard"

export default function RestaurantPanel() {
    return (
        <div className="inline-flex p-4 flex-col items-center gap-4 rounded-2xl bg-white">
            <div className="flex px-4 justify-between items-center self-stretch">
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-black font-sans not-serif text-3xl font-semibold tracking-wide">Recommend restaurants</h1>
                    <h4 className="w-129 text-black text-center font-sans text-base not-italic font-light leading-6">Book your table! Enjoy your food!</h4>
                </div>
            </div>
            <div className="flex w-[1110px] p-2 justify-center items-start content-start gap-y-6 gap-x-4 flex-wrap">

                <RestaurantCard name='Bankoku Buffet' Province='กรุงเทพฯ' foodType='อาหารญี่ปุ่น' imgSrc='https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z'/>

                <RestaurantCard name='Bankoku Buffet' Province='กรุงเทพฯ' foodType='อาหารญี่ปุ่น' imgSrc='https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z'/>
                <RestaurantCard name='Bankoku Buffet' Province='กรุงเทพฯ' foodType='อาหารญี่ปุ่น' imgSrc='https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z'/><RestaurantCard name='Bankoku Buffet' Province='กรุงเทพฯ' foodType='อาหารญี่ปุ่น' imgSrc='https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z'/><RestaurantCard name='Bankoku Buffet' Province='กรุงเทพฯ' foodType='อาหารญี่ปุ่น' imgSrc='https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z'/>
                <RestaurantCard name='Bankoku Buffet' Province='กรุงเทพฯ' foodType='อาหารญี่ปุ่น' imgSrc='https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z'/><RestaurantCard name='Bankoku Buffet' Province='กรุงเทพฯ' foodType='อาหารญี่ปุ่น' imgSrc='https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z'/><RestaurantCard name='Bankoku Buffet' Province='กรุงเทพฯ' foodType='อาหารญี่ปุ่น' imgSrc='https://drive.google.com/uc?export=view&id=1pVyJ4U6eO_V6lPM0tx3Sov7xL4Fc8M5z'/>
      
            </div>
        </div>
    )
}