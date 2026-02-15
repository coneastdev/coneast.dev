import '../styles/global.css';

export default function StandardImageList() {
  return (
    <div className="dark:bg-stone-800 dark:text-white">
      <div className="p-4">
        <p className="text-center"><b>Skills</b></p>
        <div className="flex m-0.5">
          <div className="flex-1">
            <p className="text-center">Main</p>
            <img src="https://skillicons.dev/icons?i=python,ts" alt="python,ts" className="mx-auto" />
          </div>
          <div className="flex-2">
            <p className="text-center">Okay</p>
            <img src="https://skillicons.dev/icons?i=tailwind,astro,qt,react" alt="tailwind,astro,qt,react" className="mx-auto" />
          </div>
          <div className="flex-2">
            <p className="text-center">Used</p>
            <img src="https://skillicons.dev/icons?i=mui,flask,rust,java" alt="mui,flask,rust,java" className="mx-auto" />
          </div>
        </div>
        <p className="text-center"><b>Tools</b></p>
        <div className="flex m-0.5">
          <div className="flex-1">
            <p className="text-center">Main</p>
            <img src="https://skillicons.dev/icons?i=git,vscode,linux,github" alt="git,vscode,linux,github" className="mx-auto" />
          </div>
          <div className="flex-1">
            <p className="text-center">Okay</p>
            <img src="https://skillicons.dev/icons?i=sqlite,markdown,bash" alt="sqlite,markdown,bash" className="mx-auto" />
          </div>
          <div className="flex-1">
            <p className="text-center">Used</p>
            <img src="https://skillicons.dev/icons?i=mongodb,cloudflare,docker,regex" alt="mongodb,cloudflare,docker,regex" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}