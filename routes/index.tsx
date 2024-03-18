import SideBar from '../components/SideBar.tsx';


export default function Home() {
  return (
    <div class="flex min-h-screen flex-col p-12 bg-gray-900">
      <div className="flex">
        <SideBar />
      </div>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center p-12">
        <img
          src="/chademma.jpg"
          width={400}
          height={400}
          alt="emmaandme"
          className="rounded-full border-transparent"
        />
      </div>
      <h2 className="text-center my-4 transition-[opacity] duration-[1300ms] ease-in-out delay-500 text-green-500">Hello! My name is Chad Rosser</h2>
    </div>      
  );
}

