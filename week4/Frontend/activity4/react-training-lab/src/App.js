import React from "react";
import IdCard from "./components/IdCard";
import "./app.css";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import NumbersTable from "./components/NumbersTable";
// import FaceBook from "./components/FaceBook";

// Interation1: IdCard
// function App() {
//   return (
//     <div>
//       <IdCard
//         lastName="Doe"
//         firstName="John"
//         gender="male"
//         height={178}
//         birth={new Date("1992-07-14")}
//         picture="https://randomuser.me/api/portraits/men/44.jpg"
//       />

//       <IdCard
//         lastName="Delores"
//         firstName="Obrien"
//         gender="female"
//         height={172}
//         birth={new Date("1988-05-11")}
//         picture="https://randomuser.me/api/portraits/women/44.jpg"
//       />
//     </div>
//   );
// }

// Interation2: Greetings
// function App() {
//   return (
//     <div>
//       <Greetings lang="de">Ludwig</Greetings>
//       <Greetings lang="fr">François</Greetings>
//     </div>
//   );
// }

// Interation3: Random
// function App() {
//   return (
//     <div>
//       <Random min={1} max={6} />
//       <Random min={1} max={100} />
//     </div>
//   );
// }

// Interation4: BoxColor
// function App() {
//   return (
//     <div>
//       <BoxColor r={255} g={0} b={0} />
//       <BoxColor r={128} g={255} b={0} />
//     </div>
//   );
// }

// Interation5: CreditCard
// function App() {
//   return (
//     <div>
//       <CreditCard
//         type="Visa"
//         number="0123456789018845"
//         expirationMonth={3}
//         expirationYear={2021}
//         bank="BNP"
//         owner="Maxence Bouret"
//         bgColor="#11aa99"
//         color="white"
//       />

//       <CreditCard
//         type="Master Card"
//         number="0123456789010995"
//         expirationMonth={3}
//         expirationYear={2021}
//         bank="N26"
//         owner="Maxence Bouret"
//         bgColor="#eeeeee"
//         color="#222222"
//       />

//       <CreditCard
//         type="Visa"
//         number="0123456789016984"
//         expirationMonth={12}
//         expirationYear={2019}
//         bank="Name of the Bank"
//         owner="Firstname Lastname"
//         bgColor="#ddbb55"
//         color="white"
//       />
//     </div>
//   );
// }

// Interation6: Rating
// function App() {
//   return (
//     <div>
//       <Rating>0</Rating>
//       <Rating>1.49</Rating>
//       <Rating>1.5</Rating>
//       <Rating>3</Rating>
//       <Rating>4</Rating>
//       <Rating>5</Rating>
//     </div>
//   );
// }

// Interation7: DriverCard
// function App() {
//   return (
//     <div>
//       <DriverCard
//         name="Travis Kalanick"
//         rating={4.2}
//         img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
//         car={{
//           model: "Toyota Corolla Altis",
//           licensePlate: "CO42DE",
//         }}
//       />

//       <DriverCard
//         name="Dara Khosrowshahi"
//         rating={4.9}
//         img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
//         car={{
//           model: "Audi A3",
//           licensePlate: "BE33ER",
//         }}
//       />
//     </div>
//   );
// }

// Interation8: LikeButton
// function App() {
//   return (
//     <div>
//       <LikeButton />
//     </div>
//   );
// }

// Interation9: ClickablePicture
// function App() {
//   return (
//     <div>
//       <ClickablePicture
//         img="https://picsum.photos/id/237/536/354"
//         imgClicked="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkWb3ByNH1CiWa2KO4LZxRusfNCcYoAUOQQWQ0zNCjknMXlw4OSBcwTXqXiVEkyxvhvc&usqp=CAU"
//       />
//     </div>
//   );
// }

// Interation10: Dice
// function App() {
//   return (
//     <div>
//       <Dice />
//     </div>
//   );
// }

// Interation11: Carousel
// function App() {
//   const images = [
//     "https://randomuser.me/api/portraits/women/1.jpg",
//     "https://randomuser.me/api/portraits/men/1.jpg",
//     "https://randomuser.me/api/portraits/women/2.jpg",
//     "https://randomuser.me/api/portraits/men/2.jpg",
//   ];

//   return (
//     <div>
//       <Carousel images={images} />
//     </div>
//   );
// }

// Interation12: NumbersTable
// function App() {
//   return (
//     <div>
//       <NumbersTable limit={12} />
//     </div>
//   );
// }

// Interation13: FaceBook
function App() {
  return <div>{/* <FaceBook /> */}</div>;
}

export default App;
