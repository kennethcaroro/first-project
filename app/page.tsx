import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-5 m-5">
      <div className="w-32 h-44 flex items-center justify-center">
        <Image
          src={"/oo.jpg"}
          className="w-32 h-32 rounded-full"
          width={50}
          height={50}
          alt="Profile Photo"
        />
      </div>

      <div className="bg-white shadow-md  border-[1px] rounded-lg border-gray-500 p3 w-44 h-77">
        <b className="text-center">PROFILE</b>
        <h2 className="text-center"> Kenneth G. Caroro</h2>
        <h3 className="text-center"> 09563383570</h3>
      </div>
      <div className="bg-white shadow-md  border-[1px] rounded-lg border-gray-500 p3 w-full h-77">
        <b className=">text-center">PERSONAL INFO.</b>
        <h1 className="text">Name: Kenneth G. Caroro</h1>
        <h1 className="text">Address: Pob.Alto, Sergio Osmeña Z.N.</h1>
        <h1 className="text">Birth Date: 03/22/2004</h1>
        <h2 className="text">Place of Birth: Calamba Misamis Occidental</h2>
        <h1 className="text">Age: 21</h1>
        <h3 className="text"> Height: 5'3</h3>
        <h4 className="text"> Weight: 46kg</h4>
        <h5 className="text">Citizenship: filipino</h5>
        <h6 className="text">Father's Name: Ovellieto L. Caroro</h6>
        <h1 className="text"> Occupation: Decease </h1>
        <h2 className="text"> Mother's Name: Luisita G. Caroro</h2>
        <h3 className="text"> Occupation: Job Order (LGU) </h3>
      </div>
      <div className=" bg-white shadow-md  border-[1px] rounded-lg border-gray-500 p3 w-full h-77 ">
        <b className="text-center"> ABOUT ME</b>
        <h1 className="text-center">
          Enthusiastic second-year student with no prior job experience,
          passionate about anime, drawing, and video games, and highly willing
          to learn and take on any opportunity to grow.
        </h1>
      </div>
      <div className="bg-white shadow-md  border-[1px] rounded-lg border-gray-500 p3 w-full h-77">
        <b className="text-center">EDUCATIONAL BACKGROUND</b>
        <h1 className="text-center">
          {" "}
          Elementary: Sergio Osmeña Central School
        </h1>
        <h2 className="text-center">
          Junior High: Sergio Osmeña National High School{" "}
        </h2>
        <h3 className="text-center">
          Senior High: Sergio Osmeña National High School{" "}
        </h3>
      </div>
      <div className="bg-white shadow-md  border-[1px] rounded-lg border-gray-500 p3 w-full h-77">
        <b className="text-center">SKILLS</b>
        <h1 className="text">* Problem-Solving Mindset </h1>
        <h2 className="text">* Basic Computer Science Concepts</h2>
        <h3 className="text">* Learning to Research and Ask for Help</h3>
        <h4 className="text">*Programming and Software Development</h4>
        <h5 className="text">* Data Structures and Algorithms </h5>
        <h6 className="text">* Web Development </h6>
        <h1 className="text">* Database Management </h1>
        <h2 className="text">* Computer Architecture</h2>
      </div>
      <div className="bg-white shadow-md  border-[1px] rounded-lg border-gray-500 p3 w-full h-77">
        <b className="text-center">Footers</b>
        <h1 className="text-center"> Gmail: kennethcaroro488@gmail.com</h1>
        <h2 className="text-center">Facebook: Kenneth Gumabat Caroro</h2>
        <h3 className="text-center">Telegram: Caroro kenneth</h3>
        <h4 className="text-center"> Instagram: urcoffee</h4>
      </div>
    </div>
  );
}
