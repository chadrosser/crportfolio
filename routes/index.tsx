

export default function Home() {
  return (
    <div class="flex min-h-screen flex-col p-12 bg-neutral-900">
      <nav className="grid grid-cols-3 items-center">
          <h1 className="text-xl font-semibold text-white">
            Chad Rosser
          </h1>
          <span className="justify-self-center text-blue-600 font-mono">
            Github | LinkedIn
          </span>
      </nav>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/beli.PNG"
          width="500"
          height="500"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <p class="my-4">
          Try updating this message in the
        </p>
      </div>
    </div>
  );
}
