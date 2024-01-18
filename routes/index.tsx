import SideBar from '../components/SideBar.tsx';


export default function Home() {
  return (
    <div class="flex min-h-screen flex-col p-12 bg-gray-900">
      <div className="flex">
        <SideBar />
      </div>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/construction.jpg"
          width="500"
          height="500"
          alt="what"
        />
      </div>
    </div>      
  );
}


// navbar -  career, education, resume?, contact, making of this site, 

